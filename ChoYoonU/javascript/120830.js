/* 프로그래머스 120830.양꼬치
(https://school.programmers.co.kr/learn/courses/30/lessons/120830) */

function solution(n, k) {
	var answer = 0;
	if (n < 10) {
		answer = n * 12000 + k * 2000;
	} else {
		answer = n * 12000 + k * 2000 - Math.trunc(n / 10) * 2000;
	}
	return answer;
}