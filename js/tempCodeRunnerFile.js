const obj = {
  name: "jhon deo",
  age: 26,
  address: "Itahari",
  phone: "9812345678",
  email: "jhon@gmail.com",
  password: "1234567890",
};

const {password, ...others} = obj
console.log(others);