function solution(keyinput, board) {
    let answer = [];
    let x = 0;
    let y = 0;
    let maxX = Math.trunc(board[0] / 2);
    let minX = Math.trunc(-board[0] /2);
    let maxY = Math.trunc(board[1] / 2);
    let minY = Math.trunc(-board[1] /2);

    for (let i of keyinput) {
        if(i === "left") {
            x --;
        } 
        if (i === "right") {
            x ++;
        }
        if(i == "up") {
            y ++ ;
        }
        if (i === "down") {
            y --;
        }
        // 이동 후 좌표가 범위를 벗어나지 않도록 제한
        x = Math.max(minX, Math.min(maxX, x));
        y = Math.max(minY, Math.min(maxY, y));
        
    }
   
    return  [x,y];
}


// 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

// [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.