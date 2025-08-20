const debounce = (func, t) => {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, t);
  };
};

const func = (name) => console.log("doing...." + name);

const debounced = debounce(func, 100);

debounced("mike");
debounced("mike");
debounced("mike");
debounced("mike");

const string = "something"; //primitive
const num = 1; //primitive
const sum = undefined; //primitive

const obj = {
  num,
  sum,
}; //object //data stored in heap but reference in stack

function doSomething(num) {
  return ++num;
}

function modifyObjectProperty(obj) {
  obj.num = 3;
  return obj;
}
console.log(num);
console.log(doSomething(num));
console.log(num);

console.log(obj);
console.log(modifyObjectProperty(obj));
console.log(obj);

const map = new Map();

map.set("val", 23);
map.set("val2", 24);
const keyIter = map.keys();
const valIter = map.values();

for (let i = 0; i < map.size; ++i) {
  console.log({ key: keyIter.next().value, value: valIter.next().value });
}

function one(x) {
  return function two(y) {
    return function three(z) {
      return x * y * z;
    };
  };
}

console.log(one(2)(3));

const callFunc = async () => {
  const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await new Promise((resolve, reject) => {
    rl.question("what is your name", (answer) => {
      resolve(answer);
    });
  });

  rl.close();
  console.log(answer);
};

callFunc();
