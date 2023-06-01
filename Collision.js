class Collision {
    static checkCollisions() {
        const entitiesToTrack = entity.getAllEntities();

        entitiesToTrack.forEach(entity => {
            this.borderCollision(entity)
        })
    }

    static borderCollision(entity) {
        if(entity.position_x < 0) {
            console.log("Left");
        }
    }

}