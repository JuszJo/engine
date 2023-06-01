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
        }
        if(entity.position_x + entity.width > canvasWidth) {
            console.log("Right Collision");
            
            entity.position_x = canvasWidth - entity.width;
        }
    }

}