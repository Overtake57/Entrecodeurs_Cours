const cursor = document.querySelector('.cursor');

let mouseX = 1;
let mouseY = 1;
let cursorX = 5;
let cursorY = 5;

let speed = 0.6; // Vitesse de l'animation

function animate() {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;

    cursorX = cursorX + (distX * speed);
    cursorY = cursorY + (distY * speed);

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animate);
}


animate();

document.addEventListener('mousemove', (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
})
