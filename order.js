//order of execution.
//event loop
import axios from "axios";

for (let i = 0; i < 10; ++i) {
  console.log(i);
}

setTimeout(() => {
  console.log("Finally");
}, 0);

console.log("Somethings here");

//microtask

await new Promise((resolve, reject) => {}).then(() => {}).catch(() => {});

//synchronous -> microtask queue -> callback queue -> synchronous

//macrotask
let name;

setTimeout(() => {
  console.log(name);
}, 0);

name = "Mike";

//synchronous - call stack
