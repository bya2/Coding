const fs = require("fs");
const path = require("path");
const getPath = (...paths) => path.resolve(__dirname, ...paths);
const filePath = process.platform === "linux" ? "/dev/stdin" : getPath("input.txt");
let inputs = fs.readFileSync(filePath).toString().split("\r\n");

for (let input of inputs) {
  
}
