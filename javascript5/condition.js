//条件演算子 [?]
//条件は二つまで

let age = 21;

let result = (age >= 18) ? "大人" : "未成年";

console.log(result);


//複数条件(読みづらいからあまり使われない)

let score = 30;

let rank =
(score >= 90) ? "A" : 
(score >= 70) ? "B" : 
(score >= 50) ? "C" : "D";

console.log(rank);