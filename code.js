/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-08-28 16:09:02
 * @LastEditors: Seven
 * @LastEditTime: 2021-08-28 16:27:29
 */
//添加功能但是 不需要修改老代码
//验证队列 职责链
function inputTest () {
  this.testList = []
}

inputTest.prototype.addTest = function (fn) {
  this.testList.push(fn)
}
inputTest.prototype.test = function (value) {
  // this.testList.push(fn)
  let self = this
  //能不能保证同步和异步验证
  async function runList (value) {
    let _restultList = []
    for (let i = 0; i < self.testList.length; i++) {
      console.log('1231', self.testList[i]);
      let _result = await self.testList[i](value)
      _restultList.push(_result)

    }
    return _restultList
  }
  //await 是一个promise对象
  runList(value).then(res => {
    console.log(res);
  })
}

let Test = new inputTest()

Test.addTest(() => {
  // return {
  //   pass: false,
  //   reslut: '电话号码不存在'
  // }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        pass: 'false',
        result: '号码不存在'
      })
    }, 1000);
  })
})
Test.test(123)
