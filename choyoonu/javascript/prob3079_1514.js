// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// i가 짝수인 경우 별을 1개, 홀수인 경우 i + 1개 출력합니다
for (let i = 0; i < n; i++) {
    str = "";
    if (i % 2 == 0) {
        str += "*";
    } else {
        for (let k = 0; k < i + 1; k++) {
            str += "* ";
        }
    }
    console.log(str);
}