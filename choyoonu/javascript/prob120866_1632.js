function solution(board) {
    const n = board.length;
    const bomb = []; // 지뢰 위치 저장할 배열 
    // 모든 좌표의 초기값을 0으로 설정한 이중배열 생성
    let dangerZone = Array.from({ length: n }, () => Array(n).fill(0));
    
    // 1. 지뢰를 중심으로 8 방향 표시
    const directions = [
        [-1, -1], [-1, 0],  [-1, 1],  // 위쪽 3칸
        [0,  -1],           [ 0, 1],  // 양옆 2칸
        [1,  -1], [ 1, 0],  [ 1, 1]   // 아래쪽 3칸
    ];
    
   board.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === 1) {
        dangerZone[i][j] = 1; // 지뢰 위치도 위험 지역으로 설정
        directions.forEach(([dx, dy]) => {
          const newX = i + dx;
          const newY = j + dy;
          if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
            dangerZone[newX][newY] = 1; // 위험 지역 마킹
          }
        });
      }
    });
  });
    
    // 2. 안전한 지역 개수 세기 (board[x][y] === 1 제외)
    let safeCount = 0;
    board.forEach((row, i) => {
        row.forEach((col, j)=> {
            if (dangerZone[i][j] === 0 && board[i][j] !== 1) {
                safeCount++;
            }
        })
    });
    
    return safeCount;
    
}


// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/124a2c93-da99-4643-96a8-292bb871f553/image.png
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.


// [
//     [0, 0, 0, 0, 0], 
//     [0, 0, 0, 0, 0], 
//     [0, 0, 0, 0, 0], 
//     [0, 0, 1, 0, 0], 
//     [0, 0, 0, 0, 0]
// ]