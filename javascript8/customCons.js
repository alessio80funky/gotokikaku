//自分で作るコンストラクター❶
function Human(name, age){
    this.name = name;
    this.age = age;

    this.aisatsu = function(){
        console.log(`こんにちは、私は${this.name}です！`)
}}

const taro = new Human("太郎",30);
const hanako = new Human("花子",25);

console.log(taro.name);
taro.aisatsu();

//////////////////////////////////////////

const taro2 = {
    name:"太郎",
    age:30
}

const hanako2 = {
    name:"花子",
    age:25
}   


console.log(taro2.name);