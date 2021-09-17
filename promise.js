/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-14 12:56:13
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-14 14:57:49
 */

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 3000)
})

// 1
//输出2。Promise.resolve 就是一个 Promise 对象就相当于返回了一个新的 Promise 对象。
//然后在下一个事件循环里才会去执行 then
promise.then(() => {
  return Promise.resolve(2);
}).then((n) => {
  console.log('1:', n)
});

// 2 
//输出2。和上一点不一样的是，它不用等下一个事件循环。
promise.then(() => {
  return 2
}).then((n) => {
  console.log('2:', n)
});

// 3
//输出1。then 和 catch 期望接收函数做参数，
//如果非函数就会发生 Promise 穿透现象，打印的是上一个 Promise 的返回。
promise.then(2).then((n) => {
  console.log('3:', n)
});







//时间循环机制
let a;
const b = new Promise((resolve, reject) => {
  console.log('promise1');
  resolve();
}).then(() => {
  console.log('promise2');
}).then(() => {
  console.log('promise3');
}).then(() => {
  console.log('promise4');
});

a = new Promise(async (resolve, reject) => {
  console.log(a);
  await b;
  console.log(a);
  console.log('after1');
  await a
  resolve(true);

  console.log('after2');
});

console.log('end');

// promise的状态只会由第一次决定

const promise = new Promise((resolve, reject) => {
  resolve('success1');
  reject('error');
  resolve('success2');
});

promise
  .then((res) => {
    console.log('then: ', res);
  })
  .catch((err) => {
    console.log('catch: ', err);
  });

Promise.resolve()
  .then(() => {
    return new Error('error!!!')
  })
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
