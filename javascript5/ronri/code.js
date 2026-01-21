//論理演算子：&&(and・かつ), || (or・または), ! (not) (否定演算子)

//&&(and・かつ)
console.log(true && true);//true 両方trueなら ー＞true
console.log(5 > 3 && 10 > 7);//true
console.log(5 < 3 && 10 > 7);//false　片方はfalseなので、falseになります
//|| (or・または)
console.log(true || false);//true　どちらかtrueなら ー＞true
console.log(5 > 3 || 10 < 7);//true
console.log(5 < 3 || 10 < 7);//false　両方falseなので、falseになります
//! (not) (否定演算子)
console.log(!true);//false
console.log(!false);//true

let age = 17;
let isStudent = false;

if(age >= 18 || isStudent){
    console.log("割引ok。")
}else if(age >= 18 && !isStudent){
 console.log("社会人です。")
}else {
    console.log("適応外。")
}