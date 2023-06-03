const canvas = document.querySelector('canvas');
const addSquareButton = document.querySelector('button');

// define canvas dimensions
const canvasWidth = 1024;
const canvasHeight = 576;

// define drawing surface
const drawingSurface = canvas.getContext('2d');

// const image = new Image();

// image.src = './images/bonus1_full.png';

// const sprite = new Sprite(image, 0, 0, false, 4, 2, 12, 8, 2);

let mouseX = null;
let mouseY = null;

addSquareButton.addEventListener('click', Square.createSquare)

addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

const entity = new Entity();

const square = new Square(100, 30);

function clearScreen() {
    drawingSurface.clearRect(0, 0, canvasWidth, canvasHeight);
}

function draw() {
    entity.updateAllEntities();
}

function update() {
    clearScreen();

    draw();

    requestAnimationFrame(update);
}

update();