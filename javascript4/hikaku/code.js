//比較演算子

//評価型　「==, !=, ===, !==」

/**
 * == -> 大体同じ
 * ===  -> 完全に同じ
 * != -> ほとんど同じじゃない
 * !==  -> 完全に同じじゃない
 */

//注意

//実務では　===/!== を使います。　==/!= バグの温床です。

let x = 0 == false;
console.log(x);//true

let y = 0 === false;//型が違うから
console.log(y)//false

let z = "5" == 5;
console.log(z);//true

let w = "5" === 5;//型が違うから
console.log(w);//false


//大小型　「>, <, >=, <=」

//番号型

let num = 2 > 10;
console.log(num);//false

console.log(3.14 > 3);//true
console.log(3.20 < 3.14);//false

//文字列
//(頭文字だけ判断する)
//unicode順で判断行われます。
//文字列の数字のケース
            //32    //31
let num2 =   "2"  > "1000";//true
             //31    //31
let number = "1" > "1000";//false

//通常の文字列のケース
//(頭文字だけ判断する)
//unicode順で判断行われます。
             //41      //62
let string = "Apple" > "banana"; //false



// 「>=, <=」基本的に数字の比較に使われます。

console.log(3.18 >= 3.20);//false　→　条件は3.20を含めて以上の数字を指定するとtrueになりますが、この場合は3.18なので3.20以下の数字ですからfalseになります
console.log(2.47 <= 2.49);//true -> 条件は2.49を含めて以下の数字を指定するとこの場合はtrueになります。



//特殊なケース

let a = 0.1 + 0.2;//0.300000000004

let b = 0.3;

console.log(a);//0.300000000004
console.log(b);//0.3

console.log(a === b)//false

//trueにするために

//Math.roundを使うか
console.log(Math.round(a * 100)/ 100 === b );//true
//.toFixedを使います
console.log((a * 100).toFixed(0) / 100 === b);//true
