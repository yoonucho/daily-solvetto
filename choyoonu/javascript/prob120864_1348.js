function solution(my_string) {
    return my_string
        .match(/\d+/g) // 정규식으로 숫자(연속된 숫자)만 추출
        ?.map(Number) // 숫자 배열로 변환
        .reduce((a, c) => a + c, 0) || 0; // 숫자 합계 계산, 값이 없으면 0 반환
}

// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.