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
const questionCard1 = document.getElementById('questionCard1');
questionCard1.style.display = 'none';
let visitedBlocks1 = [];
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
const questionCard2 = document.getElementById('questionCard2');
questionCard2.style.display = 'none';
let visitedBlocks2 = [];
let playerPosition2 = { x: 0, y: 0 };


function drawMaze1() {
    maze1Element.innerHTML = '';
    for (let i = 0; i < maze1.length; i++) {
        for (let j = 0; j < maze1[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (maze1[i][j] === 1) {
                cell.classList.add('wall');
            }
            maze1Element.appendChild(cell);
        }
    }
}


function drawMaze2() {
    maze2Element.innerHTML = '';
    for (let i = 0; i < maze2.length; i++) {
        for (let j = 0; j < maze2[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (maze2[i][j] === 1) {
                cell.classList.add('wall');
            }
            maze2Element.appendChild(cell);
        }
    }
}


drawMaze1();
drawMaze2();
