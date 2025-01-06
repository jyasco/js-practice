'use strict';

// 例題) 配列から一つずつ
// 要素を取り出してコンソールに出力

let colors = ['Red', 'Green', 'Blue'];

// for文を使用する場合
for( let i = 0; i < colors.length; i++ ){
  console.log(colors[i]);
}

// forEachを使用する場合
colors.forEach(function(color){
  console.log(color)
});