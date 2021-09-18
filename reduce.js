/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-08-30 21:56:14
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-18 10:11:38
 */
// 对reduce的理解：
// reduce(callback,initiaValue)会传入两个变量，回调函数(callback)和初始值(initiaValue)。
// 假设函数有4个传入参数，prev和next，index和array。 Prev和next是你必须要了解的。
// 当没有传入初始值时，prev是从数组中第一个元素开始的，next数组是第二个元素。
// 但是当传入初始值（initiaValue）后,第一个prev将是initivalValue，next将是数组中的第一个元素。
// 比如：
var arr = ["apple", "orange"];
function noPassValue () {
  return arr.reduce(function (prev, next) {
    console.log("prev:", prev);
    console.log("next:", next);
    return prev;
  });
}

function passValue () {
  return arr.reduce(function (prev, next) {
    console.log("prev:", prev);
    console.log("next:", next);
    prev[next] = 1;
    return prev;
  }, {});
}
console.log("No Additional parameter:", noPassValue());
console.log("----------------");
console.log("With {} as an additional parameter:", passValue());

let arr1 = [{
  name: 'ada',
  cop: 'test'
}, {
  name: 'tst',
  cop: '123'
},]
//修改数字变为属性名和属性值模式
let a = arr1.reduce((pre, next) => {

  pre[next.name] = next.cop

  return pre

}, {})
console.log(a);
//计算元素出现次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let b = names.reduce((pre, next) => {
  if (next in pre) {
    pre[next]++
  } else {
    pre[next] = 1
  }
  return pre
}, {})
console.log(b);