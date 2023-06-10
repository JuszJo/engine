class Square extends Entity {
    constructor(width, height, arrow = false, position_x = 0, position_y = 0) {
        super(width, height, position_x, position_y, arrow)
        this.width = width;
        this.height = height;
        this.position = new Vector(canvasWidth / 2, canvasHeight / 2);
        this.speed = new Vector(0, 0);
        this.acceleration = new Vector(0, 0)
        this.arrow = arrow;
        this.MovementComponent = new Movement();
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

    draw() {
        drawingSurface.save();

        drawingSurface.translate(this.position.x, this.position.y);
        
        drawingSurface.rotate(this.angle);
        
        drawingSurface.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        
        drawingSurface.restore();
    }

    update() {
        // this.followMouse();
        // this.followObject()

        this.applyMovement();
        
        this.acceleration.mult(0);

        this.speed.mult(0);

        this.draw();
        
        // this.randomMovement();
    }
}
