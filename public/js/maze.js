const maze = [
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

const mazeElement = document.getElementById('maze');
let playerPosition = { x: 0, y: 0 };

const questions = [
    {
        x : 1, y: 1,
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        x : 1, y: 3,
        question: "Which programming language is this Quiz written in?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        x : 3, y: 3,
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

function drawMaze() {
    mazeElement.innerHTML = '';
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (maze[i][j] === 1) {
                cell.classList.add('wall');
            }
            mazeElement.appendChild(cell);
        }
    }
}

function drawPlayer() {
    mazeElement.querySelectorAll('.player').forEach(cell => {
        cell.classList.remove('player');
    });
    const playerCell = mazeElement.children[playerPosition.y * maze.length + playerPosition.x];
    playerCell.classList.add('player');
}

let score = 0;
const questionElement = document.getElementById('questions');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
let answeredCorrectly = true;

function movePlayer(event) {
    if (!answeredCorrectly) {
        return;
    }
    let newX = playerPosition.x;
    let newY = playerPosition.y;

    switch (event.key) {
        case 'ArrowUp':
            newY = Math.max(0, playerPosition.y - 1);
            break;
        case 'ArrowDown':
            newY = Math.min(maze.length - 1, playerPosition.y + 1);
            break;
        case 'ArrowLeft':
            newX = Math.max(0, playerPosition.x - 1);
            break;
        case 'ArrowRight':
            newX = Math.min(maze[0].length - 1, playerPosition.x + 1);
            break;
    }

    displayQuestionIntro();
    const question = questions.find(q => q.x === newX && q.y === newY);
    
    if (question) {  
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';
        question.options.forEach((option, index) => {
            const choice = document.createElement('p');
            choice.textContent = option;
            console.log(option);
            choice.addEventListener('click', () => {
                if (option === question.answer) {
                    console.log(option);
                    console.log('inside')
                    score++;
                    playerPosition.x = newX;
                    playerPosition.y = newY;
                    drawPlayer();
                    questionElement.textContent = '';
                    optionsElement.innerHTML = '';
                    answeredCorrectly = true; 
                }
            });
            optionsElement.appendChild(choice);
            answeredCorrectly = false;
            return;
        });
    }

    if (maze[newY][newX] === 0) {
        const currentPlayerCell = mazeElement.children[playerPosition.y * maze.length + playerPosition.x];
        currentPlayerCell.classList.remove('player');
        playerPosition.x = newX;
        playerPosition.y = newY;
        drawPlayer();
    }

    if (playerPosition.x === maze[0].length - 1 && playerPosition.y === maze.length - 1) {
        alert('Congratulations! You won!');
        window.removeEventListener('keydown', movePlayer);
    }
}

function checkOption(selectedOption, question, newX, newY) {;
    if (selectedOption === question.answer) {
        score++;
        playerPosition.x = newX;
        playerPosition.y = newY;
        drawPlayer();
    }
    else {
        resultElement.textContent="Wrong Answer";
        return;
    }
}

function displayQuestionIntro()
{
    setTimeout(function() {
    const questionIntro = document.getElementById('question-intro');
    questionIntro.textContent="Your Question is here!!";
    questionIntro.classList.add('fade-out');
    }, 2000);
}

window.addEventListener('keydown', movePlayer);

drawMaze();
drawPlayer();