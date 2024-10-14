/** @format */

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

function Person(name) {
  console.log('this ', this);
  this.name = name;
}

const nhan = new Person('Nhan');
const thanh = new Person('Thanh');

console.log('nhan ', nhan);
console.log('thanh ', thanh);

// function Product(name, quantity) {
//   this.name = name;
//   this.quantity = quantity;
//   this.models = {};
// }

// this normal function: depends on place where is called
// arrow function: inherit enclose place

// Product.prototype.setModel = (size, colors) => {
//   console.log('this product ', this);
//   this.models.id = Date.now();
//   this.models.size = size;
//   this.models.colors = colors;
// };

// OOP
class Product2 {
  static showModel() {
    console.log('this static ', this);
  }

  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.models = {};
  }

  setModel() {
    this.models.id = Date.now();
    this.models.size = size;
    this.models.colors = colors;
  }
}

Product2.showModel();

// const product1 = new Product('Tshirt', 20);
// product1.setModel(20, ['red', 'black']);

function X() {
  this.models = {};
  console.log('this @@@ ', this);
  // product1.setModel(20, ['red', 'black']);
}

const newX = new X();

const products = [
  null,
  {
    name: 'Pant',
    quantity: 19,
    models: {
      size: 26,
      id: 2,
      color: ['black', 'white'],
    },
  },
  {
    name: 'Long sleeve',
    quantity: 50,
    models: {
      size: 23,
      id: 4,
      color: ['green', 'yellow'],
    },
  },
];

// { name, qunatity, models }
Array.prototype.filterProduct = function () {
  const arr = this;
  const data = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      data.push({
        name: arr[i].name,
        quantity: arr[i].quantity,
      });
    }
  }
  return data;
};
console.log('products ', products);

console.log(products.filterProduct());

const emptyArr = [];

const obj = {
  name: 'Tai',
  getName: function () {
    console.log('this obj ', this);
    const testFn = () => {
      console.log('this in test ', this);
    };
    testFn();
    return this.name;
  },
};
obj.getName();
console.log('obj ', obj);
console.log('empty ', emptyArr);

//
function Student(fullname, dateOfBirth) {
  this.fullname = fullname; // Le Viet Thanh
  this.dateOfBirth = dateOfBirth; // 29/2/2008
}

Student.prototype.getFirstName = function () {
  return this.fullname.split(' ').pop();
}; // Thanh
Student.prototype.getAge = function () {
  const year = Number(this.dateOfBirth.split('/').pop());
  return new Date().getFullYear() - year;
}; // 16

const trainer = new Student('Truong Hoai', '29/2/2008');
console.log(trainer.getFirstName());
console.log(trainer.getAge());

function SortedArray() {
  this.numbers = [];
}

SortedArray.prototype.initNumbers = function (arr) {}; // set arr to this.numbers
SortedArray.prototype.get = function (num) {}; // return index of num
SortedArray.prototype.set = function (num) {}; // correct order in arr
SortedArray.prototype.remove = function (num) {}; // remove num in arr

// challenge 7
/**
	function SortedArray() {
		this.numbers = [];
	}
	SortedArray.prototype.initNumbers = function (arr) {}; // set arr to this.numbers
	SortedArray.prototype.get = function (num) {}; // return index of num
	SortedArray.prototype.set = function (num) {} // correct order in arr
	SortedArray.prototype.remove = function(num){} // remove num in arr
 *
 */

// 1 1 2 3 5 8 13 21 ...
// f(0) = 1
// f(1) = 1
// f(2) = f(0) + f(1) = 2
// f(i) = f(i-1) + f(i-2)
// ...
// f(n) = f(n-1) + f(n-2)
function getFibN(n) {
  if (n <= 1) return 1;
  return getFibN(n - 1) + getFibN(n - 2); // (2 + 1) = 3
} // O(2^n)

function calTime(fn, n, arg) {
  const startTime = Date.now();
  const res = fn(n, arg);
  console.log(res, Date.now() - startTime);
}

calTime(getFibN, 6);
calTime(getFibN, 7);
// calTime(getFibN, 38); // 1,5s
// calTime(getFibN, 40); // 3s

// getFibN(6) -> 13
// getFibN(7) -> 21
// getFibN(40) -> ...
// getFibN(41) -> ...

function getFibN(n) {
  if (n <= 1) return n;
  // n >= 2 (1 + 1)

  let a = 1, // f(n-2)
    b = 1, // f(n-1)
    temp;
  for (let i = 2; i <= n; i++) {
    // O(n)
    temp = a + b; // f(i)
    a = b;
    b = temp;
  }
  return b;
}
// space: O(1)
// time: O(n)

function getFibN2(n, memo = {}) {
  // memo = {1: 1, 2: 2} []: reference
  if (n <= 1) return 1;

  if (memo[n]) return memo[n]; // O(1)
  memo[n] = getFibN2(n - 1, memo) + getFibN2(n - 2, memo); //
  return memo[n];
}
// space: O(n)
// time: O(n)

// calTime(getFibN, 5);
// calTime(getFibN, 40);

// calTime(getFibN2, 5, {});
// calTime(getFibN2, 40, {});

// phone: string
const regionalCode = {
  '+84': 'VN',
  '+65': 'SG',
  '+1': 'US',
  '+353': 'Ireland',
};

function formatPhoneNumber(phone) {
  let currentRegionalCode = '';
  let i = 2;
  // slice regional code
  while (i <= 4) {
    currentRegionalCode = phone.substring(0, i);
    if (regionalCode[currentRegionalCode]) {
      break;
    }
    i++;
  }
  const phoneNumber = phone.substring(i);
  if (phoneNumber.length === 8) {
    return `(${currentRegionalCode}) ${phoneNumber.substring(
      0,
      4
    )} ${phoneNumber.substring(4)}`;
  }

  return `(${currentRegionalCode}) ${phoneNumber.substring(
    0,
    3
  )} ${phoneNumber.substring(3, 6)} ${phoneNumber.substring(6)}`;
}

