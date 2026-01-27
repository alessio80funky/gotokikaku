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

let score = 91;

if(score >= 90){
    console.log('A');
}else if (score >= 70){
    console.log('B');
}else if (score >= 60){
    console.log('C');
}else{
    console.log('D');
};

//if ネスト

let age = 17;　
let isMember = false;

if(age >= 18){
    if (isMember){ 
        console.log("会員です")
    }else{
        console.log("会員じゃないです")
    }
}else{
    console.log("未成年です。会員登録できません。")
}

//注意

//波括弧を省略しない！

//NG

if(x > 0)
console.log('ok')

//OK

if (x > 0){
    console.log('ok')
}

//条件式に代入演算子「＝」を使わない！

//NG

if (x = 5){
    console.log('ok')
}//これを書くとバグが発生する

//OK

if (x === 5){
    console.log('ok')
}//正しい演算子


//論理演算子を使うケース


let age2 = 18;
let isMember2 = false;

if(age2 >= 18 || isMember2 === true){
    console.log("会員です。")
}else {
    console.log("会員じゃないです")
}
