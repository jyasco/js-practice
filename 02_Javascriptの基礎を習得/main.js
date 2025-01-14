'use strict';
const counter = document.getElementById('counter');
const countUpButton = document.getElementById('countUpButton');
const resetButton = document.getElementById('resetButton');

let num = 0;
countUpButton.addEventListener('click', function(){
  num = num + 1;
  counter.textContent = num;
}, false);

resetButton.addEventListener('click', function(){
  counter.textContent = 0;
}, false);