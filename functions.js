// functions

// - Fruitful
// - Fruitless

// Fruitless - no return
function myFunction() {
  // do something
  console.log("Hello World");
}

// Fruitful - return
function myFunction1() {
  return "Hello World";
}

// const result = myFunction();
// console.log(result);

// myFunction1();
// console.log(myFunction1());

// const result = myFunction1();
// console.log(result);

// annonymous function
// myFunc is holding the whole function not its return value
// const myFunc = function () {
//   console.log("Hello");

//   return "Hello World !";
// };

// console.log(myFunc());

// const result = myFunc();
// console.log(result);

// arrow functions

let myFunc = (a, b, c) => {
  // do something
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
};

// Fruitless function - console.log
let myFunc1 = (a, b, c) => console.log("Hello World");
// console.log(myFunc1);
myFunc1();

// Fruitful function - console.log not used
let add = (a, b, c) => a + b + c;
let subtract = (a, b, c) => a - b - c;

// console.log(add(1, 2, 3));
const calculator = (operation, a, b, c) => {
  // operation is callback
  const result = operation(a, b, c);
  return result;

  //   if (operation === "+") {
  //     return a + b + c;
  //   } else if (operation === "-") {
  //     return a - b - c;
  //   }
};

let power = (a, b, c) => a ^ b ^ c;

console.log(calculator(add, 1, 2, 3));
console.log(calculator(subtract, 1, 2, 3));
console.log(calculator(power, 1, 2, 3));
