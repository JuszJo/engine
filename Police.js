class Police extends Sprite {
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

        this.maxSpeed = 7;
    }
    
    update() {
        this.applyMovement();

        this.draw();

        // console.log(this.speed);

        this.acceleration.mult(0);

        this.speed.mult(0.9);
    }
}