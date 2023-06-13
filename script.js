const canvas = document.querySelector('canvas');
const addSquareButton = document.querySelector('#add-square');
const showPointsButton = document.querySelector('#show-points');

// define canvas dimensions
const canvasWidth = 1024;
const canvasHeight = 576;

// define drawing surface
const drawingSurface = canvas.getContext('2d');

let mouseX = null;
let mouseY = null;

addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

// const image = new Image();

// image.src = './images/bonus1_full.png';

// const sprite = new Sprite(image, 0, 0, false, 4, 2, 12, 8, 2);

const characterNumber = 8;

const humanAnimations = {
    up: {
        totalFrames: 3,
    },
    down: {
        totalFrames: 3,
    },
    left: {
        totalFrames: 3,
    },
    right: {
        totalFrames: 3,
    },
}

const driverImage = new Image();
const policeImage = new Image();
const test = new Image();

test.src = './images/bonus1_full.png'
driverImage.src = './images/Black_viper.png';
policeImage.src = './images/Police.png';

let tester = null;
let player = null;
let police = null;

policeImage.onload = () => {
    police = new Police(policeImage, policeImage.width, policeImage.height, canvasWidth, canvasHeight / 2, true, 1, 1, 1, 1, 1, 0.5);
    player = new Player(driverImage, driverImage.width, driverImage.height, 0 + driverImage.width * 0.5, canvasHeight / 2, true, 1, 1, 1, 1, 1, 0.5);
    tester = new Human(test, test.width, test.height, 0, 0, false, 4, 2, 12, 8, characterNumber, 1, humanAnimations, 2)

    // police2 = new Sprite(policeImage, 200, 100, true, 1, 1, 1, 1, 1, 0.5);

    // police3 = new Sprite(policeImage, 100, 500, true, 1, 1, 1, 1, 1, 0.5);

    update();
}

addSquareButton.addEventListener('click', Square.createSquare)

const entity = new Entity();

showPointsButton.addEventListener('click', () => police.showPoints = !police.showPoints);

// const square = new Square(100, 30);

// const circle = new Circle(10, false, 100, 100)

function clearScreen() {
    drawingSurface.clearRect(0, 0, canvasWidth, canvasHeight);
}

function draw() {
    entity.updateAllEntities();
    
    police.followObject(player);

    // police2.followObject(circle);


    // square.followObject(circle);

}

function update() {
    clearScreen();

    draw();

    requestAnimationFrame(update);
}

// update();
