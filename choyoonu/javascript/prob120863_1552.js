function solution(polynomial) {
    // x항을 찾아서 총합
    let sumX = (polynomial.match(/\b\d*x\b/g) || []).reduce((a,c)=> a + (c === "x" ? 1 : Number(c.replace("x", ""))),0)
    // 숫자를 찾아서 총합
    let sumNumber = (polynomial.match(/\b\d+\b/g) || []).reduce((a,c)=> a + Number(c), 0)
    
    if (sumX && sumNumber) return `${sumX === 1 ? "" : sumX}x + ${sumNumber}`; 
    else if (sumX) return `${sumX === 1 ? "" : sumX}x`;
    else return sumNumber.toString();
}


// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.