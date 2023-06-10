class Sprite {
    constructor(image, position_x = 0, position_y =  0, oneCharacterSheet = true, totalCharactersX, totalCharactersY, totalFramesX, totalFramesY, characterNumber, scale = 1) {
        // sprite image
        this.image = image;

        // full sprite dimensions
        this.width = image.width;
        this.height = image.height;

        this.scale = scale;

        // sprite position on canvas
        this.position = new Vector(position_x, position_y);

        // speed
        this.speed = 5;

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
        this.angle = 0;
        this.degrees = 90;
        this.allowMovement = true;
        this.arrow = true;
        this.MovementComponent = new Movement();
    }

    connectPoints(x1, y1, x2, y2) {
        drawingSurface.beginPath();
        drawingSurface.moveTo(x2, y2);
        drawingSurface.lineTo(x1, y1);
        drawingSurface.stroke();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    followObject(entity) {    
        const newPosition = this.position.makeCopy();

        this.connectPoints(entity.position.x, entity.position.y, newPosition.x, newPosition.y);

        const newObject = entity.position.makeCopy()

        newObject.sub(newPosition);
        
        newObject.normalize();
        
        newObject.mult(2);
        
        const angleBetween = Math.atan2(newObject.y, newObject.x);

        // console.log(angleBetween);

        this.angle = angleBetween;
        
        this.applyForce(newObject);
    }

    applyMovement() {
        this.speed.add(this.acceleration);
        
        this.speed.limit(5, 5);

        this.position.add(this.speed);

        this.MovementComponent.initMovement.apply(this);
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
            -(this.width / 2) * this.scale, -this.height / 2 * this.scale,
            // -this.position.x / 2, -this.position.y / 2,
            this.sourceWidth * this.scale, this.sourceHeight * this.scale,
        );

        drawingSurface.restore();
    }

    update() {
        this.applyMovement();

        this.draw();

        this.acceleration.mult(0);

        this.speed.mult(0);

        // Movement.initMovement.apply(this, [false]);
    }
}