const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";
let cnt = 1;

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
        str += cnt;
        cnt++;
        if ( cnt / 10  === 1) {
            cnt = cnt - 9;
        }
    }
    console.log(str);
}