'use strict';
// イベントハンドラ
function handleChange(){
  // 「全てにチェックボックス」の要素を取得
  const checkAll = document.getElementById('checkAll');
  // name属性がlanguageのチェックボックス要素を取得
  const checkBoxes = document.getElementsByName('language');
  // name属性がjanguageのチェックボックス要素をループ処理
  for( let i = 0; i < checkBoxes.length; i++ ){
    // 各チェックボックスのチェック状態を、「全てチェック」の状態に合わせる
    checkBoxes[i].checked = checkAll.checked;
  }
}

// checkAllボックスのchangeイベントのイベントハンドラを登録
const ca = document.getElementById('checkAll');
ca.addEventListener('click', handleChange, false);