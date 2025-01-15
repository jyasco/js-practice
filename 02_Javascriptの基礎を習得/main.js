'use strict';
// イベントハンドラ
function keyUp(e) {
  // 入力された値を取得
  let str = inputText.value;
  str = str.replace(/\r?\n/g, ''); // 第一引数を第二引数に置換する
  // 残りの文字数
  let num = 10 - str.length;
  console.log(num);
  // 文字数表示部分の要素を取得
  const characterCount = document.getElementById('characterCount');
  // 残りの文字数をセットして表示
  characterCount.textContent = num;
  // 残り文字数表示部分のp要素を取得
  const characterCountWrap = document.getElementById('characterCountWrap');
  // 文字色の設定
  if(num >= 0){
    characterCountWrap.style.color = 'black';
  } else {
    characterCountWrap.style.color = 'red';
  }
}

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false);