class Sprite extends Entity {
    constructor(image, width, height, position_x = 0, position_y =  0, oneCharacterSheet = true, totalCharactersX, totalCharactersY, totalFramesX, totalFramesY, characterNumber, scale = 1) {
        super(width, height, position_x, position_y, true)
        // sprite image
        this.image = image;

        // full sprite dimensions
        this.width = width;
        this.height = height;

        this.scale = scale;

        // // sprite position on canvas
        // this.position = new Vector(position_x, position_y);

        // speed
        // this.maxSpeed = 50;

        // type of spritesheet
        this.oneCharacterSheet = oneCharacterSheet;
        
        // character of choice
        this.characterNumber = characterNumber | 1;

        // total number of characters in spritesheet
        this.totalCharactersX = totalCharactersX | 1;
        this.totalCharactersY = totalCharactersY | 1;

        // total frames on x and y axis
        this.totalFramesX = totalFramesX | 1;
        this.totalFramesY = totalFramesY | 1;

        // frames per character
        this.characterFramesX = totalFramesX / totalCharactersX;
        this.characterFramesY = totalFramesY / totalCharactersY;

        // dimensions for individual character frames
        this.charactersFrameWidth = this.width / totalCharactersX;
        this.charactersFrameHeight = this.height / totalCharactersY;

        this.sourceX = (characterNumber - 1) * this.charactersFrameWidth;
        this.sourceY = 0;

        this.sourceWidth = this.charactersFrameWidth / this.characterFramesX;
        this.sourceHeight = this.charactersFrameHeight / this.characterFramesY;
        
        this.speed = new Vector(0, 0);
        this.acceleration = new Vector(0, 0)
        this.degrees = 90;
        this.allowMovement = false;
        this.arrow = true;
        this.MovementComponent = new Movement();
        this.event = new CustomEvent("entity_creation", {detail: this});
        dispatchEvent(this.event);
    }

    draw() {
        drawingSurface.save();

        drawingSurface.translate(this.position.x, this.position.y);

        const angleOffset = this.degrees * Math.PI / 180

        drawingSurface.rotate(this.angle + angleOffset);

        drawingSurface.drawImage(
            this.image,
            this.sourceX, this.sourceY,
            this.sourceWidth, this.sourceHeight,
            (-this.width / 2) * this.scale, (-this.height / 2) * this.scale,
            this.width * this.scale, this.height * this.scale,
        );

        drawingSurface.restore();
    }

    // update() {
    //     this.applyMovement();

    //     this.draw();

    //     console.log(this.speed);

    //     this.acceleration.mult(0);

    //     this.speed.mult(0.9);
    // }
}