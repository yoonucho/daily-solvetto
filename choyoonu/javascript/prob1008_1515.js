const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ");
let A = input[0];
let B = input[1];

console.log((A / B).toFixed(9));