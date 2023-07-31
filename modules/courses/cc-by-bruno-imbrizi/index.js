window.addEventListener("load", () => {
  main();
});

function main() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  // context.fillRect(100, 100, 400, 400);
  context.lineWidth = 4;
  context.beginPath();
  context.rect(100, 100, 400, 400);
  context.stroke();

  context.beginPath();
  context.arc(300, 300, 100, 0, Math.PI * 2);
  context.stroke();
}
