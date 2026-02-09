//Mapコンストラクター関連メソッド

//Map「キーと値のペア」です。（.mapメソッドというメソッドも同じ動きする）

/**
 * .set(key, value) -> 追加または上書き
 * .get(key) -> 取得
 * .has(key) -> そのキーがあるか確認
 * .delete(key) -> 全部削除
 * .clear() -> 削除
 */

//Mapコンストラクターの特徴はオブジェクトと似ていますが、データの順番を保持できるし、そしてどんなデータ型でもキーにできる。


const score = new Map();

score.set("aki", 80);//Map(1) { 'aki' => 80 }
score.set("hinako", 95);
//score.delete("aki")

score.clear();//Map(0) {}
console.log(score);

console.log(score.get("aki"))
console.log(score.has("akira"))


const user1 = {
    id:1,
    name:"maru"
}

const user2 = {
    id:2,
    name:"mario"
}

const scores = new Map();

scores.set(user1, 90);
scores.set(user2, 75)

console.log(scores)
console.log(scores.get(user1));

//Setコンストラクター関連メソッド

//Setとは？
//「重複を防ぐ動きする」

/**
 * .add(value) -> 追加
 * .has(value) -> あるか確認
 * .delete() -> 全部削除
 * .clear() -> 削除
 */

//データをオブジェクト（配列のような塊）に構築する

const id = new Set();

id.add(10).add(20).add(30).add(40);//Set(4) { 10, 20, 30, 40 }
console.log(id.has(50))//false
console.log(id)


//データを一個ずつ取り出したい場合
id.forEach(value => {
    console.log(value)
})
//通常の配列に変換したい場合

const idArr = [...id];
console.log(idArr);