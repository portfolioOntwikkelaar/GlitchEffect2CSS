const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");
resize();

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);

function noise() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const buffer32 = new Uint32Array(imageData.data.buffer);
  const len = buffer32.length;
  for (let i = 0; i < len; i++) {
    buffer32[i] = ((Math.random() * 255) | 0) << 24;
  }
  ctx.putImageData(imageData, 0, 0);
}

function loop() {
  noise();
  requestAnimationFrame(loop);
}

loop();

