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
        question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
        options: ["var", "let", "const", "variable"],
        answer: "variable"
    },
{
        x : 1, y: 3,
        question: "Which of the following is NOT an example of a control structure in programming?",
        options: ["if statement", "loop", "function", "switch statement"],
        answer: "function"
    },
    {
        x : 1, y: 5,
        question: "Which of the following is NOT a valid way to define an object in JavaScript?",
        options: ["let obj = {}", "const obj = new Object()", "let obj = Object.create({})", "const obj = {}"],
        answer: "const obj = new Object()"
    },
    {
        x : 1, y: 7,
        question: "Which of the following are  NOT valid CSS length units?",
        options: ["px (pixels)", "em (em)", "% (percentage)", "cm (centimeters)"],
        answer: "cm (centimeters)"
    },
    {
        x : 3, y: 7,
        question: "What is the purpose of the 'fetch' API in JavaScript?",
        options: ["To send HTTP requests to a server and receive responses", "To manipulate the DOM structure of a web page", "To create and manage web workers for concurrent execution", "To handle user input and interactions with web forms"],
        answer: "To send HTTP requests to a server and receive responses"
    },
    {
        x : 5, y: 7,
        question: "What does the 'em' unit in CSS represent?",
        options: ["Equal to the font-size of the parent element", "Equal to the width of the letter 'm' in the chosen font", "Equal to the height of the viewport", "Equal to the width of the screen"],
        answer: "Equal to the font-size of the parent element"
    },
    {
        x : 5, y: 9,
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["To refer to the current function being executed",
         "To refer to the parent object of a nested object", 
         "To refer to the global object in non-strict mode, and undefined in strict mode", 
         "To refer to the calling function that invoked the current function"],
        answer: "To refer to the calling function that invoked the current function"
    },
    {
        x : 5, y: 11,
        question: "What is the purpose of the 'localStorage' object in JavaScript?",
        options: ["Stores data locally in the user's browser", "Sends data to a server", "Retrieves data from an external API", "Encrypts sensitive information"],
        answer: "Stores data locally in the user's browser"
    },
    {
        x : 7, y: 11,
        question: "What does the CSS property 'flex-grow' do?",
        options: ["Determines the size of a flex container", "Specifies the order of flex items", "Defines the maximum size of a flex item", "Controls the ability of a flex item to grow"],
        answer: "Controls the ability of a flex item to grow"
    },
    {
        x : 7, y: 9,
        question: "What is the purpose of the 'let' keyword in JavaScript?",
        options: ["To declare a block-scoped variable", "To declare a globally-scoped variable",
         "To declare a constant variable", "To declare a constant variable"],
        answer: "To declare a block-scoped variable"
    },
    {
        x : 7, y: 7,
        question: "Which CSS property is used to specify the space between the border and the content of an element?",
        options: ["padding", "margin", "border-spacing", "space"],
        answer: "padding"
    },
    {
        x : 6, y: 6,
        question: "What is the purpose of the 'DOCTYPE' declaration in HTML?",
        options: ["To define the document type", "To declare variables", "To link external files", "To define document styles"],
        answer: "To define the document type"
    },
    {
        x : 6, y: 4,
        question: "What does the CSS property 'display: none;' do?",
        options: ["Hides the element from view", "Makes the element visible", "Adds padding to the element", "Increases the font size of the element"],
        answer: "Hides the element from view"
    },
    {
        x : 8, y: 4,
        question: "What does DOM stand for in JavaScript?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Dynamic Object Model"],
        answer: "Document Object Model"
    },
    {
        x : 10, y: 4,
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["Number", "Boolean", "String", "Character"],
        answer: "Character"
    },
    {
        x : 11, y: 5,
        question: "Which keyword is used to declare a function in JavaScript?",
        options: ["func", "function", "method", "def"],
        answer: "function"
    },
    {
        x : 11, y: 7,
        question: "Which of the following methods is used to add an element to the end of an array in JavaScript?",
        options: ["append()", "push()", "add()", "attach()"],
        answer: "push()"
    },
    {
        x : 11, y: 9,
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: ["pop()", "removeLast()", "deleteLast()", "splice()"],
        answer: "pop()"
    },
    {
        x : 11, y: 10,
        question: "Which of the following is used for version control in software development?",
        options: ["Git", "Apache", "MySQL", "Jenkins"],
        answer: "Git"
    },
];

const randomQuestions = [
    {
        
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        
        question: "What is encapsulation in object-oriented programming?",
        options: ["Combining data and methods that operate on the data into a single unit",
         " Hiding the implementation details of a class from the outside world",
          "Creating multiple instances of a class", "Grouping related classes into a package"],
        answer: "Combining data and methods that operate on the data into a single unit"
    },
    {
        
        question: "Which of the following is NOT a principle of object-oriented programming?",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "Iteration"],
        answer: "Iteration"
    },
    {
        
        question: "What does the 'super' keyword refer to in Java?",
        options: ["It refers to the superclass of the current class.",
         "It refers to the subclass of the current class.",
          "It refers to the parent object of the current object.",
           " It refers to the child object of the current object."],
        answer: "It refers to the superclass of the current class."
    },
    {
        
        question: "Which of the following is not a valid access modifier in Java?",
        options: ["public", "private", "protected", "global"],
        answer: "global"
    },
    {
        
        question: "Which Java keyword is used to prevent method overriding?",
        options: ["final", "static", "abstract", "override"],
        answer: "final"
    },
    {
        
        question: "Which Java keyword is used to create a subclass?",
        options: ["extends", "implements", "subclass", "inherits"],
        answer: "extends"
    },
    {
        
        question: "Which HTML tag is used to create a hyperlink?",
        options: [" <hyperlink>", "<a>", "<link>", "<url>"],
        answer: "<a>"
    },
    {
        
        question: "What does the 'alt' attribute in the <img> tag specify in HTML?",
        options: ["The alignment of the image", "The alternative text for the image", 
        "The link to another page", "The size of the image"],
        answer: "The alternative text for the image"
    },
    {
        
        question: "What is method overloading in OOP?",
        options: ["Defining multiple methods with the same name but different parameter lists",
                  "Defining multiple methods with the same name and parameter list",
                  "Defining multiple methods with the same name and return type", 
                  "Defining multiple methods with the same implementation"],
        answer: "Defining multiple methods with the same name but different parameter lists"
    },
];

