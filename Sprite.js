class Sprite {
    constructor(image, position_x = 0, position_y =  0, oneCharacterSheet = true, totalCharactersX, totalCharactersY, totalFramesX, totalFramesY, characterNumber) {
        // sprite image
        this.image = image;

        // full sprite dimensions
        this.width = image.width;
        this.height = image.height;

        // sprite position on canvas
        this.position_x = position_x;
        this.position_y = position_y;

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
    }

    draw() {
        drawingSurface.drawImage(
            this.image,
            this.sourceX, this.sourceY,
            this.sourceWidth, this.sourceHeight,
            this.position_x, this.position_y,
            this.sourceWidth, this.sourceHeight,
        )
    }

    update() {
        this.draw();

        Movement.initMovement.apply(this, [false]);
    }
}