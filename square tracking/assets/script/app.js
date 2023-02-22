const movingDiv = document.getElementById("ball");
const containerWidth = document.body.clientWidth - movingDiv.offsetWidth;

function moveDiv(e) {
  const axis = e.clientX;
  const divX = movingDiv.offsetLeft;
  const distX = axis - divX;
  const speed = 1000;
  const xVel = distX / containerWidth * speed;
  movingDiv.style.left = `${Math.min(Math.max(movingDiv.offsetLeft + xVel, 0), containerWidth)}px`;
}

movingDiv.addEventListener("mousemove", moveDiv);