'use strict';

for( let i = 0; i < 3; i++ ){
  for( let j = 0; j < 3; j++ ){
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 例題) 2次元配列(配列の中に配列を入れる構造)に格納されている
// テストの点数を全て取り出して表示する

const scores = [
  [100, 99, 98],
  [90, 89, 88],
  [80, 79, 78]
];

// for文使わない場合
// console.log(scores[0][0]);
// console.log(scores[0][1]);
// console.log(scores[0][2]);
// console.log(scores[1][0]);
// console.log(scores[1][1]);
// console.log(scores[1][2]);
// console.log(scores[2][0]);
// console.log(scores[2][1]);
// console.log(scores[2][2]);

// for文使う場合
for( let i = 0; i < scores.length; i++ ){
  for( let j = 0; j < scores[i].length; j++ ){
    console.log(scores[i][j]);
  }
}