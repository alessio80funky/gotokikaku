//セクション❶

const items = ["りんご","バナナ","苺","メロン"];

const showBtn = document.getElementById("showItems");
const clearBtn = document.getElementById("clearItems");
const itemList = document.getElementById("itemList");

showBtn.addEventListener("click", () =>{
    itemList.innerHTML = "";
    items.forEach((item, index)=> {
        const list = document.createElement("li");
        list.textContent = `${index + 1}. ${item}`;
        itemList.appendChild(list);
    })
})

clearBtn.addEventListener("click", ()=> {
    itemList.innerHTML = "";
})


//セクション❶

const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

calcBtn.addEventListener("click", () =>{
    const input = document.getElementById("num").value;
    const numbers = input.split(",").map(num => Number(num));

    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    })

    result.textContent = `合計：${sum}\n\n平均：${(sum / numbers.length).toFixed(2)}`

})






