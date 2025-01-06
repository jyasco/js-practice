'use strict';

// 例題1) while文を使って
// コンソールに1~3の数字を表示

let i = 1;
while(i <= 3){
  console.log(i);
  i++;
}


// 例題2) whileループの途中でwhile文を抜ける
// (jが5になったらwhile文を抜ける)

// let j = 1;
// while ( j <= 10 ){
//   console.log(j);
//   if(j === 5){
//     break;
//   }
//   j++;
// }

let j = 1;
while ( j <= 10 ){
  console.log(j);
  j++;
  if(j === 5){
    break;
  }
}