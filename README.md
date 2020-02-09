# オンゲキレート計算ツール
### オンゲキNETのレーティング対象曲のページに定数とレート値などを追加
<img width="412" alt="スクリーンショット 2020-01-20 23 57 56" src="https://user-images.githubusercontent.com/33801530/72736315-d32ee380-3be0-11ea-820a-139b271de28a.png">
<br>

## 👍  各種レート計算/表示機能
新曲/ベスト/リセント枠平均や，到達可能レートを自動で計算/表示

<img width="237" alt="スクリーンショット 2020-01-20 23 58 48" src="https://user-images.githubusercontent.com/33801530/72736354-dde97880-3be0-11ea-89ce-6442bfda28ae.png">

単曲レート値の計算/表示

<img width="430" alt="スクリーンショット 2020-01-20 23 39 12" src="https://user-images.githubusercontent.com/33801530/72735120-89dd9480-3bde-11ea-8bda-0a89b703e511.png">
<br>

## 👊  楽曲テクニカルスコア順並び替え
楽曲のテクニカルスコアが高い順にソート

<img width="436" alt="スクリーンショット 2020-01-20 23 49 15" src="https://user-images.githubusercontent.com/33801530/72735608-7e3e9d80-3bdf-11ea-82a0-0bc779dacb3a.png">
<br>

## 💬  使い方
## 各種レート計算/表示機能
0. プレミアムコースに登録
1. オンゲキNETにログインして，「プレイヤーデータ詳細」を選択
2. タブから「レーティング対象曲」を選択
3. ブックマークレットを起動

## 🔖  ブックマークレット
```javascript:(function(d,s){s=d.createElement('script');s.src='https://awazoooo.github.io/AddRateInfos/constant.js';d.body.appendChild(s);s=d.createElement('script');s.src='https://awazoooo.github.io/AddRateInfos/addRateInfos.js';d.body.appendChild(s);})(document);```

## 楽曲テクニカルスコア順並び替え
0. 「オンゲキNETトップページ」-> 「レコード」 -> 「楽曲別レコード」 -> 「カテゴリ別」を選択
1. 好きな絞り込み方法(ジャンル，あいうえお，キャラクター，LEVEL)を選択
2. 難易度を選択
3. ブックマークレットを起動

**こっちはスタンダードコースでも見れるためプレミアムコースでなくても使えます**

## ⚠️  注意
  * **自分が使うために雑に作った**
  * スタンダードコースには未対応(できるけどプレミアムコースでしか見れないようになってるため)
  * スコアランクAA以上の曲に対応
  * 定数未判明の曲はその難易度の最低値で計算(12なら12.0, 13+なら13.7など)

### 更新履歴
  * 20/2/9   定数更新
  * 20/1/16  12/17~1/16追加曲更新
  * 19/12/18 11/21~12/17追加曲更新
  * 19/11/14 11/14追加曲更新
  * 19/11/7  11/7追加曲更新
  * 19/10/17 10/17追加曲更新
<!--  * 19/10/5  10/3追加曲更新
  * 19/9/26  9/26追加曲更新
  * 19/9/22  9/19追加曲更新
  * 19/8/28  SUMMERバージョンの定数変更(12以上)に対応
  * 19/8/22  SUMMERバージョンの定数変更に対応(13以上のみ，判明してない曲は.0とか.7で計算)
  * 19/8/18  全曲ベスト平均(全曲のレート値上位30曲の平均)を表示するように(バージョンアップ後のベスト確認用にどうぞ)
  * 19/8/11  8/8追加曲更新
  * 19/8/3   8/1追加曲更新
  * 19/7/19  7/18とその前の追加曲更新(インド赤とStarring Starsは暫定で12.0) -->
  <!-- * 19/6/20  6/20追加曲更新 -->
  <!-- * 19/6/15  新曲枠やベスト枠などが足りない場合の不具合修正 -->
  <!-- * 19/6/6   6/6追加曲更新 -->
<!--  * 19/5/27 テクニカルスコア順ソートが欲しかったので作った．レベルごとの一覧画面で起動すると降順ソートされるように
  * 19/5/26 5/23追加曲更新
  * 19/5/10 5/9追加曲更新
  * 19/5/6  4/25追加曲更新
  * 19/4/14 4/11追加曲更新
  * 19/4/1  エイプリール追加曲更新
  * 19/3/22 3/21追加曲更新
  * 19/3/5  Lunaticがリセント枠に含まれないことによる，到達可能レートの計算を修正
  * 19/3/2  rankAAAの場合のレート値計算修正
  * 19/3/2  オンゲキ熱が再来して作り直した
  * 18/9/3  利用規約が怪しいのでアーカイブ
  * 18/9/2  ふと思いついて作った
-->
