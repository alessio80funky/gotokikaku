//break

//ループ処理を途中で強制的に終了する命令
//for/while/do..whileで使える
//switch文でも使えます。

for(let i = 0; i < 5; i++){
    if(i === 4) break;
    console.log("i=", i);
}

let x = 0;
while(x < 10){
    console.log(x)
    x++; 
    if(x === 5) break;
}

const users = ["alessio","tatsumaru","rikimaru", "ayame"];

let found = "探したユーザー見つかりません";

for(let user of users){
    if(user === "alice"){
        found = user;
        break;
    }
}

console.log("見つかったユーザー：", found);

//continue

//ループ処理の中でその回の残りの処理をスキップして、次の周回へ進むという命令です。
//つまり一部条件の時だけ処理を飛ばす。

for(let z = 0; z < 5; z++){
    if(z % 2 === 0) continue;
    console.log("z=" , z);
}

let j  = 0;

while (j < 10){
    j++;
    if(j % 2 === 0) continue;
    console.log(j);
}