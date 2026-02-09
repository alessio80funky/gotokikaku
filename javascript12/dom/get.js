//DOM操作 get系

/**
 * 1. getElementById()
 * id属性で1つの要素を取得する
 */

const title = document.getElementById("title");
title.textContent = "こんにちは";
title.style.color = "red";

/**
 * 2. getElementsByClassName()
 * クラス名で複数の要素を取得する
 */

const texts = document.getElementsByClassName("text");
for (let el of texts) {
  el.style.color = "blue"; // すべての要素の文字を青にする
}

/**
 * 3. getElementsByTagName()
 * タグ名で複数の要素を取得する
 */

const para = document.getElementsByTagName("p");
para[0].style.fontWeight = "bold"; // 最初の段落を太字にする

/**
 * 4. querySelector()
 * CSSセレクタで最初の一致要素を取得する
 */

const firstBox = document.querySelector(".box");
firstBox.textContent = "最初のボックス";
firstBox.style.background = "pink"


/**
 * 5. querySelectorAll()
 * CSSセレクタで一致するすべての要素を取得する
 */

const items = document.querySelectorAll(".item");
items.forEach((el, index) => {
  el.textContent += ` 🍎(${index + 1})`;
  el.style.color = "green";
});