'use strict';
// 例題）2の倍数、かつ、3の倍数のときに、
// メッセージを表示する

let num = 12;
if(num % 2 === 0) {
  if (num % 3 === 0){
    console.log(`${num}は２の倍数かつ３の倍数です`);
  }
}

if(num % 2 === 0 && num % 3 === 0){
  console.log(`${num}は２の倍数かつ３の倍数です`);
}