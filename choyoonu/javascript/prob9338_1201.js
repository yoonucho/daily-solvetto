// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 1;

let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    if (i % 2 === 0) {  // 홀수 행: 왼쪽에서 오른쪽으로
        for (let j = 0; j < n; j++) {
            str += cnt + " ";
            cnt++;
        }
    } else {  // 짝수 행: 오른쪽에서 왼쪽으로
        cnt += (n - 1);  // 현재 행의 마지막 숫자로 이동
        for (let j = 0; j < n; j++) {
            str += cnt + " ";
            cnt--;
        }
        cnt += (n + 1);  // 다음 행의 시작 숫자로 이동
    }
    console.log(str);
}