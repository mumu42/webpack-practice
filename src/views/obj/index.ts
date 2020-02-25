import { stringify } from "querystring";

let name1: string | number; // name1可为string类型或number类型
name1 = 'ss'

// 函数
function func(param: string, ...result: number[]):void {
  console.log(param)
  console.log(result)
}

func('没有剩余参数')
func('有剩余参数', 1, 2, 5, 6)

function func1(param: {name: string, age: number}):void {
  console.log(param)
}
func1({name: 'hgz', age: 18})

// 函数重载
// 在java中的指的是同名函数，传参不同
function overload(name: string):string // 没有函数体
function overload(name: string, age: number):number // 没有函数体
function overload(name: string, age?: number):any {
  console.log(name, age, '函数重载')
}

overload('string')
overload('string', 90)

// 继承
function Person() {
  this.name = 'hgz'
  this.age = 19
  this.handle1 = function () {
    console.log('handle1')
  }
}

Person.prototype.handle2 = function () {
  console.log('handle2')
}

function Child() {
  // this.kk = 'kk'
  Person.call(this)
  /**
   * 对象冒充继承Person,可以继承Person里的对象和方法，
   * 但不能继承Person原型链上的方法和属性
   */
}
// Child.prototype = new Person()  // 原型链实现继承，可以继承所有。但是有一个缺点（无法给父类传参）

// 抽象：关键字—— abstract
/**
 * 只能定义类和方法，不能具体实现且不能实例化
 */
// abstract class Animal {
//   // 可包含非抽象的方法和属性
//   constructor(parameters) {
//   }
//   abstract eat():void;
//   abstract sleep():void;
// }

// class Dog extends Animal {
//   // 抽象类的子类必须实现父类中的所有抽象方法
//   eat() {
//     console.log('eat')
//   }
//   sleep() {

//   }
// }

// 类的修饰符
/**
 * public,protected,private
 * 
 * public       当前类，当前类的子类，类外均可访问
 * protected    仅当前类及其子类可以访问
 * private      仅当前类可访问
 * 
 */

//  静态属性和方法：关键字—— static
/**
 * 类中的静态方法不可调用非静态属性
 */

// 多态
/**
 * 父类定义一个方法不实现，让子类实现，每一个子类有不同的表现
 */

// 接口的扩展：接口继承接口
interface Animal {
  eat():void
}
interface Person extends Animal {
  work():void
}

class Day implements Person {
  constructor() {

  }
  eat() {

  }
  work() {

  }
}

class Week extends Day implements Person {
  // 继承Day类，并实现Person接口
}

// 泛型
/**
 * 解决类，接口，方法的复用性
 * 对不确定数据类的支持
 */

class User {
  name: string | number
  age: number | undefined
}

class My {
  add(user: User): boolean {
    if (user.age === undefined) {
      return false
    }
    return true
  }
}

let u = new User()
u.name = 'kk'
let my = new My()
console.log(my.add(u), 'my')

// for in
let arr: string[] = ['str1', 'str2', 'str3']
for (let i in arr) {        
  // i：当前成员数组下标
  console.log(i, 'i')
}

console.log('for of')
for (let item of arr) {
  // item：当前数组成员值
  console.log(item, 'item')
}

function commafy(num){
  return num && num
    .toString()
    .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
      return $2 + ',';
    });
}

console.log(commafy(12000000.11))

// Array.prototype.flat(num)用于将嵌套的数组“拉平”，变成一维数组，该方法返回新的数组，对原数组没有影响。
// num:想要拉平的层数，默认为1（如果不管有多少层嵌套都要转为一维数组，可以用Infinity关键字作为参数）
// [1, 2, [3, 4]].flat() // [1, 2, 3, 4]
