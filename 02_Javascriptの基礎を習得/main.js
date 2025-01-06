'use strict';
// 宣言、初期化
let colors = ['Red','Green','Blue'];

console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);

// データ型異なってもエラーは出ない
let arr = [1, '2', 3, ['a', 'b', 'c']];
console.log(arr);

// 個数
console.log(colors.length);

// 末尾の値
console.log(colors[colors.length - 1]);

// 空の配列
let emptyArr = [];
console.log(emptyArr);