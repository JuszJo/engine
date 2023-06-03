let controls = {
    up: false,
    down: false,
    left: false,
    right: false,
}

let controlsWASD = {
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

        case 'w':
            controlsWASD.up = true;    
        
            break;

        case 's':
            controlsWASD.down = true;
            
            break;

        case 'a':
            controlsWASD.left = true;
            
            break;

        case 'd':
            controlsWASD.right = true;

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

        case 'w':
            controlsWASD.up = false;
        
            break;

        case 's':
            controlsWASD.down = false;
            
            break;

        case 'a':
            controlsWASD.left = false;
            
            break;

        case 'd':
            controlsWASD.right = false;

            break;
    
        default:
            break;
    }
}

addEventListener('keydown', onKeyDown);

addEventListener('keyup', onKeyUp);

class Movement {
    initMovement() {
        switch (this.arrow) {
            case true:
                /* if(controls.up) {
                    this.position_y -= this.speed;
                }
                if(controls.down) {
                    this.position_y += this.speed;
                }
                if(controls.left) {
                    this.position_x -= this.speed;
                }
                if(controls.right) {
                    this.position_x += this.speed;
                } */

                break;

            case false:
                if(controlsWASD.up) this.acceleration.y = -0.5;
                else if(controlsWASD.down) this.acceleration.y = 0.5;
                else this.acceleration.y = 0
                
                if(controlsWASD.left) this.acceleration.x = -0.5;
                else if(controlsWASD.right) this.acceleration.x = 0.5;
                else this.acceleration.x = 0
                
                break;
        
            default:
                break;
        }
        
    }
}