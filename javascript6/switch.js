//switch文

/**
 
switch(引数){
    case "値１":
    「値１」の場合に発動する処理のコードを書きます。
    break;　＜ー　必ずかく！
    case "値２":
    「値２」の場合に発動する処理のコードを書きます。
    break;　＜ー　必ずかく！
    default:
        上記の条件に当てはまらない場合に出力されます。
}

 */

let rank = "silver";

switch(rank){
    case "silver" :
        console.log("3%off")
    break;
    case "gold" :
        console.log("5%off")
    break;
    case "platinum" :
        console.log("10%off")
    break;
    default:
        console.log("一般会員です：割引なし")
}

//switch命令のbreak命令の役割

//switchに対しての役割は「ケースを仕分けるそして制御する」という役割を果たしています。
//breakがない状態はフォールスルー（fall through）

/**
fall through

let rank = "silver";

switch(rank){
    case "silver":
        console.log("3%off");
   
    case "gold":
        console.log("5%off");
    
    case "platinum":
        console.log("10%off");
  
    default:
        console.log("一般会員です：割引なし")

}
 */

//if文とswitch文の使い分け

//if => 条件の範囲を取り扱う場合はよく使われます。基本的な条件分岐の命令です。
//例：(if score >= 90...)

//switch =>条件の範囲が多く、そして条件が特定の値がある場合はswitchがよく使われます。