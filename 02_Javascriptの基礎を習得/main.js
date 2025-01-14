'use strict';
// イベントハンドラ
function keyUp(e) {
  console.log(inputText.value.length)
}

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false);