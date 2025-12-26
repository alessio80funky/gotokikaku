//演算子　「*」「/」

/*
 * 文字に使えない。
 * 混合の場合はストリング型の数字は番号型の数字として認識されます。
 * ストリング型同士でも計算成り立ちます
*/

console.log(3 * 3);//9
console.log(3 / 3);//1

console.log('3' * 3);//9
console.log('3'/ 3);//1

console.log('abc' * '3')//NaN
console.log('abc'/ 3)//NaN

//掛け算/割り算と小点数の計算について


console.log(0.2 * 3)//0.6000000000000001

console.log(((0.2 * 10) * 3 ) / 10);//0.6

//Math.round （メソッド）四捨五入

let x = 0.14 * 100;
let y = 0.28 * 100;

console.log(x);//14.000000000000002
console.log(y);//28.000000000000004

console.log(Math.round(x));//14
console.log(Math.round(y));//28


console.log((x + y) /100);//0.4200000000000001

console.log(Math.round(x + y)/100);//0.42

let z = 0.2 * 3;

console.log(z);//0.6000000000000001
console.log(Math.round(z));//1
console.log(z.toFixed(1));//0.6

//0.5以上だと１になる


