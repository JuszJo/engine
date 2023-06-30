class Camera {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    showCamera(x, y, playerWidth, playerHeight) {
        const playerOffset = {
            x: playerWidth / 2 + x,
            y: playerHeight / 2 + y,
        }

        console.log(playerOffset);

        // drawingSurface.strokeRect(playerOffset.x, playerOffset.y, this.width, this.height)
        drawingSurface.strokeRect(playerOffset.x - this.width / 2, playerOffset.y - this.height / 2 , this.width, this.height)
    }
}