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

const driverImage = new Image();
const policeImage = new Image();

driverImage.src = './images/Black_viper.png';
policeImage.src = './images/Police.png';

let player = null;
let police = null;

policeImage.onload = () => {
    police = new Police(policeImage, policeImage.width, policeImage.height, 400, 300, true, 1, 1, 1, 1, 1, 0.5);
    player = new Player(driverImage, driverImage.width, driverImage.height, 20, 20, true, 1, 1, 1, 1, 1, 0.5);

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
    police.followObject(player);

    entity.updateAllEntities();

    // police2.followObject(circle);


    // square.followObject(circle);

}

function update() {
    clearScreen();

    draw();

    requestAnimationFrame(update);
}

// update();
