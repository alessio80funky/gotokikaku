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
