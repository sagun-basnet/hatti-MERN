// let a;
// var b;
// const c = 0;

import { div } from "./funtion.mjs";

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// function myFun(a, b) {
//   return a + b;
// }

// console.log(myFun(12, 14));
// console.log(myFun(10, 10));

// const myFun = (a, b) => a + b;

// const callBackEx = (a) => {
//   a();
// };

// callBackEx(() => {
//   console.log("This is callback");
// });

// const name = "jhon deo";
// const age = 26;
// const address = "Itahari";
// const phone = "9812344567";

// console.log(
//   "Welcome " +
//     name +
//     ". Your age is " +
//     age +
//     ". You live in " +
//     address +
//     ". Your contact number: " +
//     phone +
//     "."
// );

// console.log(
//   `Welcome ${name}. Your age is ${age}. You live in ${address}. Tour contact number: ${phone}`
// );

// const arr = [
//   1,
//   "asdfas",
//   true,
//   [1, 2, 34, 4],
//   0.34,
//   { name: "asdfqsfd", age: 34 },
//   myFun(),
// ];

// console.log(arr[3][2]);
// const name = "asdfasdf";

// const obj = {
//   name: name,
//   age: 26,
//   address: "Itahari",
//   phone: "9812345678",
// };

// console.log(obj.name);

const data = [
  {
    id: 1,
    name: "jhon deo",
    email: "jhon@gmail.com",
    phone: "9823435345",
    password: "1234567890",
  },
  {
    id: 2,
    name: "ram asdf",
    email: "jhoasd@gmail.com",
    phone: "9823435345",
    password: "1234567890",
  },
  {
    id: 1,
    name: "jhon deo",
    email: "jhon@gmail.com",
    phone: "9823435345",
    password: "1234567890",
  },
  {
    id: 1,
    name: "jhon deo",
    email: "jhon@gmail.com",
    phone: "9823435345",
    password: "1234567890",
  },
  {
    id: 1,
    name: "jhon deo",
    email: "jhon@gmail.com",
    phone: "9823435345",
    password: "1234567890",
  },
  {
    id: 1,
    name: "jhon deo",
    email: "jhon@gmail.com",
    phone: "9823435345",
    password: "1234567890",
  },
];

data.map((item, index) => {
  <p>{item.name}</p>;
  console.log(`index: ${index} : ${item.email}`);
});

// console.log(data[0].name);

// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
//   arr1[i] = arr2[i]
// }

// const arr = [1, 2, 3, 4, 5];

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 0];

// // console.log(...arr1);

// let arr3 = [...arr1, ...arr2, 11, 12, 13];
// console.log(arr3);
// for (let i = 0; i < arr1.length; i++) {
//   arr3[i] = arr1[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//   arr3[arr3.length] = arr2[i];
// }

// const [first, second, third, forth, ...others] = arr;
// console.log(first, second, third, forth, others);

// const obj = {
//   name: "jhon deo",
//   age: 26,
//   address: "Itahari",
//   phone: "9812345678",
//   email: "jhon@gmail.com",
//   password: "1234567890",
// };

// const { password, ...others } = obj;
// console.log(others);

// console.log(...obj);
// const newObj = {...obj};

// const { name, age, ...res } = obj;
// console.log(name, age, res);

// const myFun = ({ name, phone }) => {};
// myFun(obj);
