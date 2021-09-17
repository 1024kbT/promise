/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-17 13:22:12
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-17 13:22:13
 */

var urls = [
  'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg',
  'https://www.kkkk1000.com/images/getImgData/gray.gif',
  'https://www.kkkk1000.com/images/getImgData/Particle.gif',
  'https://www.kkkk1000.com/images/getImgData/arithmetic.png',
  'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif',
  'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg',
  'https://www.kkkk1000.com/images/getImgData/arithmetic.gif',
  'https://www.kkkk1000.com/images/wxQrCode2.png',
];

function loadImg (url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      console.log('一张图片加载完成', url);
      resolve();
    };
    img.onerror = reject;
    img.src = url;
  });
}