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

    followMouse() {
        this.mouseVector.x = Math.min(Math.max(mouseX, 0), canvasWidth);
        this.mouseVector.y = Math.min(Math.max(mouseY, 0), canvasHeight);

        const newVector = new Vector().subStatic(this.mouseVector, this.position);

        newVector.normalize();

        const angleBetween = Math.atan2(newVector.y, newVector.x);
        
        this.angle = angleBetween;
        
        this.acceleration.add(newVector);
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
        // this.angle += 0.001;
        drawingSurface.save();

        // drawingSurface.translate(-canvasWidth / 2, -canvasHeight / 2);
        // drawingSurface.translate(-canvasWidth / 2 - this.width / 2, -canvasHeight / 2 - this.height / 2);

        drawingSurface.translate(this.position.x, this.position.y);
        
        drawingSurface.rotate(this.angle)
        drawingSurface.strokeRect(0, 0, 100, 0.5);

        // console.log(this.position);
        
        drawingSurface.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        // drawingSurface.fillRect(this.position.x, this.position.y, this.width, this.height);
        // drawingSurface.fillRect(0 - this.width / 2, 0 - this.height / 2, this.width, this.height);
        // drawingSurface.fillRect((canvasWidth / 2 - this.width) - (this.position.x - this.width / 2), (canvasHeight / 2 - this.height) - (this.position.y - this.height / 2), this.width, this.height);

        // drawingSurface.strokeRect(0, 0, canvasWidth, canvasHeight);


        drawingSurface.restore();
    }

    update() {
        // this.direction();
        
        this.draw();

        this.followMouse();
        
        // this.randomMovement();

        this.applyMovement();
        
        this.acceleration.mult(0);
    }
}
