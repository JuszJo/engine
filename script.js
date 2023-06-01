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

addSquareButton.addEventListener('click', Square.createSquare)

const entity = new Entity();

const square = new Square(100, 100);

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