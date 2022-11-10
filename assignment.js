// isNaN
// includes

const data = "name=ali;key=123;age=20;color=red;size=40;email=abc@gmail.com";

const splitted = data.split(";");

// console.log(splitted);

// [ 'name=ali', 'key=123', 'age=20', 'color=red' ]

const obj = {};

for (let i = 0; i < splitted.length; i++) {
  // }

  // for (const item of splitted) {
  //   console.log(item);
  //   const data = item.split("=");
  //   console.log(data);
  //   data[0]
  //   data[1]

  //   splitted[i] element of splitted array

  //    key = 0, value = 1, value1 = 2, value2 = 3
  const [key, value] = splitted[i].split("=");
  //   console.log(`${key} : ${value}`);

  const requiredFields = ["name", "key", "age"];

  if (requiredFields.includes(key)) {
    // Not a Number
    // string (abc, !#@@!#!@, ADSAB) NaN
    if (isNaN(value)) {
      // is not a number
      obj[key] = value;
    } else {
      // is a number
      obj[key] = Number(value);
    }
  }
}

// console.log(typeof obj["name"], obj["name"]);
// console.log(typeof obj["key"], obj["key"]);
// console.log(typeof obj["age"], obj["age"]);

console.log(obj);
