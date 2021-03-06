import { constantTable } from './constant_info';
import { FoundConstantInfo, DefaultConstantInfo, RateTargetMusicInfo, RateInfo, MusicRateInfo, SortedElements } from './types';

(function() {
  const ONGEKI_PREMIUM_RATE_TARGET_URL =
    "https://ongeki-net.com/ongeki-mobile/home/ratingTargetMusic/";
  const ONGEKI_RECORD_URL = "https://ongeki-net.com/ongeki-mobile/record/";

  /* 定数計算関連 */

  const RANKSSSplus = 1007500;
  const RANKSSS = 1000000;
  const RANKSS = 990000;
  const RANKS = 970000;
  // const RANKAAA = 940000;
  const RANKAA = 900000;

  // TODO: RANKAの場合の追加
  // MEMO: RANKAAとAAAは自力で確かめられない
  const calcRate = (constant: number, score: number): number => {
    if (score >= RANKSSSplus) {
      return constant + 2.0;
    } else if (score >= RANKSSS) {
      return constant + 1.5 + (score - RANKSSS) / 15000;
    } else if (score >= RANKSS) {
      return constant + 1.0 + (score - RANKSS) / 20000;
    } else if (score >= RANKS) {
      return constant + (score - RANKS) / 20000;
    } else if (score >= RANKAA) {
      return constant - (RANKS - score) / 175 / 100;
    } else {
      // rankA以下は計算方法がわからない
      return 0.0;
    }
  };

  // 難易度に対応する数値を返す
  const diffOfString = (str: string): number => {
    switch (str) {
      case "lunatic":
        return 4;
      case "master":
        return 3;
      case "expert":
        return 2;
      case "advanced":
        return 1;
      default:
        // basic
        return 0;
    }
  };

  // 定数表から定数を取得
  const getConstant = (
    title: string,
    diff: number,
    defaultConstantData: DefaultConstantInfo
  ) : FoundConstantInfo => {

    // 条件に一致するもの全て取得
    const musicConstants = constantTable.filter(
      m => m.title == title && m.diff == diff
    );
    switch (musicConstants.length) {
      case 0:
        // 定数がまだ本ツールに登録されていない場合は難易度帯から算出したデフォルト値を使用
        return {
          constant: defaultConstantData.defaultConstant,
          isDefault: true
        };
        break;
      case 1:
        // 1つの場合は検索結果を使用
        return {
          constant: musicConstants[0].constant,
          isDefault: false
        };
        break;
      default:
        // 検索結果が複数の場合はvalid関数を満たす最初の定数を使用
        for (const musicConstant of musicConstants) {
          if (defaultConstantData.validFunc(musicConstant.constant)) {
            return {
              constant: musicConstant.constant,
              isDefault: false
            };
          }
        }
        // 満たすものがなかった場合はデフォルト値(通常はない)
        return {
          constant: defaultConstantData.defaultConstant,
          isDefault: true
        };
    }
  };

  // 難易度からデフォルト定数(例: 13+なら13.7)を取得
  const getDefaultConstant = (diffStr: string): DefaultConstantInfo => {
    const diffPair = diffStr.split("+");
    if (diffPair.length == 1) {
      const defaultConstant = parseInt(diffPair[0]);
      // XXX: 同名の曲(Singularity)が出たため定数が指定の範囲内にあるかチェックする
      // ただし同じ難易度帯に出てしまったらこの方法では対応できないため暫定対応
      const validFunc = (c: number): boolean =>
        defaultConstant <= c && c < defaultConstant + 0.7;
      return {
        defaultConstant,
        validFunc
      };
    } else {
      const defaultConstant: number = parseFloat(diffPair[0] + ".7");
      const validFunc = (c: number): boolean =>
        defaultConstant <= c && c < parseInt(String(defaultConstant)) + 1;
      return {
        defaultConstant,
        validFunc
      };
    }
  };

  /* JS utils */

  // 小数点以下2位までに丸める
  // 以下の方法だと round2(16.4) -> 16.39 になってしまうため，文字列でうまいことする
  // const round2 = n => Math.floor(n * Math.pow(10, 2)) / Math.pow(10, 2);
  const round2 = (n: number): number => {
    const numStrs = String(n).split('.');
    // 整数
    if (numStrs.length === 1)
      return n;

    // 小数
    if (numStrs[1].length < 3) {
      return n;
    } else {
      return Number(numStrs[0] + '.' + numStrs[1].slice(0, 2))
    }
  }

  // 文字列からカンマを除く
  // removeComma("1,000,000") -> "1000000")
  const removeComma = (s: string): string => s.split(",").join("");


  /* HTML操作 */

  // Copy Node
  const copyNode = (element: HTMLElement | Element): Element => {
    // HACK: Casting Node to Element
    return <Element>element.cloneNode(true);
  }

  // boxにstr:valueという情報を追加して返す
  const makeInfoBox = (box: Element, str: string, value: string, isItalic = false): Element => {
    box.getElementsByClassName("score_label")[0].textContent = str;
    box.getElementsByClassName("f_14")[0].textContent = value;
    if (isItalic) {
      // HACK: Casting Element to HTMLElement
      const fontTargetElement: HTMLElement = <HTMLElement>box.getElementsByClassName("f_14")[0];
      fontTargetElement.style.fontStyle = "italic";
    }
    return box;
  };

  // 1曲ごとの処理
  const modifyOneMusicHTML = (x: Element): MusicRateInfo => {
    // DOMからデータを取得
    const musicTitle: string = x.getElementsByClassName("music_label")[0].textContent || '';
    const score: string = x.getElementsByClassName("f_14")[0].textContent || '';
    const diff: number = diffOfString(x.classList.value.split(" ")[1].split("_")[0]);
    const musicDiff: string = x.getElementsByClassName("score_level")[0].textContent || '';

    // 定数とレート値を算出
    const musicConstantInfo = getConstant(
      musicTitle,
      diff,
      getDefaultConstant(musicDiff)
    );

    // スコアにはカンマがついた形(1,000,000)となっているため，除く+数値に変換してcalcRateに渡す
    // 計算した値は丸める
    const musicRate: number = round2(
      calcRate(musicConstantInfo.constant, Number(removeComma(score)))
    );


    // 情報を表示するBoxを作成
    const scoreBox: Element = x.getElementsByClassName("w_260")[0];
    const constantBox: Element = makeInfoBox(
      copyNode(scoreBox),
      "MUSIC CONSTANT",
      musicConstantInfo.constant.toString(),
      musicConstantInfo.isDefault
    );
    const rateBox: Element = makeInfoBox(
      copyNode(scoreBox),
      "MUSIC RATE",
      musicRate.toString(),
      musicConstantInfo.isDefault
    );

    // HTMLにBoxを追加
    x.appendChild(constantBox);
    x.appendChild(rateBox);

    // 集計処理のために単曲レート値を返す
    return { rate: musicRate, diff: diff };
  };

  // ベスト枠，リセント枠，新曲枠の数
  const NBEST = 30;
  const NRECENT = 10;
  const NNEWMUSIC = 15;
  const NALL = NBEST + NRECENT + NNEWMUSIC;

  // ベスト平均とか到達可能とかを計算
  // 曲数が足りなくても規定の曲数で割る
  const calcParams = (d: RateTargetMusicInfo, topRate: number): RateInfo => {
    const add = (x: number, y: number): number => x + y;
    const bestSum = d.bests.reduce(add);
    const recentSum = d.recents.reduce(add);
    const newSum = d.news.reduce(add);
    const reachableSum = bestSum + topRate * 10 + newSum;

    // 全曲レート値上位30曲
    const allBests = d.bests
      .concat(d.news)
      .sort((x, y) => y - x)
      .slice(0, NBEST);
    const allBestsSum = allBests.reduce(add);
    return {
      bestSum: bestSum,
      nBest: d.bests.length,
      recentSum: recentSum,
      nRecent: d.recents.length,
      newSum: newSum,
      nNew: d.news.length,
      reachableSum: reachableSum,
      // 新旧全部合わせたベスト30曲の平均・下限
      allBestAve: allBestsSum,
      allBestMin: allBests[NBEST - 1]
    };
  };

  // ベスト平均などを表示するBox
  const makeParamBox = (box: HTMLElement, params: RateInfo): HTMLElement => {
    // 各パラメータを表示するBox
    const detailBox: Element = box.getElementsByClassName("w_260")[0];
    // font size
    // HACK: Casting Element to HTMLElement
    const fontTargetElement: HTMLElement = <HTMLElement>detailBox
      .getElementsByClassName("score_value")[0]
      .getElementsByClassName("f_14")[0];
    fontTargetElement.style.fontSize = "13px";

    // 適当なboxをコピーして使用
    const newAveBox: Element = makeInfoBox(
      copyNode(detailBox),
      `新曲枠平均 (${params.nNew}/${NNEWMUSIC})`,
      `${round2(params.newSum / NNEWMUSIC)}(${round2(params.newSum)})`
    );
    const bestAveBox: Element = makeInfoBox(
      copyNode(detailBox),
      `ベスト枠平均 (${params.nBest}/${NBEST})`,
      `${round2(params.bestSum / NBEST)}(${round2(params.bestSum)})`
    );
    const recentAveBox: Element = makeInfoBox(
      copyNode(detailBox),
      `リセント枠平均 (${params.nRecent}/${NRECENT})`,
      `${round2(params.recentSum / NRECENT)}(${round2(params.recentSum)})`
    );
    const reachableBox: Element = makeInfoBox(
      copyNode(detailBox),
      "到達可能レート",
      `${round2(params.reachableSum / NALL)}(${round2(params.reachableSum)})`
    );
    //const allBestAveBox = makeInfoBox(detailBox.cloneNode(true), "全曲上位30曲平均", round2(params.allBestAve));
    //const allBestMinBox = makeInfoBox(detailBox.cloneNode(true), "上位30曲下限", round2(params.allBestMin));

    // 元のTECHNICAL HIGHSCOREを消す
    detailBox.remove();

    // ベスト平均などを追加
    box.appendChild(newAveBox);
    box.appendChild(bestAveBox);
    box.appendChild(recentAveBox);
    box.appendChild(reachableBox);
    //box.appendChild(allBestAveBox);
    //box.appendChild(allBestMinBox);

    return box;
  };

  // レーティング対象曲のページに定数とレート値を追加
  const addConstantAndRate = (): void => {
    // 楽曲Boxを取得
    // 先頭6つは余分データ.slice(6);
    const musicElements: HTMLCollection = document.getElementsByClassName("wrapper main_wrapper t_c")[0].children;
    const musics: Element[] = Array.from(musicElements).slice(6);

    // ベスト平均などを表示するBox
    // 最初の楽曲Boxを雑にコピー
    let paramBox: HTMLElement = <HTMLElement>musics[0].cloneNode(true);
    // レベル表示を消す
    paramBox.getElementsByClassName("score_level")[0].textContent = " ";
    // 曲表示の部分を書き換え
    paramBox.getElementsByClassName("music_label")[0].textContent =
      "レート情報";

    const bests: number[] = [];
    const recents: number[] = [];
    const news: number[] = [];
    let topRate = 0.0;

    // オンゲキNETの並び順に合わせる
    const paramList = ["news", "bests", "recents"];
    let paramIdx = 0;
    let key = paramList[paramIdx];

    for (const obj of musics) {
      // m_15が 新曲/ベスト/リセント/候補 の区切り
      if (obj.classList.contains("m_15")) {
        paramIdx += 1;
        key = paramList[paramIdx];
        continue;
      }

      // 楽曲データでないときは飛ばす
      if (!obj.classList.contains("basic_btn")) {
        continue;
      }

      // MEMO: ここまで残ってるobjはmusicBoxだけ
      // 楽曲Boxの処理 + データ集計処理
      const info: MusicRateInfo = modifyOneMusicHTML(obj);
      if (paramIdx >= 3) {
        continue;
      }
      // 型チェック通過のため、
      switch (key) {
        case 'news':
          news.push(info.rate);
          break;
        case 'bests':
          bests.push(info.rate);
          break;
        case 'recents':
          recents.push(info.rate);
          break;
      }

      // topRateの取得
      if (paramIdx == 1 && topRate == 0.0 && info.diff != 4) {
        topRate = info.rate;
      }
    }

    // ベスト平均などを計算
    const params = calcParams({ bests, news, recents }, topRate);
    paramBox = makeParamBox(paramBox, params);
    paramBox.classList.remove("master_score_back");

    // ベスト枠平均などのパラメータを「レーティング対象曲(ベスト)」の上に追加
    // 追加する場所の親を取得
    const ref: Element = document.getElementsByClassName("main_wrapper")[0];
    // 追加する場所の下を取得
    const underRef: Element = document.getElementsByClassName("m_15")[1];
    // 追加
    ref.insertBefore(paramBox, underRef);
  };

  // レベル別一覧画面でテクニカルスコア順降順ソート
  const technicalScoreSort = (): void => {
    [].slice
      .call(document.getElementsByClassName("basic_btn"))
      .map((d: HTMLElement): SortedElements => {
        const score: Element = d.getElementsByClassName("score_value")[2];
        return {
          dom: d,
          value: score ? Number((score.textContent || "0").split(",").join("")) : 0
        };
      })
      .sort((a: SortedElements, b: SortedElements): number => b.value - a.value)
      .forEach((v: SortedElements) =>
        document.getElementsByClassName("container3")[0].appendChild(v.dom)
      );
  };

  // テクニカルスコア降順ソートが有効なURL(ONGEKI_RECORD_URL)以下
  const ONGEKI_SORTABLE_URLS = [
    "musicGenre",
    "musicWord",
    "musicCharacter",
    "musicLevel"
  ];

  const main = (): void => {
    const url = location.href;
    if (url == ONGEKI_PREMIUM_RATE_TARGET_URL) {
      alert("定数とレート値を計算します");
      console.log("定数とレート値追加中...");
      addConstantAndRate();
      return;
    }
    if (url.indexOf(ONGEKI_RECORD_URL) != -1) {
      // ONGEKI_RECORD_URLがurlの先頭かつ複数含まれることはない
      const selectType = url.split(ONGEKI_RECORD_URL)[1].split("/")[0];
      if (ONGEKI_SORTABLE_URLS.includes(selectType)) {
        console.log("テクニカルスコア順ソート");
        technicalScoreSort();
        return;
      }
    }
    alert("現在のURLが正しくありません...");
    alert(
      "レート値を計算する場合は，「プレイヤーデータ詳細」から「レーティング対象曲」タブを選択して下さい」"
    );
    return;
  };
  main();
})();
