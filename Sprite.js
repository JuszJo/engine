class Sprite extends Entity {
    constructor(image, width, height, position_x = 0, position_y =  0, oneCharacterSheet = true, totalCharactersX, totalCharactersY, totalFramesX, totalFramesY, characterNumber, scale = 1, animations) {
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
        this.characterNumber = characterNumber || 1;

        // total number of characters in spritesheet
        this.totalCharactersX = totalCharactersX || 1;
        this.totalCharactersY = totalCharactersY || 1;

        // total frames on x and y axis
        this.totalFramesX = totalFramesX || 1;
        this.totalFramesY = totalFramesY || 1;

        // frames per character
        this.characterFramesX = totalFramesX / totalCharactersX;
        this.characterFramesY = totalFramesY / totalCharactersY;

        // dimensions for individual character frames
        this.charactersFrameWidth = this.width / totalCharactersX;
        this.charactersFrameHeight = this.height / totalCharactersY;

        this.sourceX = this.totalCharactersY == 1 ? ((this.characterNumber - 1) * this.charactersFrameWidth) : ((this.characterNumber - 1) % this.totalCharactersX) * this.charactersFrameWidth;
        this.sourceY = this.totalCharactersY == 1 || this.characterNumber <= this.totalCharactersX ? 0 : (Math.floor((this.characterNumber - 1) / this.totalCharactersX)) * this.charactersFrameHeight;

        // console.log(this.sourceX, Math.floor((this.characterNumber - 1) / this.totalCharactersX));
        // console.log(this.sourceX, this.sourceY);
        // console.log(this.sourceX, Math.floor((this.characterNumber - 1) / this.totalCharactersX));

        this.sourceWidth = this.charactersFrameWidth / this.characterFramesX;
        this.sourceHeight = this.charactersFrameHeight / this.characterFramesY;

        this.animations = animations || null;
        
        this.degrees = 0;
        this.allowMovement = false;
        this.arrow = true;
        this.event = new CustomEvent("entity_creation", {detail: this});
        dispatchEvent(this.event);
    }

    animate() {
       
    }

    draw() {
        drawingSurface.save();

        drawingSurface.translate(this.position.x, this.position.y);

        drawingSurface.rotate(this.angle);

        drawingSurface.drawImage(
            this.image,
            this.sourceX, this.sourceY,
            this.sourceWidth, this.sourceHeight,
            this.position.x, this.position.y,
            this.sourceWidth * this.scale, this.sourceHeight * this.scale,
        );

        drawingSurface.restore();
    }
}