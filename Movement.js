let controls = {
    up: false,
    down: false,
    left: false,
    right: false,
}

function onKeyDown(e) {
    switch (e.key) {
        case 'ArrowUp':
            controls.up = true;    
        
            break;

        case 'ArrowDown':
            controls.down = true;
            
            break;

        case 'ArrowLeft':
            controls.left = true;
            
            break;

        case 'ArrowRight':
            controls.right = true;

            break;
    
        default:
            break;
    }
}

function onKeyUp(e) {
    switch (e.key) {
        case 'ArrowUp':
            controls.up = false;
        
            break;

        case 'ArrowDown':
            controls.down = false;
            
            break;

        case 'ArrowLeft':
            controls.left = false;
            
            break;

        case 'ArrowRight':
            controls.right = false;

            break;
    
        default:
            break;
    }
}

addEventListener('keydown', onKeyDown);

addEventListener('keyup', onKeyUp);

class Movement {
    static initMovement() {
        if(controls.right) {
            this.position_x += this.speed;
        }
    }
}