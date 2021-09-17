/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-03 13:39:21
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-03 15:49:10
 */
let arr = [1, 2, 1, 3, 2, 1]
console.log(new Set(arr))
let setList =
  [...new Set(arr)].filter(item => console.log(item))

let school = {
  name: 'xxx',
  cities: ['上哈', '背景', '对象']


}
//获取对象里的属性的描述对象
console.log(Object.getOwnPropertyDescriptors(school))
//创建对象是指属性的描述对象
const obj = Object.create(null, {
  name: {
    //设置值
    value: 'xxx',
    //可写
    writable: true,
    //可删除
    configurable: true,
    //可枚举
    enumerable: true,
  }
})
//把对象变成二维数组
const arrs = Object.entries({
  name: 'xxxx',
  agetag: '2132'
})
console.log(arrs);
//二维数组转成对象
const arrt = Object.fromEntries([['name', 'xxxx'],
['agetag', '2132']]

)
console.log(arrt);

//flatMap 二维转一维
const flarr = [1, 2, 3, 4, 5]
const result = flarr.flatMap(item => [item * 10])
console.log(result);