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

const policeImage = new Image();

policeImage.src = './images/Police.png';

let police = null;
let police2 = null;
let police3 = null;

policeImage.onload = () => {
    police = new Sprite(policeImage, policeImage.width, policeImage.height, 400, 300, true, 1, 1, 1, 1, 1, 0.5);

    // police2 = new Sprite(policeImage, 200, 100, true, 1, 1, 1, 1, 1, 0.5);

    // police3 = new Sprite(policeImage, 100, 500, true, 1, 1, 1, 1, 1, 0.5);

    update();
}

let mouseX = null;
let mouseY = null;

addSquareButton.addEventListener('click', Square.createSquare)

addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

const entity = new Entity();

// const square = new Square(100, 30);

const circle = new Circle(10, false, 100, 100)

function clearScreen() {
    drawingSurface.clearRect(0, 0, canvasWidth, canvasHeight);
}

function draw() {
    police.followObject(circle);

    // police2.followObject(circle);

    // police3.followObject(circle);

    police.update();

    // police2.update();

    // police3.update();

    // square.followObject(circle);

    entity.updateAllEntities();
}

function update() {
    clearScreen();

    draw();

    requestAnimationFrame(update);
}

// update();
