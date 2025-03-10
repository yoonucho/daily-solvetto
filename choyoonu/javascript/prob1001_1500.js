const fs = require("fs");

// 입력 받기
let input = fs.readFileSync(0).toString().trim().split(" ");

// 정수로 변환
let A = Number(input[0]);
let B = Number(input[1]);

// 결과 출력
console.log(A - B);