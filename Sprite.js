class Sprite {
    constructor(image, width = image.width, height = image.height, oneCharacterSheet = true) {
        // sprite image
        this.image = image;
        // full sprite dimensions
        this.width = width;
        this.height = height;
        // type of spritesheet
        this.oneCharacterSheet = oneCharacterSheet;
    }

    draw() {
        drawingSurface.drawImage(
            this.image,
            0,
            0
        )
    }
}