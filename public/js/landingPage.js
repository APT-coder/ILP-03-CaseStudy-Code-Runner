setInterval(function(){
    let box = document.createElement("div");
    let type = Math.random() > 0.5 ? "forward" : "backward";
    box.classList.add(type);
    document.querySelector(".container").appendChild(box)
},100);


document.getElementById('logo').addEventListener('click', function() {
    location.reload();
});

document.getElementById('game-title').addEventListener('click', function() {
    // Blink animation
    var title = document.getElementById('game-title');
    title.style.animation = 'blink 0.25s ease-in-out 2';

   
    setTimeout(function() {
        window.location.href = '../public/index.html'; // Redirect to index.html
    }, 1000);
});

// JavaScript to display game description letter by letter
var description = document.getElementById('game-description');
var text = "A fun 8-bit maze game where you solve coding questions as you run through!";
var index = 0;

function displayText() {
    if (index < text.length) {
        description.textContent += text.charAt(index);
        index++;
        setTimeout(displayText, 50);
    }
}

displayText();