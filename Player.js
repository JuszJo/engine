class Player extends Sprite {
    constructor(
        image, 
        width, height, 
        position_x = 0, position_y = 0, 
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

        this.degrees = 90;
        this.maxSpeed = 10;
        this.allowMovement = true;
    }

    boundingBox() {
        drawingSurface.strokeRect(this.position.x - this.height * this.scale / 2, this.position.y - this.width * this.scale / 2, this.height * this.scale, this.width * this.scale);
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
        
        // this.boundingBox();
    }

    update() {
        this.applyMovement();
        
        this.draw();
        
        this.acceleration.mult(0);
        
        this.speed.mult(0.9);
    }
}