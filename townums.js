/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-29 17:25:24
 * @LastEditors: Seven
 * @LastEditTime: 2021-10-13 13:05:00
 */
let nums = [2, 7, 11, 15]

function twoSum (nums, target) {
  let map = new Map() //使用map集合
  for (let i = 0, len = nums.length; i < len; i++) {
    let a = target - nums[i]
    if (map.has(a)) {
      return [map.get(a), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []

}
console.log(twoSum(nums, 9));
