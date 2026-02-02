//テンプレートコンストラクター❷
//new 演算子を書くとプリミティブのデータ型がobjectとして認識されます。
const string = String(14);

console.log(typeof string);

const number = Number("10");

console.log(typeof number);

//arrayコンストラクター

const arr = new Array(1,2,3,4,5,6,7,8,9);

console.log(arr);

//objectコンストラクター

const obj = new Object();

obj.name = "kaori";
obj.age = 29;
obj.name2 = "tsubasa"
obj.age2 = 21;

console.log(obj);

//Mapコンストラクター

const map = new Map([
    ["name", "maru"],
    ["age", 35]
]);

console.log(map.get("age"))

//Setコンストラクター

const set = new Set([1,2,3,4,2]);
console.log(set);

//Dateコンストラクター

const now = new Date();
console.log(now);

//URLコンストラクター

const url = new URL("https://example.com?lang=ja");
console.log(url.searchParams.get("lang"));