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
        animations,
        startingFrame
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
            animations,
            startingFrame
        )

        this.allowMovement = true;
        this.maxSpeed = 3;
        this.arrow = false;
    }
    
    update() {
        // console.log(this.speed);

        this.draw();

        this.MovementComponent.initMovement.apply(this, null)

        this.applyMovement();

        this.animate();

        this.acceleration.mult(0);
    }
}