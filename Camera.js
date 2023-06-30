class Camera {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    showCamera(x, y) {
        drawingSurface.strokeRect(x, y, this.width, this.height)
    }
}