
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