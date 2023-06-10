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
        if(this.allowMovement) {
            switch (this.arrow) {
                case true:
                    // console.log(this.acceleration);
                    if(controls.up) this.acceleration.y = -0.5;
                    else if(controls.down) this.acceleration.y = 0.5;
                    else this.acceleration.y = 0
                    
                    if(controls.left) this.acceleration.x = -0.5;
                    else if(controls.right) this.acceleration.x = 0.5;
                    else this.acceleration.x = 0
    
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
}