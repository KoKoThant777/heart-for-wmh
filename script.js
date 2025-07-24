const music = document.getElementById("bg-music");
music.currentTime = 30;

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg"
];

let current = 0;
const img = document.getElementById("slide-img");

setInterval(() => {
  current = (current + 1) % images.length;
  img.src = images[current];
}, 4000);
