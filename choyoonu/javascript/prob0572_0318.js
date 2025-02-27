// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < n - 1; i++) {
    str = "";
    for (let j = n - i; j > 1; j--) {
        str += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        str += "*";
    }
    console.log(str);
}

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < i; j++) {
        str += " ";
    }

    for (let j = 0; j < (2 * n) - (2 * i) - 1; j++) {
        str += "*";
    }
    console.log(str);
}

// 다이아몬드 모양을 *로 그리는 코드를 작성해보세요.

규칙은 다음과 같습니다.


N = 2
 *
***
 *

N = 3
  *
 ***
*****
 ***
  *