class Square {
    constructor(width, height, position_x = 0, position_y = 0) {
        this.width = width;
        this.height = height;
        this.position_x = position_x;
        this.position_y = position_y;
        this.speed = 5;
        this.arrow = false;
        this.MovementComponent = new Movement();
    }

    applyMovement() {
        this.MovementComponent.initMovement.apply(this)
    }

    draw() {
        drawingSurface.fillRect(this.position_x, this.position_y, this.width, this.height);
    }

    update() {
        this.draw();

        this.applyMovement();
    }
}