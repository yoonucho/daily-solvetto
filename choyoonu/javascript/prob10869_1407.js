const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().split(" ");
let A = Number(input[0]);
let B = Number(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);