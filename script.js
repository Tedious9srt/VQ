const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const no = document.getElementById("no");
const yes = document.getElementById("yes");
const view = document.getElementById("view");
const text = document.getElementById("text");
const bunny = new Image();
bunny.src = "Bunny.png";
const music = new Audio("Music.mp3");
let x = 200;
let y = 400;
let t = 0;
let frame = 0;

function Animation() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bunny, frame * 256, 0, 256, 256, 75, 0, 150, 150);
  t++;
  if (t >= 5) {
    t = 0;
    frame++;
  }
  if (frame >= 7) {
    frame = 0;
  }
  requestAnimationFrame(Animation);
}
Animation();

function Loop() {
  no.style.top = y + "px";
  no.style.left = x + "px";
  requestAnimationFrame(Loop);
}
Loop();

yes.addEventListener("click", () => {
  text.innerText = "Knew you'd say yes (:";
  yes.remove();
  no.remove();
});

no.addEventListener("click", () => {
  x = Math.random() * (250 - 50) + 50;
  y = Math.random() * (560 - 60) + 60;
});

view.addEventListener("click", () => {
  view.remove();
  music.play();
});