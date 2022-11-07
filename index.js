console.log("Hello World !!");

// by default data type is "any"

let b;

// number
let a = 10;

let c = "This is a  String";

let d = [0, 1, 2, 3, 4, 5];
// number[]

console.log(a + " is a number !"); // concatenation ( + ) - with data type conversion
// console.log(a, "is a number !"); // mutiple prints - without data type conversion
// console.log(`${a} is a number !`); // ${ var_name } - string formatting

// `` backticks ${ var_name }

let value = -2; // 0 is null and the boolean value is false

// if (value > 0) {
//   // value = 0 or value > 0
//   console.log("Value is greater than 0 !");
// }

// value is greater than 0 - value > 0
// value is not equal to 0 - value !== 0
// if (value > 0) {
//   console.log("Value is greater than 0 !");
// } else if (value === 0) {
//   console.log("Value is 0 !");
// } else {
//   console.log("Value is less than 0 !");
// }

let color = "red";

// if (color === "red") {
//   // true
//   console.log("Color is red !");
// } else if (color === "yellow") {
//   console.log("Color is yellow !");
// } else if (color === "blue") {
//   console.log("Color is blue !");
// } else if (color === "green") {
//   console.log("Color is green !");
// }

// if (color.length > 2) {
//   console.log("Length is greater than 2");
// }

// let i = 0;
// // i <= 10 - 11 times; breaks when i = 11
// // i < 10 - 10 times; breaks when i > 10
// while (i < 10) {
//   // breaks when i = 10
//   console.log(i);
//   i = i + 1;
// }

// // let i = 0; i < 10; will run in first iteration
// // i < 10; i++ will run after first iteration
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let , const

//let - we can update it's value
// const - we can't update it's value

// a1 = 2;

const a2 = 3;

// a2 = 4;

// const a1 = 1; // same name variable cannot be re declared

// a1 = 2;
// console.log(typeof a1);

// a1 = "String";

// console.log(typeof a1);

// arthimatic operators

// + - * / %

let a1 = 1;
let b1 = 2;
let c1 = 0;

// string + something or something + string = something will be converted to string
// number  + number = addition
// string + string = concatenation
// string + number = concatenation
// number + string = concatenation

// console.log(a1 + b1);
// console.log(a1 - b1);
// console.log(a1 * b1);
// console.log(a1 / b1);

let a3 = 1;

a3 = a3 + 1;
a3 += 1; // a3 = a3 + 1

a3 = a3 + 500; // a3 = a3 + 500
a3 += 500; // a3 = a3 + 500

a3 -= 500; // a3 = a3 - 500
a3 = a3 - 500; // a3 = a3 - 500

a3 *= 500; // a3 = a3 * 500
a3 = a3 * 500; // a3 = a3 * 500

a3 /= 500; // a3 = a3 / 500
a3 = a3 / 500; // a3 = a3 / 500

a3 %= 500; // a3 = a3 % 500
a3 = a3 % 500; // a3 = a3 % 500

// console.log(6 / 2); // 3
// console.log(6 % 2); // 0

// console.log(7 % 2); // 1

let answer = 6 / 2;
let remainder = 6 % 2;

let power = 2 ^ 2; // 4
power = 2 ^ 3; // 8
power = 2 ^ 2311635143;

// let percentage = (total_number / total_marks) * 100 + " %";

a3++; // a3 = a3 + 1 (increment)
a--; // a3 = a3 - 1 (decrement)

let a4 = 1;

// post increment - post means bad mein
// print kia phr increment
console.log(a4++);
// console.log(a4);

// pre increment - pre means pehle
// console.log(++a4);

// functions
