
const images = [
  "images/1.png", "images/2.png", "images/3.png", "images/4.png",
  "images/5.png", "images/6.png", "images/7.png", "images/8.png",
  "images/9.png", "images/10.png", "images/11.png", "images/12.png",
  "images/13.png", "images/14.png", "images/15.png", "images/16.png",
  "images/17.png", "images/18.png", "images/19.png", "images/20.png"
];
let index = 0;
setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 3000);
