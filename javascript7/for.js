//for文


/*
for(初期値; 条件式; インクリメント演算子（更新）){
    //実行したい内容をいれます
}
*/

for(let i = 0; i < 100; i++){
    console.log("i=", i);
}

//for...in(オブジェクトにしか使用しない)
//オブジェクトのキーを順番に取り出す。

const user = {
    name: "marco",
    age:35,
    country:"japan"
};

for(let key in user){
    console.log(key, "=", user[key]);
};

//for...of（配列にしか使用しない)
//配列の値を順番に取り出す命令です

const fruits = ["banana", "apple", "kiwi"];

for(let k of fruits){
    console.log(k);
};


/*
配列に使うfor..inに関しての注意: for..in は文法的に使えますが、
配列の値ではなく、インデックス番号しか取り出さない。
*/

const j = ["red", "blue", "green"];

for (let x in j){
    console.log(x);
}

//for..of 分割代入
//配列の中にたくさん配列がある場合

const colors = [
    ["apricot", "オレンジ"],
    ["strawberry", "赤"],
    ["banana", "黄"]
];

for (let[fruits, color] of colors) {
    console.log(`${fruits}は${color}色です`);
}

//配列の中にたくさんオブジェクがある場合

const object = [
    {name:"apricot", color:"オレンジ"},
    {name:"strawberry", color:"赤"},
    {name:"banana", color:"黄"}
];

for (let{name, color} of object) {
    console.log(`${name}は${color}色です`);
}

//注意 カンマ演算子


for (let i = 0, j = 5,  x = 6; i < 10; i++, j++, x++){
    console.log(i * j + x)
}
