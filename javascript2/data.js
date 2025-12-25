//データ

/* 
基本型　（プリミティブ型）

1.number型　（数値型）　=> 数字のことです

2.string型　（文字列型）=> テキストのこと

3.boolean型　（判断型）=> 真か偽のこと true/false

4.特殊型　=> null （値がないです）undefined (未定義の値)

*/

//number型

//小数でもnumber型のでーた型になります

let test = 0.34;
console.log(test);

//特殊な出力の例：

let num = 10 / 0;
console.log(num)//Infinity 無限大

let num2 = "abc" *  3;
console.log(num2)//NaN (Not a Number) 文字列の場合のみ　ストリング型の番号が番号として認識する

//string型

//文字列は'シングルクォート'、"ダブルクォート"、`バッククォート`で書きます。

let name = "mario";
console.log(name);

let name2 = 'luigi';
console.log(name2);

let message = `hello, it's me ${name}`;//テンプレート文字列(埋め込みタグ)
console.log(message);

let string = "mario" + "luigi";//二つの文字列組み合わせる場合
console.log(string);

//boolean型 （判断型）
//true(真)　か　false(偽)　しかありません。
//boolean型というデータ型はプログラミングでは「はい・いいえ」、「オン・オフ」、「ある・ない」といった判断を扱うときに必ず使うデータ型です。

let isStudent = true;
let isTeacher = false;

console.log(isStudent);
console.log(isTeacher);



/*
参照型

array型　(配列)　　=> データの集合

object型　(オブジェクト)　=> データの集合

*/


//配列型　array

//配列型は「整理番号をつけて順番にデータを管理する箱です」
            //  0         1         2      インデックス番号（整理番号）
let fruit = ["apple", "banana", "orange"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);

//ネスト(巣）配列のネスト

let users = [
// 0     1
["taro", 20], //0番目の配列
// 0       1
["hanako", 25]//1番目の配列

];

//サブ配列を取り出す

console.log(users[0]);

//サブ配列の中に入っている特定のデータを取り出す
               //配列　//中身
console.log(users[0][1], users[1][0]);//入れ子の配列と言います。（インスタンスプロパティ　また後日説明します）



//object

//ラペルで整理する

let person = {
    name: "mario",
    age:32,
    job: "engineer"
}

console.log(person);
console.log(person.age , person.job);


//ネスト（巣）オブジェクトのネスト

let student = {
    name: "mario",
    score: {
        math: 80,
        english: 70
    }
}

console.log(student);
console.log(student.score.math);//入れ子のオブジェクト

//ネストについて注意（配列とオブジェクト）
//ネストはできる限り2段階まで（でないと解読性が下がる）

let company = {
    name: "Maruweb",
    address:{
        city: "osaka",
        zip: "530-0001",
        office: {
            room:"502",
            address2: [
                ["name1", 123],
                ["name2", 456]
            ]
        }
    }
}

console.log(company.address.office.room);
console.log(company.address.office.address2[0][0]);

