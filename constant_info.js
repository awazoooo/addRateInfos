// 9/30 R.E.Dに対応
// 新曲枠曲
const redMusicTable = [
  // 11/5追加
  { title: 'コネクト', diff: 3, constant: 12.5 },
  { title: 'beautiful tomorrow', diff: 3, constant: 12.3 },
  { title: '進化系Colors', diff: 3, constant: 12.4 },
  { title: 'Shiny Smily Story', diff: 3, constant: 12.7 },
  { title: 'ガヴリールドロップキック', diff: 3, constant: 12.9 },
  { title: '反撃! 突撃! Back To Back!', diff: 3, constant: 13.2 },
  { title: 'ツクヨミステップ', diff: 3, constant: 13.5 },
  { title: 'よいまちカンターレ', diff: 3, constant: 13 },
  { title: 'この番組はうら若き公務員たちの提供でお送りいたします', diff: 3, constant: 13.3 },
  { title: 'Oshama Scramble! (Cranky Remix)', diff: 3, constant: 14.1 },
  { title: 'Jack-the-Ripper◆', diff: 3, constant: 14.5 },
  { title: '宛城、炎上！！', diff: 3, constant: 14.4 },

  // 9/30追加
  { title: 'カラフル', diff: 3, constant: 12.5 },
  { title: 'Forever Friends', diff: 3, constant: 12.4 },
  { title: '紅蓮華', diff: 3, constant: 12.5 },
  { title: 'Phantom Joke', diff: 3, constant: 13.5 },
  { title: 'ふわふわ時間(タイム)', diff: 3, constant: 12.6 },
  { title: '侵略ノススメ☆', diff: 3, constant: 12.9 },
  { title: '五等分の気持ち', diff: 3, constant: 12.3 },
  { title: 'だれかの心臓になれたなら', diff: 3, constant: 12.9 },
  { title: 'テオ', diff: 3, constant: 13 },
  { title: 'ベノム', diff: 3, constant: 12.8 },
  { title: 'ナイト・オブ・ナイツ (xi Remix)', diff: 3, constant: 14.1 },
  { title: 'Sound Chimera', diff: 3, constant: 14.4 },
  { title: 'Sound Chimera', diff: 2, constant: 12.8 },
  { title: '雷切-RAIKIRI-', diff: 3, constant: 14.4 },
  { title: '東亞 -O.N.G.E.K.I. MIX-', diff: 4, constant: 13.8 },
  { title: 'No Limit RED Force', diff: 3, constant: 12.7 },
  { title: 'GlitterGlitter', diff: 3, constant: 13.3 },
  { title: 'ウキウキ☆Candy!', diff: 3, constant: 13.1 },
  { title: 'All Right!', diff: 3, constant: 13.6 },
  { title: 'RED to RED', diff: 3, constant: 13.7 },
  { title: 'Daydreama', diff: 3, constant: 13.9 },
  { title: 'Lostwizz', diff: 3, constant: 13.7 },
  { title: 'Stargazing Dreamer', diff: 3, constant: 14.5 },
  { title: 'Stargazing Dreamer', diff: 2, constant: 13.5 },
  // 以下不明
  { title: 'STARTLINER -星咲 あかりソロver.-', diff: 3, constant: 11 },
  { title: 'STARTLINER -藤沢 柚子ソロver.-', diff: 3, constant: 11 },
  { title: 'STARTLINER -三角 葵ソロver.-', diff: 3, constant: 11 },
];


