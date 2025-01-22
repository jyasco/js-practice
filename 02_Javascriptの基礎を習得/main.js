'use strict';
const images = [
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/C0zDWAPFT9A.jpg', description: '猫の画像1'},
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/fEK4jvgnApg.jpg', description: '猫の画像2'},
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/egfS7HzgKcc.jpg', description: '猫の画像3'},
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/e-S23SJzFqs.jpg', description: '猫の画像4'},
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/Hnwm8ktAd6E.jpg', description: '猫の画像5'}
];

// メイン画像の初期値を設定
let image = document.createElement('img'); //image要素を生成
image.setAttribute('src', images[0].src); //image要素のsrc属性を設定
image.setAttribute('alt', images[0].description); //image要素のalt属性を設定

// 説明の初期値を設定
let description = document.createElement('p');
description.textContent = image.alt;

// 作成した要素を表示する
let mainImage = document.getElementById('main_image');
mainImage.insertBefore(image, null);
mainImage.insertBefore(description, null);

// サムネイル画像の表示
let thumbnails = document.getElementById('thumbnails'); //HTML側のidがthumbnailsの要素を取得
for(let i = 0; i < images.length; i++){  //thumbnailsの子要素に画像を追加していく処理
  let thumbnailImage = document.createElement('img');  //image要素を生成し変数に代入
  thumbnailImage.setAttribute('src', images[i].src);  //thumbnailImageに属性を追加（第一引数が属性名、第二引数が属性の値）
  thumbnailImage.setAttribute('alt', images[i].description);  //thumbnailImageに属性を追加
  thumbnails.insertBefore(thumbnailImage, null);
}