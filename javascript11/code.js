//objectメソッド
//objectコンストラクターと組み合わせて使うことが多い

//.keys(オブジェク名)

//オブジェクトのプロパティーを全部取り出して配列にする

const user ={
    name: "maru",
    age:35,
    city: "osaka"
}

console.log(Object.keys(user));

//.values(オブジェクト名)

//オブジェクトの値だけ配列で取り出す

console.log(Object.values(user));

//.entries(オブジェクト名)

//キープロパティーと値をペアにして配列として取り出す

console.log(Object.entries(user));


//.fromEntries(オブジェクト名)

//タプル配列をオブジェクト型に変える

const pairs =
[ 
    [ 'name', 'maru' ], 
    [ 'age', 35 ], 
    [ 'city', 'osaka' ] 
]
console.log(Object.fromEntries(pairs));


//Object.assign({}, obj)

//複数のオブジェクトを合体する

const obj1 = {
    a:1,
    b:2
}

const obj2 = {
    c:3,
    d:4
}

const fusion = Object.assign({}, obj1, obj2);

console.log(fusion)


//Object.hasOwn(obj, key) *使うケース少ない

//オブジェクト自身が持っているキープロパティーを確認する

const user2 = {
    name:"maru",
    age:35,
}

console.log(Object.hasOwn(user2,"name"));
console.log(Object.hasOwn(user2,"city"));

//Dateメソッド

const now = new Date();
console.log(now);

//表示系

console.log(now.toLocaleString("ja-JP"))

console.log(now.toLocaleDateString("ja-JP",
{weekday:"long", month:"long",day:"numeric"}
))

console.log(now.toLocaleDateString("he-IL",
{weekday:"long", month:"long",day:"numeric"}
))

console.log(now.toLocaleTimeString("ja-JP"))

//使うケース少ないパターン

console.log(now.toDateString())//英語（既定言語）

console.log(now.toTimeString())//11:05:57 GMT+0900 (Japan Standard Time)

//設定・取得系

//取得系

const gotokikaku = new Date();

console.log(gotokikaku.getMonth());//0月　→ 1月
console.log(gotokikaku.getDay());//0 日曜日　、1 月曜日...など
console.log(gotokikaku.getDate())
console.log(gotokikaku.getFullYear())
console.log(gotokikaku.getUTCDate())//getDateと同じ
console.log(gotokikaku.getUTCFullYear())//getFullYearと同じ

//設定系 (使う場面少ない)

const today = new Date();

today.setFullYear(2027, 0, 1)//指定型
today.setMonth(2)
today.setDate(25)
today.setHours(today.getHours() + 9 ,23)//.setHours(時, 分, 秒, ミリ秒);

console.log(today);