const bgAnimation = document.getElementById('bgAnimation');
const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('colorBox');
  bgAnimation.append(colorBox);
}

const showSection = (sectionNumber) => {
  const sections = document.querySelectorAll('.signup-login > section');
  sections.forEach((section) => {
    section.classList.add('hidden');
    section.classList.remove('visible');
  });
  const selectedSection = document.querySelector('#section-' + sectionNumber);
  selectedSection.classList.remove('hidden');
  selectedSection.classList.add('visible');
};

const toggleAudio = () => {
  const audioIcon = document.getElementById("audioIcon");
  const audio = document.getElementById('autoplayAudio');
  if (audioIcon.classList.contains("fa-volume-high")) {
    audio.pause();
    audioIcon.classList.remove("fa-volume-high");
    audioIcon.classList.add("fa-volume-mute");
  } else {
    audioIcon.classList.remove("fa-volume-mute");
    audioIcon.classList.add("fa-volume-high");
    audio.play();
  }
};

const toggleInstructions = () => {
  const instructions = document.getElementById("instructions");
  if (instructions.style.display === "none") {
    instructions.style.display = "block";
  } else {
    instructions.style.display = "none";
  }
};

const toggleAbout = () => {
  const about = document.getElementById("about");
  if (about.style.display === "none") {
    about.style.display = "block";
  } else {
    about.style.display = "none";
  }
};

// Glitch effect
window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove('glitch');
  }, 3000);
};
