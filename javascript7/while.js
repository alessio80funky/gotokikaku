//while文

//最初に条件をチェックしてから処理を実行する
///条件が最初からfalse(合わない場合は)なら、一度も実行されない。

let i = 0;

while (i < 5){
    console.log("i =", i);
    i++;//必ず書く
}

//do..while文
//処理を必ず1回実行してから条件をチェックするループ。
//条件がfalseでも最低1回は実行される。(元の変数)

let j = 0;

do{
    console.log("j =" , j)
    j++;
}while(j < 5);

//注意
//{}波括弧を省略しない
/*
let y = 10;

while (y < 5)
console.log("msg", y)

let z = 10;

do
console.log("msg", z)
while(z < 10)
*/

//無限ループ

let x = 5;
while(x < 10){
    console.log(x)
    x++; //ループを制御する役割を果たしています。
}