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


function connectPoints(x1, y1, x2, y2) {
    drawingSurface.beginPath();
    drawingSurface.moveTo(x2, y2);
    drawingSurface.lineTo(x1, y1);
    drawingSurface.stroke();
}

function getAngle(vec1, vec2) {
    const vec1Mag = vec1.mag();
    const vec2Mag = vec2.mag();
    
    const dotProduct = vec1.dot(vec2)
    
    const angleBetween = Math.acos((dotProduct / (vec1Mag * vec2Mag)))
    
    console.log(angleBetween);

    return angleBetween;
}

// const factor = 20;

// const vec1 = new Vector(3 * factor, -2 * factor);
// const vec2 = new Vector(1 * factor, 7 * factor);

// const vec1Mag = vec1.mag();
// const vec2Mag = vec2.mag();

// const dotProduct = vec1.dot(vec2)

// const angleBetween = Math.acos((dotProduct / (vec1Mag * vec2Mag)))

// vec1.normalize();
// vec2.normalize();

// vec1.mult(200);
// vec2.mult(200);

// console.log(angleBetween * 180 / Math.PI);
// console.log(vec1, vec2);

function plotVectors(vec1, vec2) {
    // console.log(vec1, vec2);

    vec1 = vec1.makeCopy();
    vec2 = vec2.makeCopy();

    vec1.mult(10);
    vec2.mult(10);

    drawingSurface.save()

    drawingSurface.translate(canvasWidth / 2, canvasHeight / 2);

    drawingSurface.beginPath();
    drawingSurface.moveTo(vec1.x, vec1.y);
    drawingSurface.lineTo(0, 0);
    drawingSurface.stroke();
    drawingSurface.closePath();

    drawingSurface.beginPath();
    drawingSurface.moveTo(vec2.x, vec2.y);
    drawingSurface.lineTo(0, 0);
    drawingSurface.stroke();
    drawingSurface.closePath();

    drawingSurface.restore();
}

// plotVectors(vec1, vec2)

// console.log(angleBetween * 180 / Math.PI);

// connectPoints(vec1.x, vec1.y, vec2.x, vec2.y)










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

const scale = 0.25;

policeImage.onload = () => {
    police = new Police(policeImage, policeImage.width, policeImage.height, canvasWidth / 2, canvasHeight / 2, true, 1, 1, 1, 1, 1, scale);
    player = new Player(driverImage, driverImage.width, driverImage.height, 0 + driverImage.width * 0.5, canvasHeight / 2, true, 1, 1, 1, 1, 1, scale);
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

    // police.followMouse()

    // police2.followObject(circle);


    // square.followObject(circle);

}

function update() {
    clearScreen();

    draw();

    // connectPoints(vec1.x, vec1.y, vec2.x, vec2.y)
    // plotVectors(vec1, vec2)

    requestAnimationFrame(update);
}

// update();
