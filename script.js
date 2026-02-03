const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const container = document.querySelector(".buttons"); // Move inside this div

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

noBtn.addEventListener("click", () => {
  // Play sound
  if(sadSound) {
    sadSound.currentTime = 0;
    sadSound.play();
  }

  // 1. Get boundaries of the .buttons container
  const containerRect = container.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // 2. Calculate random position within container bounds
  // We subtract button size so it doesn't bleed over the edge
  const maxX = containerRect.width - btnWidth;
  const maxY = containerRect.height - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // 3. Move the No Button
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

  // 4. Grow YES button using the CSS Variable
  yesScale += 0.4; 
  yesBtn.style.setProperty('--s', yesScale);

  // 5. Change text
  qIndex = (qIndex + 1) % questions.length;
  question.textContent = questions[qIndex];
});

yesBtn.addEventListener("click", () => {
  if(cheerSound) {
    cheerSound.currentTime = 0;
    cheerSound.play();
  }
  setTimeout(() => {
    window.location.href = "yay.html";
  }, 400);
});

// Floating hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 16 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 600);