const summerPlusMusicTable = [
  // 14+
  { title: '脳天直撃', diff: 3, constant: 14.9 },
  { title: 'Singularity', diff: 3, constant: 14.8 },
  { title: 'otorii INNOVATED -[i]3-', diff: 3, constant: 14.7 },

  // 14
  { title: 'AstrøNotes.', diff: 3, constant: 14.6 },
  { title: 'Genesis', diff: 3, constant: 14.6 },
  { title: 'luna blu', diff: 4, constant: 14.6 },
  { title: 'End Time', diff: 3, constant: 14.5 },
  { title: 'Glorious Crown (tpz over-Over-OVERCUTE REMIX)', diff: 3, constant: 14.5 },
  { title: 'Galaxy Blaster', diff: 3, constant: 14.3 },
  { title: 'felys -final remix-', diff: 3, constant: 14.2 },
  { title: "R'N'R Monsta", diff: 3, constant: 14.1 },
  { title: 'Air', diff: 3, constant: 14.1 },
  { title: "Last Kingdom", diff: 3, constant: 14 },

  // 13+
  { title: "どどんぱち大音頭", diff: 4, constant: 13.9 },
  { title: 'PinqPiq (xovevox Remix)', diff: 3, constant: 13.9 },
  { title: 'Trinity Departure', diff: 3, constant: 13.9 },
  { title: "Vibes 2k20", diff: 3, constant: 13.9 },
  { title: "Ai Drew", diff: 3, constant: 13.9 },
  { title: "Dreadnought", diff: 3, constant: 13.8 },
  { title: 'アマツカミ', diff: 3, constant: 13.8 },
  { title: 'Destr0yer', diff: 3, constant: 13.8 },
  { title: "疾走あんさんぶる", diff: 3, constant: 13.7 },
  { title: '最強 the サマータイム!!!!!', diff: 4, constant: 13.7 },
  { title: "Sparkle", diff: 3, constant: 13.7 },
  { title: 'Summer is over', diff: 3, constant: 13.7 },

  // 13
  // { title: 'DAWNBREAKER', diff: 3, constant: 13.6 },
  // { title: 'Jorqer', diff: 3, constant: 13.6 },
  // { title: 'スパッと！スパイ＆スパイス', diff: 3, constant: 13.5 },
  // { title: 'ヒトガタ', diff: 3, constant: 13.5 },
  // { title: '花たちに希望を', diff: 3, constant: 13.5 },
  // { title: 'ベースラインやってる？笑', diff: 3, constant: 13.4 },
  // { title: '物凄い狂っとるフランちゃんが物凄いうた', diff: 3, constant: 13.4 },
  // { title: 'Iudicium “Apocalypsis Mix”', diff: 3, constant: 13.4 },
  // { title: "撩乱乙女†無双劇", diff: 3, constant: 13.3 },
  // { title: 'アンノウン・マザーグース', diff: 3, constant: 13.3 },
  // { title: '脳天直撃', diff: 2, constant: 13.3 },
  // { title: 'Singularity', diff: 2, constant: 13.2 },
  // { title: "ドラマツルギー", diff: 3, constant: 13.2 },
  // { title: 'Stage of Star', diff: 3, constant: 13.2 },
  // { title: '超常マイマイン', diff: 3, constant: 13.2 },
  // { title: '深海のリトルクライ feat. 土岐麻子', diff: 3, constant: 13.2 },
  // { title: '100%ちゅ～学生', diff: 3, constant: 13.2 },
  // { title: "Splash Dance!!", diff: 3, constant: 13.1 },
  // { title: "Seyana. ～何でも言うことを聞いてくれるアカネチャン～", diff: 3, constant: 13.1 },
  // { title: 'ナンセンス文学', diff: 3, constant: 13.1 },
  // { title: 'でらっくmaimai♪てんてこまい!', diff: 3, constant: 13 },
];

