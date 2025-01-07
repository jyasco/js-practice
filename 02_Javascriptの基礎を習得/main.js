'use strict';

let btn = document.getElementById('triggerButton'); //置換したいノードを取得
btn.addEventListener('click', function(e){
  // IDによるノードの取得
  let headerTitle = document.getElementById('headerTitle');
  // テキストの置換
  headerTitle.textContent = 'タイトルが変更されました'; //取得したノードのtextContentプロパティを使用している
}, false);