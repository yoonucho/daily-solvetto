function solution(n) {
    
    let count = 0; // 3x 마을에서 사용하는 숫자의 개수를 셀 변수
    let i = 0; // 실제 숫자를 증가시킬 변수
   
    while(count < n) {  // n번째 3x 마을 숫자를 찾을 때까지 반복
        i++;
        // 3의 배수이거나 숫자 3이 포함된 경우 건너뜀
        if (i.toString().match(/3/g) || i % 3 === 0) {
           continue; // 유효한 숫자일 때만 count 증가
        }
        count++;

    }
    
    return i; // n번째 3x 마을 숫자 반환
}

// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다. 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.