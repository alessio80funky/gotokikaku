//配列メソッド

const array = ["apple", "banana"];

array.push("cherry");
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift("watermelon");
console.log(array);
           //0 1 2 3 4 5 6 7 8
const arr = [1,2,3,4,5,6,7,8,9];

console.log(arr.slice(1,6));

arr.splice(0,3,"X","y","C","z");
console.log(arr);


const arr2 = ["a", "b", "c"];

console.log(arr2.join("/"));

console.log(arr2.includes("a"));

console.log(arr2.indexOf("a"));

const arr3 = [1000, 2000, 3000];

const tax = arr3.map(a => Number((a * 1.1).toFixed(0)));

console.log(tax);

const ar = [1000, 2000, 3000];

const TAX = [];

ar.forEach(a => {
   const tax2 = Number((a * 1.1).toFixed(0));
   TAX.push(tax2);
})

console.log(TAX);

const arr4 = [0,1,2,3,4,5,6,7,8,9];

const number = arr4.filter(b => b % 3 === 0);

console.log(number);

