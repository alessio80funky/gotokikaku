//minus演算子　「-」

/*
 * 文字に使えない。
 * 混合の場合はストリング型の数字は番号型の数字として認識されます。
 * ストリング型の番号同士でも計算が成り立ちます
*/

//アルファベット文字に使用できない。

console.log('java' - 'script');// NaN (Not a Number)

console.log( 'java' - 10 ); // NaN (Not a Number)

//混合の場合はストリング型の数字は番号型の数字として認識されます。

console.log(5 - "6")//-1
console.log('6' - 5)//1

//ストリング型同士でも計算成り立ちます

console.log("10" - "1");//9 

console.log(10 - 1);//9 
