//分割代入
//分割代入は配列やオブジェクトの中身を、もっとシンプルに取り出すためのテクニックです。

//配列の分割代入

let colors = ["red", "blue", "green"];

let a1 = colors[0];
let a2 = colors[1];
let a3 = colors[2];


console.log(a2);

//分割代入

let colors2 =  ["red", "blue", "green"];

let [b1, b2 , b3] = colors2;

console.log(b1);

let data = [56,57,58,59,60,61,62,63,64,65];

let [x1,x2,x3, ...other] = data;

console.log(x1);
console.log(...other);//中のデータだけを取り出します
console.log(other);//こういう風に書くと配列としてデータを取り出してきます。注意

//オブジェクトの分割代入

let user = {
    name:"marco",
    age:35,
    country: "japan"
}


//従来の書き方

let a = user.name;
let b = user.age;

console.log(a);

//分割代入

let user2 = {
    name:"marco",
    age:35,
    country: "japan"
}

let { name, age, country} = user2;

console.log(name);

console.log(user2.name)

//ネストの分割代入（配列とオブジェクト）今回はオブジェクトのみ

let user3 = {
    name1:"marco",
    age1: 35,
    country1:"japan",
    info:{
        nationality:"italia"
    }
};

let {name1, age1, country1, info: {nationality}} = user3;

console.log(user3.name1, user3.info.nationality)
//marco italia

console.log(name1, nationality)
//marco italia

//...rest

let user4 = {
    name2:"marco",
    age2:35,
    country2: "japan"
}

let { name2 , ...rest} = user4;

console.log(name2 , rest);//オブジェクトごとに出力
//marco { age2: 35, country2: 'japan' }
//console.log(name2 , ...rest);//エラーが発生　NGの書き方→注意


//入れ替え(応用するプログラムが少ない)

let x = 1;
let y = 2;

[x,y] = [y,x];

console.log(x);
console.log(y);