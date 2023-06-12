class Human extends Sprite {
    constructor(
        image, 
        width, height, 
        position_x = 0, position_y = 0, 
        oneCharacterSheet = true, 
        totalCharactersX, totalCharactersY, 
        totalFramesX, totalFramesY, 
        characterNumber, 
        scale = 1,
        animations
    ) {
        super(
            image, 
            width, height, 
            position_x, position_y, 
            oneCharacterSheet = true, 
            totalCharactersX, totalCharactersY, 
            totalFramesX, totalFramesY, 
            characterNumber, 
            scale,
            animations
        )

        this.allowMovement = true;
        this.arrow = false;
    }

    
    update() {
        // console.log(this.speed);

        this.draw();

        this.applyMovement();

        // this.animate();

        this.acceleration.mult(0);

        
    }
}