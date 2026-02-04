
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
    form.addEventListener("submit")
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

