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
console.log(lang5.slice(0, 2));

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

//mathメソッド





