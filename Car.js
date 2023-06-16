class Car extends Entity{
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

        

    }
}