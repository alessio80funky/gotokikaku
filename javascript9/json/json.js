//JSONのメソッド

//JSON.parse（受信用）


const jsonData = `{
    "name": "Maru",
    "age": 35
  }`;

  const obj = JSON.parse(jsonData);
  console.log(obj.name);
  console.log(typeof obj);

//JSON.stringify (送信用)

const data = { name: "Maru" , age: 35};
const send = JSON.stringify(data, null , 2)
console.log(typeof send);
