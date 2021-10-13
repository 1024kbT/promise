/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-10-12 17:21:30
 * @LastEditors: Seven
 * @LastEditTime: 2021-10-13 10:03:04
 */
//构造函数
function Foo () {
  getName = function () {
    console.log(1)
  }
  return this
}
//函数 Foo的一个静态方法
Foo.getName = function () {
  console.log(2)
  console.log(this);
}
//函数扩展原型上的方法
Foo.prototype.getName = function () {
  console.log(3)
}
/**
 * 全局预编译当全部挂载完成之后，然后代码在去逐行执行 Go对象 {}
 * 分析变量声明（var）——变量作为GO对象的属性名，值为undefined
 * Go {
 *    getName :undefined;
 * }
 * 分析函数声明（function）——函数名作为GO对象的属性名，值为函数体（如果遇到同名，直接覆盖）
 * Go {
 *    getName :function getName(){};
 * }
 * 当走到某一行的时候；a产生了一次赋值；此时GO对象变成了：
 * Go {
 *    getName :function getName(){}->function getName(){console.log(4)};
 * }
 */
var getName = function () {
  console.log(4)
}

//函数声明
function getName () {
  console.log(5)
}

Foo.getName() //2    this指向Foo这个实例对象 即function Foo(){....}
getName() //4
//Foo() -> this -> window ->window.getName()
Foo().getName() //1
//window.getName() ->1 ->getName() ->1
getName() //1

new Foo.getName() //没有实际意义知识new Foo的静态方法 输出还是2  this是指向新的实例对象的 Foo.getName{}
/**
 * var foo = new Foo();
 * foo.getName() -> 3 实例对象继承函数的构造方法 ->Foo.prototype.getName()
 * new Foo.prototype.getName()  没有实际意义
 */
new new Foo().getName() //3