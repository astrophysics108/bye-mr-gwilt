const sky = document.getElementById("sky");
const ctx = sky.getContext("2d");
const stars = [];
const maxstars = 50;

function resizeCanvas() {
    sky.width = window.innerWidth;
    sky.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

function spawn() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedY: Math.random(),
      opacity: Math.random(),
      trail: [],
    };
  }

  for (let i = 0; i < maxstars; i++) {
    stars.push(spawn());
}

  function draw() {
    ctx.fillStyle = "rgba(30, 20, 54, 0.2)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  
    ctx.fillStyle = "rgba(255, 191, 0, 1)";
    ctx.font = "5vh monospace";
  
    for (const star of stars) {
      star.trail.push({ x: star.x, y: star.y });
      if (star.trail.length > 10) star.trail.shift();
  
      for (let i = 1; i < star.trail.length; i+= 5) {
        const t = star.trail[i];
        ctx.fillStyle = `rgba(255, 191, 0, ${(i + 1) / star.trail.length * star.opacity})`;
        ctx.fillText("*", t.x, t.y);
      }
  
      star.y += star.speedY;
      if (star.y > window.innerHeight) {
        Object.assign(star, spawn(), { y: 0 });
      }
    }
  
    requestAnimationFrame(draw);
  }


draw();