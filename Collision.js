class Collision {
    static checkCollisions() {
        const entitiesToTrack = entity.getAllEntities();

        entitiesToTrack.forEach(entity => {
            // this.borderCollision(entity)
        })
    }

    static borderCollision(entity) {
        if(entity.position.x < 0) {
            console.log("Left Collision");
            entity.position.x = 0;

            entity.speed.x *= -1;

            entity.acceleration.x *= -1;
        }

        if(entity.position.x + entity.width > canvasWidth) {
            console.log("Right Collision");
            entity.position.x = canvasWidth - entity.width;
            
            entity.speed.x *= -1;

            entity.acceleration.x *= -1;
        }

        if(entity.position.y < 0) {
            console.log("Top Collision");
            entity.position.y = 0;

            entity.speed.y *= -1;

            entity.acceleration.y *= -1;
        }
        
        if(entity.position.y + entity.height > canvasHeight) {
            console.log("Bottom Collision");
            entity.position.y = canvasHeight - entity.height;
            
            entity.speed.y *= -1;

            entity.acceleration.y *= -1;
        }
    }

}