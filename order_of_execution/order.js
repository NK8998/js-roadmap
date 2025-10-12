//order of execution.
//important since it will allow you to write logic in the correct order
//debugging also becomes easier

//event loop - this is what gives single threaded javascript its asynchronous nature

//synchronous(call stack) -> microtask queue -> callback queue
//-----------------------------------------------------------

//synchrounous
for (let i = 0; i < 10; ++i) {
  console.log(i);
}

//synchronous function call but the callback will be put in callback queue
setTimeout(() => {
  console.log("Finally");
}, 0);

//synchronous
console.log("Somethings here");

//microtask
await new Promise((resolve, reject) => {})
  .then(() => {
    //this callback will go into microtask queue
  })
  .then(() => {
    //this callback goes into microtask queue as well
  })
  .catch(() => {
    //this will also be in microtask queue
  });

let name;

//again function call is synchronous but callback will be put in callback queue
setTimeout(() => {
  //will be initialized due to callback queue coming after synchronous tasks
  console.log(name); // logs "Mike" to the console not undefined
}, 0);

name = "Mike";
