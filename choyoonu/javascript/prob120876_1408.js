function solution(lines) {
    // -100부터 100까지의 배열을 생성
    let arr = Array(201).fill(0);
   
    // 각 선분의 범위를 1씩 증가
    lines.forEach(([a, b]) => {
        for (let i = a + 100; i < b+ 100; i++) {
            arr[i]++;
        }
    });

    // 겹치는 부분의 길이 계산 (값이 2 이상인 부분의 개수)
    return arr.reduce((acc, val) => acc + (val >= 2 ? 1 : 0), 0);
    
}

// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.