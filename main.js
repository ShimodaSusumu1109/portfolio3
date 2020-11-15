"use strict"

// HTMLとリンク
const btn = document.getElementById('btn');
const result = document.getElementById('result');


btn.addEventListener('click', () => {
  // ランダム
  const num = Math.random();

  // 条件分岐
  if (num < 0.2) {
    result.textContent = "Lucky";
  } else if (num < 0.5) {
    result.textContent = "So so";
  } else if (num < 0.8) {
    result.textContent = "Be careful";
  } else {
    result.textContent = "Too bad";
  }
});
