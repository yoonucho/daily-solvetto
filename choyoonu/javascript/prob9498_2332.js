let fs = require("fs");
let input = Number(fs.readFileSync(0).toString());

if (input >=90 && input <= 100) {
    console.log("A");
} else if (input >=80 && input <= 90){
    console.log("B");
} else if (input >=70 && input <= 79 ){
    console.log("C");
} else if (input >=60 && input <= 69) {
     console.log("D");
} else {
     console.log("F");
}