const drawMaze = () => {
    mazeElement.innerHTML = '';
    maze.forEach(row => {
        row.forEach(cell => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            if (cell === 1) {
                cellElement.classList.add('wall');
            }
            mazeElement.appendChild(cellElement);
        });
    });
};

const drawPlayer = () => {
    mazeElement.querySelectorAll('.player').forEach(cell => {
        cell.classList.remove('player');
    });
    const playerCell = mazeElement.children[playerPosition.y * maze.length + playerPosition.x];
    playerCell.classList.add('player');
};

let score = 0;
const questionElement = document.getElementById('questions');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const questionCard = document.getElementById('questionCard');
questionCard.style.display = 'none';
let answeredCorrectly = true;

const visitedBlocks = [];

const movePlayer = (event) => {
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
    if (maze[newY][newX] === 0 && !visitedBlocks.includes(`${newX}-${newY}`)) {
        visitedBlocks.push(`${newX}-${newY}`);
        const question = questions.find(q => q.x === newX && q.y === newY);

        if (question) {
            questionCard.style.display = 'block';
            displayQuestionIntro();
            displayQuestion(question, newX, newY);
        }
    }
    if (maze[newY][newX] === 0) {
        const currentPlayerCell = mazeElement.children[playerPosition.y * maze.length + playerPosition.x];
        currentPlayerCell.classList.remove('player');
        playerPosition.x = newX;
        playerPosition.y = newY;
        drawPlayer();
    }
    if (playerPosition.x === maze[0].length - 1 && playerPosition.y === maze.length - 3) {
        const congratsMessage = document.createElement('p');
        congratsMessage.textContent = 'Congratulations! You won!';
        const audio = document.getElementById('win-audio');
        updateUserScore();
        audio.play();
        questionElement.textContent = '';
        optionsElement.innerHTML = '';
        questionElement.appendChild(congratsMessage);

        const scoreMessage = document.createElement('p');
        scoreMessage.textContent = 'Your score: ' + score;
        questionElement.appendChild(scoreMessage);

        setTimeout(() => {
        congratsMessage.style.opacity = '0';
        
            setTimeout(() => {
                document.getElementById('feedbackFormContainer').style.display = 'flex';
            }, 1000);
        }, 3000);
    }
};

let wrongAttempts = 0;
const displayQuestion = (question, newX, newY) => {
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const choice = document.createElement('p');
        choice.textContent = option;
        choice.addEventListener('click', () => {
            if (option === question.answer) {
                score++;
                const audio = document.getElementById('correct-audio');
                audio.play();
                playerPosition.x = newX;
                playerPosition.y = newY;
                drawPlayer();
                questionElement.textContent = '';
                optionsElement.innerHTML = '';
                answeredCorrectly = true;
            } else {
                resultElement.textContent = "Wrong Answer";
                choice.style.color = 'red';
                const audio = document.getElementById('wrong-audio');
                audio.play();
                setTimeout(() => {
                    resultElement.textContent = "";
                    wrongAttempts++;
                    if (wrongAttempts < 6) {
                        const randomQuestion = getRandomQuestion();
                        displayQuestion(randomQuestion, newX, newY);
                    } else {
                        gameOver();
                        const scoreMessage = document.createElement('p');
                        scoreMessage.textContent = 'Your score: ' + score;
                        questionElement.appendChild(scoreMessage);
                    }
                }, 1000);
            }
        });
        optionsElement.appendChild(choice);
        answeredCorrectly = false;
    });
};

const getRandomQuestion = () => {
    return randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
};

const gameOver = () => {
    questionElement.textContent = 'Game Over';
    optionsElement.innerHTML = '';
    document.getElementById('feedbackFormContainer').style.display = 'flex';
};

const displayQuestionIntro = () => {
    setTimeout(() => {
        const questionIntro = document.getElementById('question-intro');
        questionIntro.textContent = "Your Question is here!!";
        questionIntro.classList.add('fade-out');
    }, 1000);
};

const updateUserScore = async () => {
    const userName = localStorage.getItem("username");
    const userScore = score;
    const apiEndpoint = `http://localhost:3000/api/user_score/${userName}/${userScore}`;
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('User score updated successfully:', data);
    } catch (error) {
        console.error('Error updating user score:', error);
    }
};

window.addEventListener('keydown', movePlayer);

drawMaze();
drawPlayer();

const bgAnimation = document.getElementById('bgAnimation');
const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('colorBox');
  bgAnimation.append(colorBox)
}

document.addEventListener('keydown', function(event) {
    const audio = document.getElementById('move-audio');
    if (event.key.includes('Arrow')) {
        audio.play();
    }
});

function closeForm() {
    window.location.href = "../html/main.html";
}