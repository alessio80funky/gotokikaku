//try...catch...finally

//tryの中でエアーが発生すると、処理が一時的に止まってcatchに渡す。
//catch内でエラーを受け取り、代理処理やエラー通知の出力を行う。
/*
try{
    let x = JSON.parse("jsonじゃないよ");
}catch(error){
    console.log("エラー：",error.message);
};
*/
//finally
//エラーの有無に関わらず必ず実行される。
//役割は　＝＞　「データベースの接続を切る」など後処理を行う命令。

try{
    console.log("処理開始");
}catch(error){
    console.log("エラー：", error.message);
}finally{
    console.log("後処理を行う");
}

//throw
//例外の処理に対してのエラーを追加したい時に使う。
//エラーの内容がカスタマイズ可能です。

y =0;

x =4;

try{
    if (y === 0){
        throw new Error("0を検知しました！")
    }
 let z = x / y;
 console.log(z);
}catch(error){
    console.log("エラー," ,error.message)
}

try{
    let num = "alice";

    if( num === "alice"){
        throw new Error("文字列使えません");
    };
   console.log(num.toFixed(0));
}catch(error){
    console.log("エラー：",error.message);
};