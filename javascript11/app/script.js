
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


}

 
//履歴のリストの生成と更新のロジック

