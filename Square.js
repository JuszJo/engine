class Square {
    constructor(width, height, arrow = false, position_x = 0, position_y = 0) {
        this.width = width;
        this.height = height;
        this.position = new Vector(position_x, position_y);
        this.speed = new Vector(0, 0);
        this.acceleration = new Vector(0, 0)
        this.arrow = arrow;
        this.MovementComponent = new Movement();
        this.event = new CustomEvent("entity_creation", {detail: this});
        dispatchEvent(this.event);
    }

    static createSquare() {
        new Square(100, 100, true, Math.floor(Math.random() * 500), Math.floor(Math.random() * 500));
    }

    randomMovement() {
        /* const random_x = Math.floor(Math.random() * this.speed + 1);
        const random_y = Math.floor(Math.random() * this.speed + 1);

        this.position_x += random_x;
        this.position_y += random_y; */

        /* this.position_x += this.speed;
        this.position_y += this.speed; */
    }

    applyMovement() {
        this.MovementComponent.initMovement.apply(this);

        this.speed.add(this.acceleration);
        
        this.speed.limit(5, 5);

        this.position.add(this.speed);
    }

    draw() {
        drawingSurface.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();

        this.applyMovement();

        this.randomMovement();
    }
}