function solution(bin1, bin2) {
    bin1 = parseInt(bin1, 2);
    bin2 = parseInt(bin2, 2);
    let bin = bin1 + bin2;
    let result = "";
    while(bin > 0) {
        result = (bin % 2) + result;
        bin = Math.floor(bin / 2);
    }
    return result === "" ? "0" : result;
}


// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.