class Entity {
    constructor() {
        this.array = []
        addEventListener('entity_creation', event => {
            this.array.push(event.detail)
            console.log(this.array);
        })
    }
}