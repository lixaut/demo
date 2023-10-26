// let obj = {
//   a: 7,
//   get b() {
//     return this.a * 2;
//   },
//   set c(x) {
//     this.a = x + 5
//   },
// };

// console.log(obj.b);
// console.log(obj.a);
// obj.c = 5;
// console.log(obj.a)

// let d = Date.prototype;
// Object.defineProperties(d, 'year', {
//   get: function () {
//     return this.getFullYear();
//   },
//   set: function (y) {
//     this.setFullYear(y);
//   },
// });

// let now = new Date();
// console.log(now.year);
// now.year = 2001;
// console.log(now);

// let o = { a: 0 };
// Object.defineProperties(o, {
//   ac: {
//     get: function () {
//       return this.a + 1;
//     },
//   },
//   b: {
//     set: function (x) {
//       this.a = x * 2;
//     },
//   },
// });

// o.b = 10;
// console.log(o.ac)

// let a = 0;
// var b = 0;
// delete a;
// delete b;
// console.log(a, b)

// class MyClass {
//   constructor() {}
//   myField = 'foo';
//   myMethod() {}
//   static myStaticField = 'bar';
//   static {}
//   #myPrivateField = 'bar_1';
// }

// class Color {
//   #values;
//   constructor(r, g, b) {
//     this.#values = [r, g, b];
//   }
//   getRed() {
//     return this.#values[0];
//   }
//   setRed(value) {
//     if (value < 0 || value > 255) {
//       throw new RangeError('Invalid R Value');
//     }
//     this.#values[0] = value;
//   }
// }

// const red = new Color(255, 0, 0);
// console.log(red.getRed());

// class Color {
//   #values;
//   constructor(r, g, b) {
//     this.#values = [r, g, b];
//   }
//   redDifference(anotherColor) {
//     return this.#values[0] - anotherColor.#values[0];
//   }
// }

// const red = new Color(255, 0, 0);
// const crimson = new Color(220, 0, 0);
// let a = red.redDifference(crimson);
// console.log(a)

// class Color {
//     #values;
//     constructor(r, g, b) {
//         this.#values = [r, g, b];
//     }
//     redDifference(anotherColor) {
//         if (!(#values in anotherColor)) {
//             throw new TypeError('Color instance expected');
//         }
//         return this.#values[0] - anotherColor.#values[0];
//     }
// }
// class Color1 {
//     #values;
//     constructor(r, g, b) {
//         this.#values = [r, g, b];
//     }
//     redDifference(anotherColor) {
//         if (!(#values in anotherColor)) {
//             throw new TypeError('Color instance expected');
//         }
//         return this.#values[0] - anotherColor.#values[0];
//     }
// }

// try {
//     const a = new Color(255, 0, 0);
//     const b = new Color1(250, 0, 0);
//     console.log(a.redDifference(b));
// } catch (error) {
//     console.log(error);
// }

// class GenFunc {
//   constructor(fun, time) {
//     this.func = fun;
//     this.time = time;
//   }
//   run() {
//     // setTimeout(this.func, this.time);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(this.func);
//       }, this.time);
//     });
//   }
// }

// const funs = [
//   new GenFunc(() => console.log('2秒'), 2000).run(),
//   new GenFunc(() => console.log('1秒'), 1000).run(),
//   new GenFunc(() => console.log('3秒'), 3000).run(),
// ];

// Promise.race(funs).then(func => {
//   func();
// });

/**
 * 等待执行函数
 * 顺序等待执行
 * fun.wait(2).wait(5) fun等待2s执行，再等待3s执行
 */
// class WaitFuns {
//   #time = 0;
//   #i = 1;
//   constructor(fun) {
//     this.fun = fun;
//     setInterval(() => this.#i === this.#time ? null : console.log(this.#i++), 1000);
//   }
//   wait(delay) {
//     this.#time += delay;
//     setTimeout(() => this.fun(`已等待${delay}秒`), this.#time * 1000);
//     return this;
//   }
// }
// let waitFun = new WaitFuns(msg => console.log(msg));
// waitFun.wait(4).wait(5).wait(4);

// console.log('%c⚠️%cwarning%c⚠️', 'font-size: 20px;','color: #00ffff;font-size: 24px;', 'font-size: 20px;')

/**
 * 模拟下载函数
 *
 * @param {number} scopeTime 网速延迟时间
 * @param {number} scopeNum 网速速率间隔
 *
 */
// class Percent {
//   #randomTime = 0;
//   constructor() {
//     this.i = 0;
//   }
//   run(scopeTime, scopeNum) {
//     this.#randomTime += Math.round(Math.random() * scopeTime);
//     this.i += Math.round(Math.random() * scopeNum + 1);
//     let temp = this.i > 100 ? 100 : this.i;
//     this.setTime(temp, this.#randomTime);
//   }
//   setTime(percent, delay) {
//     return setTimeout(function () {
//       console.clear();
//       console.log(percent + '%');
//     }, delay);
//   }
// }
// let p = new Percent();
// while (p.i < 100) {
//   p.run(1000, 3);
// }

/**
 * 迭代器
 *
 */
// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start;
//   let iterationCount = 0;
//   const rangeIterator = {
//     next: function () {
//       let result;
//       if (nextIndex < end) {
//         result = {
//           value: nextIndex,
//           done: false,
//         };
//         nextIndex += step;
//         iterationCount++;
//         return result;
//       }
//       return { value: iterationCount, doen: true };
//     },
//   };
//   return rangeIterator;
// }

/**
 * 工厂方法模式
 *
 */
// 定义一个抽象类
class Animal {
  speak() {
    throw new Error('this method must be implemented');
  }
}
// 实现具体的类
class Dog extends Animal {
  speak() {
    return 'woof';
  }
}
class Cat extends Animal {
  speak() {
    return 'meow';
  }
}
// 实现工厂方法
class AnimalFactory {
  createAnimal(animalType) {
    switch (animalType) {
      case 'dog':
        return new Dog();
      case 'cat':
        return new Cat();
      default:
        throw new Error(`Invalid animal type: ${animalType}`);
    }
  }
}
// 使用工厂方法创建对象
// const animalFactory = new AnimalFactory();
// const dog = animalFactory.createAnimal('dog');
// console.log(dog.speak());
// const cat = animalFactory.createAnimal('cat');
// console.log(cat.speak());

/**
 * 生成器函数
 * 
 * @param {*} start 
 * @param {*} end 
 * @param {*} step 
 * 
 */
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}
// let a = makeRangeIterator(1, 10, 2);
// let value = a.next();
// console.log(value);
// let value2 = a.next();
// console.log(value2)

/**
 * 代理
 */
let handler = {
  get: function (target, name) {
    return name in target ? target[name] : 42;
  },
};
// let p = new Proxy({}, handler);
// p.a = 1;
// console.log(p.a, p.b)

/**
 * Proxy
 * 
 * 通过代理验证向一个对象传值
 * 
 */
let validator = {
  set: function (obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('the age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('the age seems invalid');
      }
    }
    obj[prop] = value;
    return true;
  },
};
// let person = new Proxy({}, validator);
// person.age = 100;
// console.log(person.age);
// person.age = 'a';
// person.age = 201;

function extend(sup, base) {
  let descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,
    'constructor'
  );
  base.prototype = Object.create(sup.prototype);
  let handler = {
    construct: function (target, args) {
      let obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function () {
      sup.apply(that, args);
      base.apply(that, args);
    },
  };
  let proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, 'construct', descriptor);
  return proxy;
}