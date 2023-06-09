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
        this.maxSpeed = 0;
        this.acceleration = new Vector(0, 0)
        this.arrow = arrow;
        this.MovementComponent = new Movement();
        this.camera = new Camera(0, 0)
        this.angle = 0;
        this.allowMovement = false;
        this.showPoints = true;
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
        // this.MovementComponent.initMovement.apply(this);

        this.speed.add(this.acceleration);

        // console.log(this, this.speed);
        
        // this.speed.limit(this.maxSpeed, this.maxSpeed);
        this.speed.limit(this.maxSpeed);

        // console.log(this.speed);

        // this.speed.x = Math.floor(this.speed.x);
        // this.speed.y = Math.floor(this.speed.y);

        // console.log(this.speed);
        
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

        const desired = new Vector().subStatic(this.mouseVector, this.position);

        desired.setMag(this.maxSpeed);

        const steering = new Vector().subStatic(desired, this.speed);
        
        // steering.limit(0.3, 0.3);
        steering.limit(0.3);

        const angleBetween = Math.atan2(desired.y, desired.x);
    
        this.angle = angleBetween;

        this.applyForce(steering);

        // this.mouseVector.sub(newPosition);
        
        // this.mouseVector.normalize();
        
        // this.mouseVector.mult(2);
        
        // const angleBetween = Math.atan2(this.mouseVector.y, this.mouseVector.x);

        // this.angle = angleBetween;
        
        // this.applyForce(this.mouseVector);
    }

    followObject(entity) {
        plotVectors(this.speed, entity.speed);

        const newPosition = this.position.makeCopy();

        // const fakeObject = entity.position.makeCopy();

        // fakeObject.x = entity.position.x - (entity.width * entity.scale) / 2;

        // console.log(entity.position.x, entity.position.y);

        // this.showPoints && this.connectPoints(entity.position.x - (entity.width * entity.scale) / 2, entity.position.y, newPosition.x, newPosition.y);
        // this.showPoints && this.connectPoints(fakeObject.x, entity.position.y, newPosition.x, newPosition.y);
        this.showPoints && this.connectPoints(entity.position.x, entity.position.y, newPosition.x, newPosition.y);

        // const entityVelocity = entity.velocity.makeCopy();

        // entityVelocity

        // const newObject = entity.position.makeCopy();

        const desired = new Vector().subStatic(entity.position, this.position);

        desired.setMag(this.maxSpeed)
        
        // console.log(this)

        const steering = new Vector().subStatic(desired, this.speed);

        // console.log(steering);

        // const angleBetween = getAngle(this.position, entity.position);

        // console.log(angleBetween * 180 / Math.PI);
        
        // steering.limit(0.2, 0.2);
        steering.limit(0.2);

        const angleBetween = Math.atan2(desired.y, desired.x);
        
        // const check = Math.atan2(steering.y, steering.x);
        
        // console.log(check);

        // console.log(this.speed);

        this.angle = angleBetween;
        
        // this.angle = check;

        this.applyForce(steering);
        
        // this.position.getAngle(entity.position);

        // this.angle = angleBetween;

        // this.applyForce(desired)





        // const newObject = entity.position.makeCopy();

        // newObject.sub(newPosition);
        
        // newObject.normalize();
        
        // newObject.mult(1);
        
        // const angleBetween = Math.atan2(newObject.y, newObject.x);

        // this.angle = angleBetween;
        
        // this.applyForce(newObject);
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