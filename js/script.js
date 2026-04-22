// GSAP
gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.from(".hero h1", {
  opacity: 0,
  y: 100,
  duration: 1
});

// PRODUCT ZOOM
gsap.to(".product-img", {
  scale: 1.5,
  scrollTrigger: {
    trigger: ".product",
    start: "top 80%",
    scrub: 1
  }
});


// 🌧️ RAIN EFFECT
const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

for (let i = 0; i < 200; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: Math.random() * 5 + 2
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.lineWidth = 1;

  drops.forEach(d => {
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + 10);
    ctx.stroke();

    d.y += d.speed;

    if (d.y > canvas.height) {
      d.y = 0;
    }
  });

  requestAnimationFrame(drawRain);
}

drawRain();