//if命令文     

/*

//単独IF

if(条件){
    実行したいデータを入れます。（実行される結果は条件に合うもののみ、例外の出力は何も実行されない）
}
 
//例外を出力したい場合

if(条件){
    最初の条件に合っていればこちらを出力します。true
}else{
    例外の時に出力する。false
}
 */

let x =  9;

if(x >= 10){
    console.log("変数は10以上です。")
}else{
    console.log("10以下です。")
}

//else if 
//複数の条件を取り扱う時に使用する命令です。

let score = 50;

if(score >= 90){
    console.log('A');
} else if (score >= 70){
    console.log('B');
}else if (score >= 60){
    console.log('C');
}else{
    console.log('D');
};