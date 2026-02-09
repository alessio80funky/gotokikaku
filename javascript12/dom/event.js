/**
 * 1. addEventListener("click", 関数)
 * 要素にイベントを登録する。
 * 第1引数：イベントの種類（例："click", "input", "mouseover" など）
 * 第2引数：実行する関数
 */

const btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
    alert("クリックされました！");
  });

function sayHello() {
    document.getElementById("log").textContent = "👋 イベント発火中...";
  }

  btn.addEventListener("click", sayHello);
