
const STORAGE_KEY = "kakeibo_transactions";

let transactions = [];

const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const balanceTotal = document.getElementById("balance");

const form = document.getElementById("transactionForm");
const descriptionInput =document.getElementById("description");
const amountInput =document.getElementById("amount");
const typeSelect =document.getElementById("type");


const transactionList = document.getElementById("transactionList");


//初期化ロジック

 init();

 function init(){

    loadTransactions();

    updateSummary()
    updateTransList();

    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        
        const description = String(descriptionInput.value);
        const amount = Number(amountInput.value);
        const type = typeSelect.value;

        if(!description || !amount || amount <= 0){
            alert("正しい内容と金額を入れて下さい。")
            return
        }

        const tr = {
            id: Date.now(),
            description,
            amount,
            type,
            date: new Date().toLocaleDateString("ja-JP")
        }

        transactions.unshift(tr);
        saveTransactions();
        form.reset();
        updateSummary();
        updateTransList();

    })
 }

//保存のロジック

function saveTransactions(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

  //ローカルストレージからの読み込みロジック

  function loadTransactions(){
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored){
        transactions = JSON.parse(stored)
    }
  }

//合計セクションの更新のロジック（個別の）

function updateSummary(){
    const income = transactions
    .filter(tr => tr.type === "income")
    .reduce((sum, tr) => sum + tr.amount, 0)//合計income足していくロジック
    const expense = transactions
    .filter(tr => tr.type === "expense")
    .reduce((sum, tr) => sum + tr.amount, 0)//合計expense足していくロジック

    const total = income - expense;

    totalExpense.textContent = `¥${expense.toLocaleString()}`
    totalIncome.textContent = `¥${income.toLocaleString()}`
    balanceTotal.textContent = `¥${total.toLocaleString()}`

}

 
//履歴のリストの生成と更新のロジック


function updateTransList(){
    transactionList.innerHTML = "";

    if(transactions.length === 0){
        transactionList.innerHTML ='<li style="text-align: center; color: #999; padding: 20px;">取引履歴がありません</li>'
        return;
    };

    transactions.forEach(log => {
        const li = document.createElement('li');
        li.className = `transaction-item ${log.type}`;

        const sign = log.type === 'income' ? '+' : '-';

        li.innerHTML = `
        <div class="transaction-info">
                <div class="transaction-description">${log.description}</div>
                <small style="color: #999;">${log.date}</small>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span class="transaction-amount ${log.type}">
                    ${sign}¥${log.amount.toLocaleString()}
                </span>
                <button class="btn-delete" onclick="deleteTransaction(${log.id})">削除</button>
            </div>
        `

        transactionList.appendChild(li);

    })
}


 //取引を削除するロジック

 function deleteTransaction(id){
    transactions = transactions.filter(tr => tr.id !== id);
    saveTransactions();
    updateTransList();
    updateSummary();
 }

 let hourChartProp;//名前変更・追加

    function hourChart(){//名前変更
        const ctx = document.getElementById("Chart1").getContext("2d");

        if(hourChartProp) hourChartProp.destroy();//名前変更

        hourChartProp = new Chart(ctx, {//名前変更
            type:"bar",
            data: {
                labels: records.map(r => r.date),
                datasets:[{
                    label: "時間",
                    data: records.map(r => r.h),
                    borderWidth:1
                }],
            },
            options: {
                responsive: true,
                scales: {
                    y:{
                        beginAtZero: true
                    }
                }
            }
        })
    }

    hourChart();//追加