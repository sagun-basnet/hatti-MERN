// let a;
// var b;
// const c = 0;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// function myFun(a, b) {
//   return a + b;
// }

// console.log(myFun(12, 14));
// console.log(myFun(10, 10));

const myFun = (a, b) => a + b;

// const callBackEx = (a) => {
//   a();
// };

// callBackEx(() => {
//   console.log("This is callback");
// });

const name = "jhon deo";
const age = 26;
const address = "Itahari";
const phone = "9812344567";

console.log(
  "Welcome " +
    name +
    ". Your age is " +
    age +
    ". You live in " +
    address +
    ". Your contact number: " +
    phone +
    "."
);

console.log(
  `Welcome ${name}. Your age is ${age}. You live in ${address}. Tour contact number: ${phone}`
);

const arr = [
  1,
  "asdfas",
  true,
  [1, 2, 34, 4],
  0.34,
  { name: "asdfqsfd", age: 34 },
  myFun(),
];

console.log(arr[3][2]);
// const name = "asdfasdf";

const obj = {
  name: name,
  age: 26,
  address: "Itahari",
  phone: "9812345678",
  myArr: [1, 2, 3, 56, 7, 0],
  myFun: myFun(),
};

console.log(obj.name);

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


console.log(data[0].name);
