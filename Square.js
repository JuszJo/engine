class Square {
    constructor(width, height, arrow = false, position_x = 0, position_y = 0) {
        this.event = new CustomEvent("entity_creation", {detail: this});
        dispatchEvent(this.event);
        this.width = width;
        this.height = height;
        this.position_x = position_x;
        this.position_y = position_y;
        this.speed = 5;
        this.arrow = arrow;
        this.MovementComponent = new Movement();
        this.CollisionComponent = new Collision();
    }

    static createSquare() {
        new Square(100, 100, true, Math.floor(Math.random() * 500), Math.floor(Math.random() * 500));
    }

    applyMovement() {;
        this.MovementComponent.initMovement.apply(this)
    }

    checkCollision() {

    }

    draw() {
        drawingSurface.fillRect(this.position_x, this.position_y, this.width, this.height);
    }

    update() {
        this.draw();

        this.applyMovement();
    }
}