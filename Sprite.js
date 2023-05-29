class Sprite {
    constructor(image, width = image.width, height = image.height, position_x = 0, position_y =  0, oneCharacterSheet = true) {
        // sprite image
        this.image = image;
        // full sprite dimensions
        this.width = width;
        this.height = height;

        // sprite position on canvas
        this.position_x = position_x;
        this.position_y = position_y;

        this.speed = 5;
        // type of spritesheet
        this.oneCharacterSheet = oneCharacterSheet;
    }

    draw() {
        drawingSurface.drawImage(
            this.image,
            this.position_x, this.position_y
        )
    }

    update() {
        this.draw();

        Movement.initMovement.apply(this, [false]);
    }
}