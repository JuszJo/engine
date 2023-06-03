class Square {
    constructor(width, height, arrow = false, position_x = 0, position_y = 0) {
        this.width = width;
        this.height = height;
        this.position = new Vector(position_x, position_y);
        this.speed = new Vector(0, 0);
        this.acceleration = new Vector(0, 0)
        this.arrow = arrow;
        this.MovementComponent = new Movement();
        // this.allowMovement = true;
        this.allowMovement = false;
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

        // console.log(this.speed.x, this.speed.y);
        
        this.speed.limit(5, 5);

        this.position.add(this.speed);
    }

    followMouse() {
        let newPos = this.position.makeCopy();

        newPos.x = newPos.x + 50;
        newPos.y = newPos.y + 50;

        let dir = new Vector().subStatic(new Vector(mouseX, mouseY), newPos);

        // console.log(dir);

        dir.normalize()

        dir.mult(0.1)

        this.acceleration.add(dir)

        // console.log(dir);
    }

    draw() {
        drawingSurface.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();

        // this.followMouse();
        
        // this.randomMovement();

        this.applyMovement();
        
        this.acceleration.mult(0);
    }
}
