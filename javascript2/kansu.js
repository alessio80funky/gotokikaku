//関数

/**
  function 関数名(パラメーター　or 引数){
    処理したいものを入れます。
  }

  関数名(); ＝＞宣言関数
 */

//ベース（宣言式）

function kansu(){
    console.log("データ");
  };

kansu();

//関数式の関数

let hello = function(){
    console.log("データ2");
  }

hello();

//アロー式の関数

let hello2 = () => {
    console.log("データ3");
 }

hello2();


//引数使うケース(パラメーター)

let namae = "taro";

function aisatsu(namae){
   console.log(`こんにちは${namae}さん`)
};

aisatsu(namae);