// ベスト枠
const musicTable = [
  // 14+
  { title: "Opfer", diff: 3, constant: 14.9 },
  { title: "Titania", diff: 3, constant: 14.9 },
  { title: "ω4", diff: 3, constant: 14.9 },
  { title: "Good bye, Merry-Go-Round.", diff: 3, constant: 14.9 },
  { title: "A Man In The Mirror", diff: 3, constant: 14.8 },
  { title: "Viyella's Tears", diff: 3, constant: 14.8 },
  { title: "YURUSHITE", diff: 3, constant: 14.7 },
  { title: "緋蜂", diff: 4, constant: 14.7 },

  // 14
  { title: "MEGATON BLAST", diff: 3, constant: 14.6 },
  { title: "GEOMETRIC DANCE", diff: 3, constant: 14.6 },
  { title: "World Vanquisher", diff: 3, constant: 14.6 },
  { title: "怒槌", diff: 3, constant: 14.5 },
  { title: "心", diff: 3, constant: 14.5 },
  { title: "Aenbharr", diff: 3, constant: 14.5 },
  { title: "ヒトリボッチサテライト", diff: 3, constant: 14.4 },
  { title: "Desperado Waltz", diff: 3, constant: 14.4 },
  {
    title: "混沌を越えし我らが神聖なる調律主を讃えよ",
    diff: 3,
    constant: 14.3
  },
  { title: "神威", diff: 3, constant: 14.3 },
  { title: "folern", diff: 3, constant: 14.3 },
  { title: "エンドマークに希望と涙を添えて", diff: 3, constant: 14.2 },
  { title: "FREEDOM DiVE (tpz Overcute Remix)", diff: 3, constant: 14.2 },
  { title: "Garakuta Doll Play", diff: 3, constant: 14.2 },
  { title: "Dazzle hop", diff: 3, constant: 14.1 },
  { title: "Everlasting Today", diff: 3, constant: 14.1 },
  { title: "SILENT BLUE", diff: 3, constant: 14.1 },
  { title: "Imperishable Night 2006 (2016 Refine)", diff: 3, constant: 14.1 },
  { title: "Calamity Fortune", diff: 4, constant: 14.1 },
  { title: "ジングルベル", diff: 4, constant: 14 },
  { title: "ジングルベル", diff: 3, constant: 14 },
  { title: "7thSense", diff: 3, constant: 14 },
  { title: "GOODRAGE", diff: 3, constant: 14 },
  { title: "No Remorse", diff: 4, constant: 14 },
  { title: "初音ミクの激唱", diff: 4, constant: 14 },
  { title: "初音ミクの激唱", diff: 3, constant: 14 },

  // 13+
  { title: "閃鋼のブリューナク", diff: 3, constant: 13.9 },
  { title: "Ai Nov", diff: 3, constant: 13.9 },
  { title: "Mini skirt", diff: 3, constant: 13.9 },
  { title: "Baqeela", diff: 3, constant: 13.9 },
  { title: "ナイト・オブ・ナイツ", diff: 4, constant: 13.9 },
  { title: "The wheel to the right", diff: 3, constant: 13.8 },
  { title: "Lazy Addiction", diff: 3, constant: 13.8 },
  { title: "HONEY-Q", diff: 3, constant: 13.8 },
  { title: "Duello", diff: 3, constant: 13.8 },
  { title: "カミサマネジマキ", diff: 3, constant: 13.8 },
  { title: "ギガンティックO.T.N", diff: 3, constant: 13.8 },
  { title: "conflict", diff: 3, constant: 13.8 },
  { title: "ぼくらの16bit戦争", diff: 3, constant: 13.8 },
  { title: "Calamity Fortune", diff: 3, constant: 13.7 },
  { title: "クイーンオブハート", diff: 3, constant: 13.7 },
  { title: "Oshama Scramble!", diff: 3, constant: 13.7 },
  { title: "AMAZING MIGHTYYYY!!!!", diff: 3, constant: 13.7 },
  { title: "初音ミクの消失", diff: 3, constant: 13.7 },
  { title: "Sakura Fubuki", diff: 4, constant: 13.7 },
  { title: "Doll Judgment", diff: 3, constant: 13.7 },
  { title: "BOKUTO", diff: 3, constant: 13.7 },
  { title: "GO! GO! MANIAC", diff: 3, constant: 13.7 },
  { title: "Touch and Go", diff: 3, constant: 13.7 },
  { title: "裏表ラバーズ", diff: 3, constant: 13.7 },

  // 13
  // { title: "Death Doll", diff: 3, constant: 13.6 },
  // { title: "インビジブル", diff: 3, constant: 13.6 },
  // { title: "Radiance", diff: 3, constant: 13.6 },
  // { title: "Honey Bear", diff: 3, constant: 13.6 },
  // { title: "地球最後の告白を", diff: 3, constant: 13.6 },
  // { title: "アリサのテーマ", diff: 3, constant: 13.6 },
  // { title: "Maqrite", diff: 3, constant: 13.6 },
  // { title: "Destiny Runner", diff: 3, constant: 13.6 },
  // { title: "ウサテイ", diff: 3, constant: 13.6 },
  // { title: "銀のめぐり", diff: 3, constant: 13.6 },
  // { title: "サドマミホリック", diff: 3, constant: 13.5 },
  // { title: "Halcyon", diff: 3, constant: 13.5 },
  // { title: "Dolphika", diff: 3, constant: 13.5 },
  // { title: "最終鬼畜妹フランドール・Ｓ", diff: 3, constant: 13.5 },
  // { title: "Chelly spLash♪♪", diff: 3, constant: 13.5 },
  // { title: "We Gonna Journey", diff: 3, constant: 13.5 },
  // { title: "Kattobi KEIKYU Rider", diff: 3, constant: 13.5 },
  // { title: "ナイト・オブ・ナイツ (Cranky Remix)", diff: 3, constant: 13.5 },
  // { title: "Petit Etoile", diff: 3, constant: 13.5 },
  // { title: "Opfer", diff: 2, constant: 13.5 },
  // { title: "妖狐仙楽踏", diff: 3, constant: 13.5 },
  // { title: "エピクロスの虹はもう見えない", diff: 3, constant: 13.4 },
  // { title: "Sword of Secret", diff: 3, constant: 13.4 },
  // { title: "Scream out! -音華鏡 Re:BREAK-", diff: 3, constant: 13.4 },
  // { title: "Brain Power", diff: 3, constant: 13.4 },
  // { title: "終わりの先の音節", diff: 3, constant: 13.4 },
  // { title: "全力ハッピーライフ", diff: 3, constant: 13.4 },
  // { title: "ロボットプラネットユートピア", diff: 3, constant: 13.4 },
  // {
  //   title: "患部で止まってすぐ溶ける～狂気の優曇華院",
  //   diff: 3,
  //   constant: 13.4
  // },
  // { title: "A Man In The Mirror", diff: 2, constant: 13.4 },
  // { title: "オンゲキ全域★アカネサマ？", diff: 3, constant: 13.3 },
  // { title: "セツナトリップ", diff: 3, constant: 13.3 },
  // { title: "人生リセットボタン", diff: 3, constant: 13.3 },
  // { title: "BOUNCE & DANCE", diff: 3, constant: 13.3 },
  // { title: "TAKE ON THE WORLD", diff: 3, constant: 13.3 },
  // { title: "ブツメツビーターズ", diff: 3, constant: 13.3 },

  // { title: "Viyella's Tears", diff: 2, constant: 13.2 },
  // { title: "Titania", diff: 2, constant: 13.2 },
  // {
  //   title: "今ぞ♡崇め奉れ☆オマエらよ！！～姫の秘メタル渇望～",
  //   diff: 3,
  //   constant: 13.2
  // },
  // { title: "Gate of Doom", diff: 3, constant: 13.2 },
  // { title: "ライトスピード・デイズ", diff: 3, constant: 13.2 },
  // { title: "こどものしくみ", diff: 3, constant: 13.2 },
  // { title: "幸せになれる隠しコマンドがあるらしい", diff: 3, constant: 13.2 },
  // { title: "脳漿炸裂ガール", diff: 3, constant: 13.2 },
  // { title: "fulgente", diff: 3, constant: 13.2 },
  // { title: "メニメニマニマニ", diff: 3, constant: 13.2 },
  // { title: "ようこそジャパリパークへ", diff: 4, constant: 13.2 },
  // { title: "ドーナツホール", diff: 3, constant: 13.2 },
  // { title: "ω4", diff: 2, constant: 13.1 },
  // { title: "Good bye, Merry-Go-Round.", diff: 2, constant: 13.1 },
  // { title: "フィクサー", diff: 3, constant: 13.1 },
  // { title: "Cyberozar", diff: 3, constant: 13.1 },
  // { title: "Paqqin", diff: 3, constant: 13.1 },
  // {
  //   title: "ゴーカ！ごーかい！？ファントムシーフ！",
  //   diff: 3,
  //   constant: 13.1
  // },
  // { title: "天火明命", diff: 3, constant: 13.1 },
  // { title: "青春サイダー", diff: 3, constant: 13.1 },
  // { title: "DAYBREAK FRONTLINE", diff: 3, constant: 13.1 },
  // { title: "UTAKATA", diff: 3, constant: 13.1 },
  // { title: "MEGATON BLAST", diff: 2, constant: 13 },
  // { title: "ADAMAS", diff: 3, constant: 13 },
  // { title: "Let's Starry Party！", diff: 3, constant: 13 },
  // { title: "デリヘル呼んだら君が来た", diff: 3, constant: 13 },
  // { title: "トーキョーゲットー", diff: 3, constant: 13 },
  // { title: "ECHO", diff: 3, constant: 13 },
  // { title: "しゅわスパ大作戦☆", diff: 3, constant: 13 },
  // { title: "MAKING！ハイタッチ！", diff: 3, constant: 13 },
  // { title: "まっすぐ→→→ストリーム！", diff: 3, constant: 13 },
  // { title: "アンハッピーリフレイン", diff: 3, constant: 13 },
  // { title: "星屑ユートピア", diff: 3, constant: 13 },
  // //{ title: "Rising Hope", diff: 3, constant: 13 },
  // { title: "God knows...", diff: 3, constant: 13 },
  // { title: "時の冒険者", diff: 3, constant: 13 },
  // { title: "sweet little sister", diff: 3, constant: 13 },
  // { title: "Opera of the wasteland", diff: 3, constant: 13 },
  // {
  //   title: "混沌を越えし我らが神聖なる調律主を讃えよ",
  //   diff: 2,
  //   constant: 13
  // },
  // { title: "Garakuta Doll Play", diff: 2, constant: 13 },
  // { title: "TeA", diff: 3, constant: 13 },
  // { title: "本能的 Survivor", diff: 3, constant: 13 },
  // { title: "ロッキンピンクモンスター", diff: 3, constant: 13 }
];

const constantTable = musicTable.concat(summerPlusMusicTable).concat(redMusicTable);

export { redMusicTable, summerPlusMusicTable, musicTable, constantTable };
