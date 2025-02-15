// 1. 최대공약수 함수
function gcd(x,y) {
    return y === 0 ? x : gcd(y, x % y);
}

// 2. 소인수분해 함수
function getPrimeFactors(num) {
    let factors = [];
    let divisor = 2;
    
    while(num > 1) {
        if( num % divisor === 0) {
            factors.push(divisor);
            num /= divisor;
        }
        else {
            divisor++;
        }
    }
    return factors;
}


// 3. 기약분수 분모의 소인수를 구하는 함수
function solution(a, b) {
    
   // 최대공약수를 구하여 기약분수로 변환
    const commonDivisor = gcd(a, b);
    const reducedDenominator = b / commonDivisor;
    
    // 기약분수의 분모 소인수 반환
    const factors= getPrimeFactors(reducedDenominator);
    
    // 분모 소인수에 2 또는 5가 존재하는지 확인
    const isFiniteDecimal = factors.every(f => f === 2 || f === 5);
    return isFiniteDecimal ? 1 : 2;
    
}

// 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

// 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
// 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.