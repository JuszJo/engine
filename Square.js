class Square {
    constructor(width, height, arrow = false, position_x = 0, position_y = 0) {
        this.width = width;
        this.height = height;
        this.position = new Vector(canvasWidth / 2, canvasHeight / 2);
        this.speed = new Vector(0, 0);
        this.acceleration = new Vector(0, 0)
        this.arrow = arrow;
        this.MovementComponent = new Movement();
        this.angle = 0;
        // this.allowMovement = true;
        this.allowMovement = false;
        this.coord = new Vector(canvasWidth / 2, canvasHeight / 2);
        this.mouseVector = new Vector(mouseX, mouseY);
        this.event = new CustomEvent("entity_creation", {detail: this});
        dispatchEvent(this.event);
    }

    static createSquare() {
        new Square(100, 100, true, Math.floor(Math.random() * 500), Math.floor(Math.random() * 500));
    }

    randomMovement() {
        // const random_x = Math.floor(Math.random() * this.speed + 1);
        // const random_y = Math.floor(Math.random() * this.speed + 1);
        
        // this.position_x += random_x;
        // this.position_y += random_y;

        // this.position_x += this.speed;
        // this.position_y += this.speed;
        
        const random_x = Math.random() * (1 - -1) + -1;
        const random_y = Math.random() * (1 - -1) + -1;

        this.acceleration.add(new Vector(random_x, random_y));
    }

    applyMovement() {
        this.MovementComponent.initMovement.apply(this);

        this.speed.add(this.acceleration);
        
        this.speed.limit(5, 5);

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
        // console.log(object);
        
        const newPosition = this.position.makeCopy();

        this.connectPoints(entity.position.x, entity.position.y, newPosition.x, newPosition.y);

        const newObject = entity.position.makeCopy()

        newObject.sub(newPosition);
        
        newObject.normalize();
        
        newObject.mult(2);
        
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

    draw() {
        drawingSurface.save();

        drawingSurface.translate(this.position.x, this.position.y);
        
        drawingSurface.rotate(this.angle);

        // drawingSurface.strokeRect(0, 0, 100, 0.5);
        
        drawingSurface.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        
        drawingSurface.restore();
    }

    update() {
        this.followMouse();
        // this.followObject()

        this.applyMovement();
        
        this.acceleration.mult(0);

        this.speed.mult(0);

        this.draw();
        
        // this.randomMovement();
    }
}
