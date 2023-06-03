class Entity {
    constructor() {
        // array of all entities
        this.array = [];

        addEventListener('entity_creation', event => {
            this.array.push(event.detail);

            // event.detail.randomMovement();
            
            // console.log(this.array);
        })
        
    }
    
    updateAllEntities() {
        this.array.forEach(entity => entity.update());
        
        Collision.checkCollisions();
    }

    getAllEntities() {
        return this.array;
    }
}