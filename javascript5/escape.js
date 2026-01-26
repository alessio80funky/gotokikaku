//エスケープシーケンス

// [\n] 改行　*

console.log("一行目\n二行目");

// [\t] 横にタブ　*

console.log("一番目\t二番目");


// [\"] [\']*

console.log("message1: \"message2\"");

console.log('message1: \'message2\'');


// [\v] 縦に改行してタブを入れる

console.log("A\vB\vC\vD");

// [\r] \rの前にある文書を全部消します。　

console.log("123\rABC");

// [\b] 一つの文字を消します

console.log("123\bABC");