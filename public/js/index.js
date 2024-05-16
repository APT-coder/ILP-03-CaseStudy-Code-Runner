const bgAnimation = document.getElementById('bgAnimation');
const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('colorBox');
  bgAnimation.append(colorBox)
}



function showSection(sectionNumber) {
  var sections = document.querySelectorAll('.signup-login > section');
  sections.forEach(function (section) {
    section.classList.add('hidden');
    section.classList.remove('visible');
  });
  var selectedSection = document.querySelector('#section-' + sectionNumber);
  selectedSection.classList.remove('hidden');
  selectedSection.classList.add('visible');

}


function toggleAudio() {
  var audioIcon = document.getElementById("audioIcon");
  var audio = document.getElementById('autoplayAudio');
  if (audioIcon.classList.contains("fa-volume-high")) {
    audio.pause();

    audioIcon.classList.remove("fa-volume-high");
    audioIcon.classList.add("fa-volume-mute");
  } else {
    audioIcon.classList.remove("fa-volume-mute");
    audioIcon.classList.add("fa-volume-high");
    audio.play();

  }
}





function toggleInstructions() {
  var instructions = document.getElementById("instructions");
  if (instructions.style.display === "none") {
    instructions.style.display = "block";
  } else {
    instructions.style.display = "none";
  }
}

function toggleAbout() {
  var about = document.getElementById("about");
  if (about.style.display === "none") {
    about.style.display = "block";
  } else {
    about.style.display = "none";
  }
}

//glitch
window.onload = function() {
  setTimeout(function() {
    document.body.classList.remove('glitch');
  }, 3000); 
};
