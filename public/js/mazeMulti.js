const maze1 = [
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1], 
    [1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1], 
    [1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1], 
    [1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], 
    [1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1], 
    [1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1], 
    [1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1], 
    [1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1], 
    [1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1], 
    [1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1], 
    [1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1], 
    [1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1], 
    [1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1], 
    [1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1], 
    [1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1], 
    [1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1], 
    [1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1], 
    [1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0], 
    [1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1], 
    [1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1], 
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
const maze1Element = document.getElementById('maze1');
let playerPosition1 = { x: 0, y: 0 };
 
const maze2 = [
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1], 
    [1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1], 
    [1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1], 
    [1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], 
    [1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1], 
    [1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1], 
    [1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1], 
    [1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1], 
    [1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1], 
    [1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1], 
    [1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1], 
    [1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1], 
    [1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1], 
    [1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1], 
    [1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1], 
    [1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1], 
    [1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1], 
    [1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0], 
    [1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1], 
    [1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1], 
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
const maze2Element = document.getElementById('maze2');
let playerPosition2 = { x: 0, y: 0 };

const endPathPosition = { x: 21, y: 18 }; 
let gameStarted = false;




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
                cell.classList.add('player1');
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
                cell.classList.add('player2');
            }
            maze2Element.appendChild(cell);
        }
    }
};


 
document.addEventListener('keydown', event => {
    if (!gameStarted) return;
    
    if (event.key === 'a') {
        movePlayer1(-1, 0);
    } else if (event.key === 'd') {
        movePlayer1(1, 0);
    } else if (event.key === 'w') {
        movePlayer1(0, -1);
    } else if (event.key === 's') {
        movePlayer1(0, 1);
    }

    if (event.key === 'ArrowUp') {
        movePlayer2(0, -1);
    } else if (event.key === 'ArrowDown') {
        movePlayer2(0, 1);
    } else if (event.key === 'ArrowLeft') {
        movePlayer2(-1, 0);
    } else if (event.key === 'ArrowRight') {
        movePlayer2(1, 0);
    }
    checkEndPathReached();
   
    
});
 
const movePlayer1 = (dx, dy) => {
    const newX = playerPosition1.x + dx;
    const newY = playerPosition1.y + dy;
 
    if (isValidMove(newX, newY, maze1)) {
        playerPosition1.x = newX;
        playerPosition1.y = newY;
        drawMaze1();

        // adding movement audio
        document.addEventListener('keydown', function(event) {
            const audio = document.getElementById('move-audio');
            const keys = ["w", "a", "s", "d"];
            if (keys.includes(event.key)) {
                audio.play();
            }
        });
    }
};
 
const movePlayer2 = (dx, dy) => {
    const newX = playerPosition2.x + dx;
    const newY = playerPosition2.y + dy;
    
    // adding movement audio
    document.addEventListener('keydown', function(event) {
        const audio = document.getElementById('move-audio');
        const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        if (keys.includes(event.key)) {
            audio.play();
        }
    });

    if (isValidMove(newX, newY, maze2)) {
        playerPosition2.x = newX;
        playerPosition2.y = newY;
        drawMaze2();

        
    }
};
 
const isValidMove = (x, y, maze) => {
    return x >= 0 && x < maze[0].length && y >= 0 && y < maze.length && maze[y][x] !== 1;
};

const checkEndPathReached = () => {
    if (playerPosition1.x === endPathPosition.x && playerPosition1.y === endPathPosition.y) {
        displayWinner("Player 1");
    } else if (playerPosition2.x === endPathPosition.x && playerPosition2.y === endPathPosition.y) {
        displayWinner("Player 2");
    }
};

const displayWinner = (winner) => {
    const modal = document.getElementById('winnerModal');
    const winnerText = document.querySelector('.winner-text');
    const closeButton = document.querySelector('.close');
    winnerText.textContent = `${winner} is the winner!`;
  
    modal.style.display = 'block';
  
    closeButton.onclick = function() {
      modal.style.display = 'none';
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
         // adding win-audio
         const audio = document.getElementById('win-audio');
         audio.play();
          //done
  };

  document.getElementById('startGameBtn').addEventListener('click', () => {
    const countdownElement = document.getElementById('countdown');
    let countdown = 3;
    
    const countdownInterval = setInterval(() => {
        countdownElement.textContent = countdown;
        countdown--;
        
        if (countdown < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = '';
            gameStarted = true;
        }
    }, 1000);
});


//adding background
const bgAnimation = document.getElementById('bgAnimation');
const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('colorBox');
  bgAnimation.append(colorBox)
}



drawMaze1();
drawMaze2();



 