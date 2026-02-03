//stringメソッド

const lang = "javascript";
console.log(lang.toUpperCase());

const lang2 = "JAVASCRIPT";
console.log(lang2.toLowerCase());

const lang3 = "javascript";
console.log(lang3.indexOf("s"));

const lang4 = "javascript";
console.log(lang4.includes("a"));

const lang5 = "javascript";
console.log(lang5.slice(0, 3));

const lang6 = "javascript";
console.log(lang6.replace("java", "type"))

//number メソッド　＋　mathメソッド

//number メソッド

const num = 3.14155590000000;
console.log(num.toFixed(2));

const num2 = 3.14155590000000;
console.log( typeof num2.toString());

function Gotokikaku( data , numeric){
    this.data = data;
    this.numeric = numeric;
}

const  num3  = new Gotokikaku(14,20);
console.log(num3);
console.log(num3.valueOf());

const n = new Number(10);//一つの指定しかできない
console.log(typeof n);
console.log(n.valueOf());

const num4 = 100000;

console.log(num4.toLocaleString("ja-JP",{style:"currency", currency:"JPY"}))
console.log(num4.toLocaleString("en-US",{style:"currency", currency:"USD"}))
console.log(num4.toLocaleString("it-IT",{style:"currency", currency:"EUR"}))
console.log(num4.toLocaleString("kr-KR",{style:"currency", currency:"KRW"}))


//mathメソッド

const math = 4.6;
const math2 = 4.1
const math3 = 4.1;

console.log(Math.round(math));
console.log(Math.round(math2));

console.log(Math.ceil(math));
console.log(Math.ceil(math2));

console.log(Math.floor(math));
console.log(Math.floor(math3));







