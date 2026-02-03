const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");

const sadSound = document.getElementById("sadSound");
const cheerSound = document.getElementById("cheerSound");

let yesScale = 1;
let qIndex = 0;

const questions = [
  "Are you sure? 😏",
  "Ehmie… why are you like this 😭",
  "This is emotional abuse 😂",
  "Okay now you’re just being cute 😌",
  "You know you want to 💖"
];

// Mobile-safe NO button movement
noBtn.addEventListener("click", () => {
  sadSound.currentTime = 0;
  sadSound.play();

  // Viewport width & height
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Button dimensions
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Random position inside viewport with margin
  const x = Math.random() * (vw - btnWidth - 20) + 10;
  const y = Math.random() * (vh - btnHeight - 20) + 10;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

  // Grow YES button incrementally
  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.transformOrigin = "center";

  // Change question text
  qIndex = (qIndex + 1) % questions.length;
  question.textContent = questions[qIndex];
});

// YES click
yesBtn.addEventListener("click", () => {
  cheerSound.currentTime = 0;
  cheerSound.play();
  setTimeout(() => {
    window.location.href = "yay.html";
  }, 400); // wait a moment for sound to play
});

// Floating hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 16 + "px";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 600);