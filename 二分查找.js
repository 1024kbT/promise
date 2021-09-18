/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-08-30 19:52:59
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-17 16:41:56
 */
let arr = [20, 19, 22, 31, 18, 2323, 123, 141, 424]

function towSearch (target) {
  arr.sort(function function_name (a, b) { return a - b })
  // console.log("", arr)
  let _start = 0;
  let _end = arr.length - 1;
  while (_start <= _end) {
    let mid = Math.floor((_start + _end) / 2)

    let _element = arr[mid]
    if (_element == target) return mid
    if (target < _element) {
      _end = mid - 1
    } else if (target > _element) {
      _start = mid + 1
    }
  } return -1

}
towSearch(31)

