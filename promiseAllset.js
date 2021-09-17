/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-03 16:07:30
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-03 16:13:24
 */
//promise,allSettled //返回所有的promise结果
const p1 = new Promise((reject, resolve) => {
  setTimeout(() => {
    resolve('成功1')
  }, 1000)
})
const p2 = new Promise((reject, resolve) => {
  setTimeout(() => {
    resolve('成功2')
  }, 2000)
})
const p3 = Promise.allSettled([p1, p2])
console.log(p3);

//失败就停下
const pa = Promise.all([p1, p2])
console.log(pa);