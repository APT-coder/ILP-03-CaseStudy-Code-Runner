const maze1 = [
    [0,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,1,1,1,1,0,1,1,1,0,1],
    [1,0,1,0,0,0,1,1,1,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,0,0,1,0,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,1,0,1,0,1,0,1,0,0],
    [1,0,0,0,1,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
];
const maze1Element = document.getElementById('maze1');
let playerPosition1 = { x: 0, y: 0 };
 
const maze2 = [
    [0,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,1,1,1,1,0,1,1,1,0,1],
    [1,0,1,0,0,0,1,1,1,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,0,0,1,0,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,1,0,1,0,1,0,1,0,0],
    [1,0,0,0,1,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
];
const maze2Element = document.getElementById('maze2');
let playerPosition2 = { x: 0, y: 0 };
 
const drawMaze1 = () => {
    maze1Element.innerHTML = '';
    for (let i = 0; i < maze1.length; i++) {
        for (let j = 0; j < maze1[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (maze1[i][j] === 1) {
                cell.classList.add('wall');
            }
            if (i === playerPosition1.y && j === playerPosition1.x) {
                cell.classList.add('player');
            }
            maze1Element.appendChild(cell);
        }
    }
};
 
const drawMaze2 = () => {
    maze2Element.innerHTML = '';
    for (let i = 0; i < maze2.length; i++) {
        for (let j = 0; j < maze2[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (maze2[i][j] === 1) {
                cell.classList.add('wall');
            }
            if (i === playerPosition2.y && j === playerPosition2.x) {
                cell.classList.add('player');
            }
            maze2Element.appendChild(cell);
        }
    }
};
 
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        movePlayer1(0, -1);
    } else if (event.key === 'ArrowDown') {
        movePlayer1(0, 1);
    } else if (event.key === 'ArrowLeft') {
        movePlayer1(-1, 0);
    } else if (event.key === 'ArrowRight') {
        movePlayer1(1, 0);
    }
   
    if (event.key === 'a') {
        movePlayer2(-1, 0);
    } else if (event.key === 'd') {
        movePlayer2(1, 0);
    } else if (event.key === 'w') {
        movePlayer2(0, -1);
    } else if (event.key === 's') {
        movePlayer2(0, 1);
    }
});
 
const movePlayer1 = (dx, dy) => {
    const newX = playerPosition1.x + dx;
    const newY = playerPosition1.y + dy;
 
    if (isValidMove(newX, newY, maze1)) {
        playerPosition1.x = newX;
        playerPosition1.y = newY;
        drawMaze1();
    }
};
 
const movePlayer2 = (dx, dy) => {
    const newX = playerPosition2.x + dx;
    const newY = playerPosition2.y + dy;
 
    if (isValidMove(newX, newY, maze2)) {
        playerPosition2.x = newX;
        playerPosition2.y = newY;
        drawMaze2();
    }
};
 
const isValidMove = (x, y, maze) => {
    return x >= 0 && x < maze[0].length && y >= 0 && y < maze.length && maze[y][x] !== 1;
};
 
drawMaze1();
drawMaze2();
 