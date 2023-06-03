class Collision {
    static checkCollisions() {
        const entitiesToTrack = entity.getAllEntities();

        entitiesToTrack.forEach(entity => {
            this.borderCollision(entity)
        })
    }

    static borderCollision(entity) {
        if(entity.position_x < 0) {
            console.log("Left Collision");
            entity.position_x = 0;

            entity.speed *= -1
        }
        if(entity.position_x + entity.width > canvasWidth) {
            console.log("Right Collision");
            entity.position_x = canvasWidth - entity.width;

            entity.speed *= -1
        }
        if(entity.position_y < 0) {
            console.log("Top Collision");
            entity.position_y = 0;
        }
        if(entity.position_y + entity.height > canvasHeight) {
            console.log("Bottom Collision");
            entity.position_y = canvasHeight - entity.height;
        }
    }

}