class Player extends Sprite {
    constructor(
        image, 
        width, height, 
        position_x = 0, position_y =  0, 
        oneCharacterSheet = true, 
        totalCharactersX, totalCharactersY, 
        totalFramesX, totalFramesY, 
        characterNumber, 
        scale = 1
    ) {
        super(
            image, 
            width, height, 
            position_x, position_y, 
            oneCharacterSheet = true, 
            totalCharactersX, totalCharactersY, 
            totalFramesX, totalFramesY, 
            characterNumber, 
            scale
        )

        this.maxSpeed = 10;
        this.allowMovement = true;

    }

    update() {
        this.applyMovement();

        this.draw();

        // console.log(this.acceleration);

        this.acceleration.mult(0);

        // this.speed.mult(0.9);
    }
}