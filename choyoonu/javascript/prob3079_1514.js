const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// n칸의 정사각형에 올바른 숫자를 출력합니다.
for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
        str += (i * 2)+ (j * 2 ) + 11 + " ";
    }
    console.log(str);
}
