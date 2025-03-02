// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < (n * 2) + 1; i++) {
    str = "";
    for (let j = 0; j < (n * 2) + 1; j++) {

        if (i % 2 === 0  ||  j % 2 === 0) {
             str += "* ";
        }
        else {
            str += "  ";
        }        
    }
    console.log(str);
}

// 정수 N의 값을 입력받아 별표를 출력하는 프로그램을 아래 예를 참고하여 작성해보세요.

예)

N에 1를 입력받는 경우


* * *
*   *
* * *
N에 2를 입력받는 경우


* * * * *
*   *   *
* * * * *
*   *   *
* * * * *