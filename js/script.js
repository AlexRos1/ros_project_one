// --- Effect 1: Background Color Changer ---
function changeColor() {
  const colors = ["#ff9999", "#99ccff", "#99ff99", "#ffcc99", "#d9b3ff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// --- Effect 2: Live Clock ---
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// --- Effect 3: Image Swap ---
let swapped = false;
function swapImage() {
  const img = document.getElementById("swapImage");
  if (swapped) {
    img.src = "./images/olymoly.jpg";
  } else {
    img.src = "./images/horse.jpg";
  }
  swapped = !swapped;
}

// --- Effect 4: Show/Hide Text ---
function toggleText() {
  const para = document.getElementById("togglePara");
  para.style.display = (para.style.display === "none") ? "block" : "none";
}

// --- Effect 5: Counter Button ---
let count = 0;
function incrementCounter() {
  count++;
  document.getElementById("counter").textContent = count;
}

// --- Header Background Image Rotator ---
const header = document.querySelector("header");

// Put your image collection here:
const headerImages = [
  "./images/tf2.jpg",
  "./images/mh.jpg",
  "./images/sv.jpg"
];

let currentIndex = 0;

function rotateHeaderImage() {
  currentIndex = (currentIndex + 1) % headerImages.length;
  header.style.backgroundImage = `
    linear-gradient(to bottom, rgba(0,0,0,0.6) 40%, #333 100%),
    url("${headerImages[currentIndex]}")
  `;
}

// Change image every 15 seconds
setInterval(rotateHeaderImage, 12000);

