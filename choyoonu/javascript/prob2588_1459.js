let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let A = Number(input[0]);
let B = input[1];
let B1 = Number(B[0]);
let B2 = Number(B[1]);
let B3 = Number(B[2]);

console.log(A * B3);
console.log(A * B2);
console.log(A * B1);
console.log((A * B3) + (A * B2 * 10) + (A * B1 * 100) );