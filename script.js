const canvas = document.querySelector('canvas');

// define canvas dimensions
const canvasWidth = 1024;
const canvasHeight = 576;

// define drawing surface
const drawingSurface = canvas.getContext('2d');

const image = new Image();

image.src = './images/bonus1_full.png';

const sprite = new Sprite(image);

// const square = new Square(100, 100);

function clearScreen() {
    drawingSurface.clearRect(0, 0, canvasWidth, canvasHeight);
}

function draw() {
    sprite.update();

    // square.update();
}

function update() {
    clearScreen();

    draw();

    requestAnimationFrame(update);
}

update();