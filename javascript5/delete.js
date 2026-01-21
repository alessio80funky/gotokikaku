//delete演算子

//オブジェクト型と配列型のデータ型と一緒によく使われます。

//オブジェクト関係
//オブジェクトプロパティを削除するための演算子です。

let user = {
    name: "maru",
    age: 35
}

delete user.age;

console.log(user);
console.log(user.age);//undefined

//配列関係

let array = [1,2,3]

delete array[1];

console.log(array);
console.log(array[1])//undefined

//delete演算子に関しての注意

//変数や関数は削除できない＝＞無視されます。

let x = 10;
delete x;
console.log(x);
