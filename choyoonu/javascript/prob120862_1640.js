function solution(numbers) {
    // 오름 차순 정렬
    numbers =  numbers.sort((a,b)=> a - b);
    // 가장 큰 두 수 곱(양수)
    let plusMaxNum = numbers[numbers.length -1] * numbers[numbers.length -2];
    // 가장 작은 두 수 곱 (음수일 가능성이 큼)
    let minusMinNum = numbers[0] * numbers[1];
    return Math.max(plusMaxNum, minusMinNum);
 
}

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요