console.log('+847458202101: ', formatPhoneNumber('+847458202101'));
console.log('+6584899004: ', formatPhoneNumber('+6584899004'));
console.log('+16041375039: ', formatPhoneNumber('+16041375039'));

// '+847458202101': (+84) 745 202 101 (9 / 3)
// '+6584899004': (+65) 8489 9004 ( 8 / 2)
// '+16041375039': (+1) 604 137 5039 (10 / 3)
// '+353'
// VN: 84, SG: 65, US: 1

/** products1: [{
  id: 1,
  name: 'T shirt',
  quantiy: 10,
  colors: ['red,'yellow']
}, {
  id: 2,
  name: 'Pant',
  quantiy: 11,
  colors: ['black']
}]  
  
newProducts2: [{
  id: 1,
  name: 'T shirt',
  quantiy: 15,
  colors: ['red,'yellow', 'white']
}, {
  id: 3,
  name: 'Sweater',
  quantiy: 12,
  colors: ['brown']
}]

 }
*/

const product1 = [
  {
    id: 1,
    name: 'T shirt',
    quantiy: 10,
    colors: ['red', 'yellow'],
  },
  {
    id: 2,
    name: 'Pant',
    quantiy: 11,
    colors: ['black'],
  },
];

const product2 = [
  {
    id: 1,
    name: 'T shirt',
    quantiy: 15,
    colors: ['red', 'yellow', 'white'],
  },
  {
    id: 3,
    name: 'Sweater',
    quantiy: 12,
    colors: ['brown'],
  },
];

const product3 = [
  {
    id: 2,
    name: 'Pant 2',
    quantiy: 12,
    colors: ['red', 'white', 'brown'],
  },
  {
    id: 3,
    name: 'Sweater 3',
    quantiy: 13,
    colors: ['purple'],
  },
];

function mergeProducts(products1, newProducts2) {
  const objProduct2 = {};
  const result = [...newProducts2];
  for (let i = 0; i < newProducts2.length; i++) {
    // O(m)
    objProduct2[newProducts2[i]['id']] = newProducts2[i];
  }

  for (let i = 0; i < products1.length; i++) {
    // O(n)
    if (!objProduct2[products1[i]['id']]) {
      result.push(products1[i]);
    }
  }

  return result;
} // O(n+m)
// console.log(mergeProducts(product1, product2));

function mergeProducts2(product1, product2) {
  const result = [];
  let i = 0,
    j = 0;
  while (i < product1.length && j <= product2.length) {
    if (product1[i]['id'] >= product2[j]['id']) {
      result.push(product2[j]);
      if (product1[i]['id'] === product2[j]['id']) {
        i++;
      }
      j++;
      continue;
    }
    if (product1[i]['id'] < product2[j]['id']) {
      result.push(product1[i]);
      i++;
    }
  }

  if (i < product1.length) {
    result.push(...product1.splice(i));
  }
  if (j < product2.length) {
    result.push(...product2.splice(j));
  }
  return result;
}

// console.log(mergeProducts2(product1, product2));
/**
 * 1 -> 2 -> 3 -> 4
 * 3 -> 6 -> 7
 * 1 -> 2 -> 3 -> 3 -> 4 -> 6 -> 7
 * LRU
 */

/**
 *  [products1, products2, products3, products4, products5,....]
 *  [products12, products34, products5]
 *  [products1234, products5]
 *  [products12345]
 */

/**
 *  [products1, products2, products3, products4, products5,....]
 *  [products12, products3, products4, products5]
 *  [products123,  products4, products5]
 *  [products1234,  products5]
 *  [products12345]
 */

function mergeNArrayProducts(listProducts) {
  let result = [...listProducts];
  while (result.length > 1) {
    // O(n/2)
    const temp = [];
    for (let i = 0; i < result.length; i += 2) {
      // O(n/2)
      if (i === result.length - 1) {
        temp.push(result[i]);
      } else {
        temp.push(mergeProducts2(result[i], result[i + 1])); // O(m)
      }
    }
    result = [...temp];
  }
  return result[0];
} // O((n^2 * m)/4)
// O(m * n)

console.log(
  'mergeNArrayProducts',
  mergeNArrayProducts([product1, product2, product3])
);

// Challenge 14:
/**
 * 1. merge n array products
 * listProducts: [products, products]
 * function mergeNArrayProducts(listProducts) {
 * }
 *
 * 2. format currency
 * amount: number - 100000
 * return: 1,000,000 10,000
 * function formatCurrency(amount) {}
 */

function formatCurrency(amount) {
  return amount.toLocaleString(); //
}

function formatCurrency2(amount) {
  let formatedAmount = '';
  while (amount > 999) {
    const temp = amount % 1000; // 10^3 => log(10^3)n
    tempFormat =
      temp === 0
        ? ',000'
        : temp < 10
        ? `,00${temp}`
        : temp < 100
        ? `,0${temp}`
        : `,${temp}`;
    formatedAmount = tempFormat + formatedAmount;
    amount = Math.floor(amount / 1000);
  }
  if (amount > 0) {
    formatedAmount = amount + formatedAmount;
  }
  return formatedAmount;
}
console.log(formatCurrency2(1003000));
console.log(formatCurrency2(112020)); // 112020 % 1000 = ,020
console.log(formatCurrency(100));
console.log(formatCurrency(1000));
