/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-17 17:03:47
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-17 17:18:30
 */

class Scheduler {
  itemList = []; //队列存储
  maxNums = 3 //最大并发数
  workingNums = 0 //当前并发数
  add (promiseCreator) {
    this.itemList.push(promiseCreator)
  }
  start () {
    for (let i = 0; i < this.maxNums; i++) {
      this.doNext()
    }
  }
  doNext () {
    if (this.itemList.length && this.workingNums < this.maxNums) {
      this.workingNums++
      this.itemList.shift()().then(res => {
        this.workingNums--
        this.doNext()
      })

    }
  }

}

const timeout = time => new Promise(resolve => setTimeout(resolve, time))
const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, 2)
addTask(100, 1)
addTask(900, 3)
addTask(200, 4)
scheduler.start()