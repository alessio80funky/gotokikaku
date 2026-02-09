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

  /**
 * 2. removeEventListener("click", 関数)
 * 登録したイベントを削除する。
 * ※ 無名関数では削除できない（参照が必要だから）
 */

const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", () => {
    btn.removeEventListener("click", sayHello); // イベント削除
    document.getElementById("log").textContent = "🧹 イベント削除完了";
  });
