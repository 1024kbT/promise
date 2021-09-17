/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-03 16:00:48
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-03 16:03:36
 */
class Person {
  name;
  #age;
  #weight;
  constructor(name, age, weight) {
    this.#age = age
    this.name = name
    this.#weight = weight
  }
  info () {
    console.log(this.#age);
    console.log(this.name);
    console.log(this.#weight);
  }
}
let p = new Person('小红', 18, 118)
console.log(p.info());
// p.name