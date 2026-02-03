const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
// Make sure your card has this ID in the HTML
const card = document.querySelector(".card"); 

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
  sadSound.currentTime = 0;
  sadSound.play();

  // 1. Get Card dimensions
  const rect = card.getBoundingClientRect();
  
  // 2. Calculate max positions (Card width - Button width)
  const maxX = rect.width - noBtn.offsetWidth;
  const maxY = rect.height - noBtn.offsetHeight;

  // 3. Generate random coordinates within the card
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  // 4. Apply styles
  // Ensure the .card in CSS has 'position: relative'
  noBtn.style.position = "absolute"; 
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

  // 5. Grow YES button
  yesScale += 0.3; // Increased growth rate slightly
  yesBtn.style.transform = `scale(${yesScale})`;
  // Important: ensures the Yes button grows from its center
  yesBtn.style.transformOrigin = "center"; 

  // 6. Update text
  qIndex = (qIndex + 1) % questions.length;
  question.textContent = questions[qIndex];
});

yesBtn.addEventListener("click", () => {
  cheerSound.currentTime = 0;
  cheerSound.play();
  setTimeout(() => {
    window.location.href = "yay.html";
  }, 400);
});

// Floating hearts (optimized)
setInterval(() => {
  const heart = document.createElement("span");
  heart.className = "floating-heart"; // Better to use a class for styling
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.position = "fixed";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 10 + 16 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 600);
