let array = []

addEventListener('entity_creation', event => {
    // this.array.push(event.detail);
    array.push(event.detail);

    // event.detail.randomMovement();
    
    // console.log(this.array);
})

class Entity {
    constructor(width, height, position_x, position_y, arrow) {
        this.width = width;
        this.height = height;
        this.position = new Vector(position_x, position_y);
        this.speed = new Vector(0, 0);
        this.maxSpeed = 5;
        this.acceleration = new Vector(0, 0)
        this.arrow = arrow;
        this.MovementComponent = new Movement();
        this.angle = 90 * Math.PI / 180;
        this.allowMovement = false;
        // this.coord = new Vector(canvasWidth / 2, canvasHeight / 2);
        this.mouseVector = new Vector(mouseX, mouseY);
    }
    
    updateAllEntities() {
        array.forEach(entity => entity.update());
        // this.array.forEach(entity => entity.update());
        
        Collision.checkCollisions();
    }

    getAllEntities() {
        return array;
        // return this.array;
    }

    applyMovement() {
        this.MovementComponent.initMovement.apply(this);
        
        this.speed.add(this.acceleration);
        
        this.speed.limit(this.maxSpeed, this.maxSpeed);
        
        this.position.add(this.speed);
    }

    applyForce(force) {
        this.acceleration.add(force)
    }

    connectPoints(x1, y1, x2, y2) {
        drawingSurface.beginPath();
        drawingSurface.moveTo(x2, y2);
        drawingSurface.lineTo(x1, y1);
        drawingSurface.stroke();
    }

    followMouse() {
        this.mouseVector.x = Math.min(Math.max(mouseX, 0), canvasWidth);
        this.mouseVector.y = Math.min(Math.max(mouseY, 0), canvasHeight);

        drawingSurface.beginPath();
        drawingSurface.arc(this.mouseVector.x, this.mouseVector.y, 5, 0, Math.PI * 2, false);
        drawingSurface.fill();
        drawingSurface.closePath();
        
        const newPosition = this.position.makeCopy();

        this.connectPoints(this.mouseVector.x, this.mouseVector.y, newPosition.x, newPosition.y);

        this.mouseVector.sub(newPosition);
        
        this.mouseVector.normalize();
        
        this.mouseVector.mult(2);
        
        const angleBetween = Math.atan2(this.mouseVector.y, this.mouseVector.x);

        this.angle = angleBetween;
        
        this.applyForce(this.mouseVector);
    }

    followObject(entity) {
        const newPosition = this.position.makeCopy();

        this.connectPoints(entity.position.x, entity.position.y, newPosition.x, newPosition.y);

        const newObject = entity.position.makeCopy()

        newObject.sub(newPosition);
        
        newObject.normalize();
        
        newObject.mult(1);
        
        const angleBetween = Math.atan2(newObject.y, newObject.x);

        this.angle = angleBetween;
        
        this.applyForce(newObject);
    }

    // direction() {
    //     this.mouseVector.x = Math.min(Math.max(mouseX, 0), canvasWidth);
    //     this.mouseVector.y = Math.min(Math.max(mouseY, 0), canvasHeight);

    //     let newPos = this.position.makeCopy();

    //     newPos.x = newPos.x + canvasWidth / 2;
    //     newPos.y = newPos.y + canvasHeight / 2;

    //     const newVector = new Vector().subStatic(this.mouseVector, newPos);

    //     newVector.normalize();

    //     const angleBetween = Math.atan2(newVector.y, newVector.x);

    //     console.log(angleBetween * 180 / Math.PI);

    //     this.angle = angleBetween;
        
    // }
}