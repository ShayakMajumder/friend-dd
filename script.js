// No button runaway effect
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Falling hearts animation
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  // Random horizontal position
  heart.style.left = Math.random() * window.innerWidth + "px";

  // Random animation duration
  const duration = Math.random() * 3 + 2; // between 2–5 seconds
  heart.style.animationDuration = duration + "s";

  heartsContainer.appendChild(heart);

  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Generate hearts continuously
setInterval(createHeart, 500);
