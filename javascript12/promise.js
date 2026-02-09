//.then() チェーン

//古い書き方（2015年まで）ネストが深まりやすい。
//とはる処理が終わりましたら次の処理を「繋げる」

fetch("data.json")//こちらはPromise（未来の結果）を返すので、
    .then(res => res.json)//こちらから次にやることを順番に書きます。
    .then(data => console.log(data))
    .catch(err => console.log(err))//エラーが発生した場合は発動する。

//async/await

//非同期処理を「同期的にかける」
//コードが読みやすくなってきて、tryとcatchでエラーハンドリングもしやすくなってきた

async function load(){
    try{
        const res = await fetch("リンク")//awaitで”Promiseの完了をまつ
        const data = await res.json();
        console.log(data);
    }catch(err){
        log("error")
    }
}