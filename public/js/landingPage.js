setInterval(() => {
    let box = document.createElement("div");
    let type = Math.random() > 0.5 ? "forward" : "backward";
    box.classList.add(type);
    document.querySelector(".container").appendChild(box);
}, 100);

document.getElementById('logo').addEventListener('click', () => {
    location.reload();
});

document.getElementById('game-title').addEventListener('click', () => {
    const title = document.getElementById('game-title');
    title.style.animation = 'blink 0.25s ease-in-out 2';

    setTimeout(() => {
        window.location.href = '../public/index.html';
    }, 1000);
});

const description = document.getElementById('game-description');
const text = "A fun 8-bit maze game where you solve coding questions as you run through!";
let index = 0;

const displayText = () => {
    if (index < text.length) {
        description.textContent += text.charAt(index);
        index++;
        setTimeout(displayText, 50);
    }
};

displayText();
