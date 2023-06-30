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
        
        this.camera = new Camera(500, 500)
        this.allowMovement = true;
        this.maxSpeed = 5;
        this.arrow = false;
    }

    draw() {
        drawingSurface.save();

        drawingSurface.drawImage(
            this.image,
            this.sourceX, this.sourceY,
            this.sourceWidth, this.sourceHeight,
            this.position.x, this.position.y,
            this.sourceWidth * this.scale, this.sourceHeight * this.scale,
        );

        drawingSurface.restore();
    }
    
    update() {
        // console.log(this.speed);

        this.draw();

        this.camera.showCamera(this.position.x, this.position.y)

        console.log(this.speed.x, this.speed.y);
        
        this.MovementComponent.initMovement.apply(this, null)
        
        this.applyMovement();

        this.animate();

        this.acceleration.mult(0);
    }
}