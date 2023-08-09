window.addEventListener("load", () => {
  main();
});

function main() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  context.lineWidth = 4;

  function drawSimpleRect() {
    context.fillRect(100, 100, 400, 400);
  }

  function drawRect() {
    context.beginPath();
    context.rect(100, 100, 400, 400);
    context.stroke();
  }

  function drawArc() {
    context.beginPath();
    context.arc(300, 300, 100, 0, Math.PI * 2);
    context.stroke();
  }

  function drawSquares() {
    const width = 60;
    const height = 60;
    const gap = 20;
    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = 100 + (width + gap) * i;
        y = 100 + (height + gap) * j;

        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + 8, y + 8, width - 16, height - 16);
          context.stroke();
        }
      }
    }
  }

  drawSquares();
}
