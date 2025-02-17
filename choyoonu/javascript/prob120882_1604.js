function solution(score) {
    // 각 학생의 평균 점수 배열 생성
    const avgIndex = score.map((v)=> (v[0] + v[1] ) / 2);
    // 평균 점수를 복사하여 내림차순 정렬
    const sorted = [...avgIndex].sort((a,b) => b - a );
    // 원본 순서대로 각 점수의 순위를 계산
    return avgIndex.map((v) => sorted.indexOf(v) + 1);
}

// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.