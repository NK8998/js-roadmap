const readline = require("readline");
const fs = require("fs");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const getAnswer = async () => {
//   const answer = await new Promise((resolve, reject) => {
//     rl.question("Enter your name", (result) => {
//       resolve(result);
//     });
//   });

//   console.log(answer);
//   rl.close();
// };

// getAnswer();

const rl = readline.createInterface({
  input: fs.createReadStream("file.txt"),
});

const readContent = () => {
  let sum = 0;
  rl.on("line", (line) => {
    const num = Number(line);
    isNaN(num) ? console.log("") : (sum += num);
  });
  rl.on("close", () => {
    console.log(sum);
  });
};

readContent();
