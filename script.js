const canvas = document.querySelector('canvas');

// define canvas dimensions
const canvasWidth = 1024;
const canvasHeight = 576;

// define drawing surface
const drawingSurface = canvas.getContext('2d');

const image = new Image();

image.src = './images/bonus1_full.png';

const sprite = new Sprite(image);

function clearScreen() {
    drawingSurface.clearRect(0, 0, canvasWidth, canvasHeight);
}

function draw() {
    sprite.draw();
}

function update() {
    clearScreen();

    draw();

    requestAnimationFrame(update);
}

update();