class Player extends Car {
    constructor(
        image, 
        width, height, 
        position_x = 0, position_y = 0, 
        oneCharacterSheet = true, 
        totalCharactersX, totalCharactersY, 
        totalFramesX, totalFramesY, 
        characterNumber, 
        scale = 1
    ) {
        super(
            image, 
            width, height, 
            position_x, position_y, 
            oneCharacterSheet = true, 
            totalCharactersX, totalCharactersY, 
            totalFramesX, totalFramesY, 
            characterNumber, 
            scale
        )

        this.degrees = 0;
        this.maxSpeed = 7;
        this.maxAcc = 0;
        // this.allowMovement = true;
    }

    allowControls() {
        if(controls.up) this.acceleration.add(new Vector(Math.sin(this.angle), -Math.cos(this.angle)));
        if(controls.down) this.acceleration.add(new Vector(-Math.sin(this.angle), Math.cos(this.angle)));
        // else {this.acceleration.mult(0)}

        if(controls.left) this.angle -= 0.04
        if(controls.right) this.angle += 0.04

        // if(controls.up) this.acceleration.add(new Vector(-0.1, -0.1));
        // if(controls.down) this.acceleration.add(new Vector(0.1, 0.1));
        // if(controls.left) this.angle -= 0.04;
        // if(controls.right) this.angle += 0.04;
        // if(controls.up) this.acceleration.add(new Vector(0.3, 0.3));
        // if(controls.down) this.acceleration.add(new Vector(-0.3, -0.3));
        // if(controls.left) this.angle -= 0.04;
        // if(controls.right) this.angle += 0.04;

        // const x_projection = Math.sin(this.angle);
        // const y_projection = Math.cos(this.angle);

        // this.acceleration.x *= x_projection;
        // this.acceleration.y *= -y_projection;

        // console.log(x_projection, y_projection);

        // if(controls.up) this.maxAcc < this.maxSpeed ? this.maxAcc += 0.01 : this.maxAcc = this.maxSpeed;
        // if(controls.down) Math.abs(this.maxAcc) < this.maxSpeed ? this.maxAcc -= 0.01 : this.maxAcc = -this.maxSpeed;;
        // if(!(controls.up && controls.down)) this.maxAcc
        // if(controls.left) this.angle -= 0.04;
        // if(controls.right) this.angle += 0.04;

        // const vec1 = new Vector(Math.sin(this.angle) * this.maxAcc, -Math.cos(this.angle) * this.maxAcc);
        // const vec2 = new Vector(-Math.sin(this.angle) * this.maxAcc, Math.cos(this.angle) * this.maxAcc);

        // console.log(this.maxAcc);

        // this.acceleration.add(new Vector(Math.sin(this.angle) * this.maxAcc, -Math.cos(this.angle) * this.maxAcc));
        // this.acceleration.add(new Vector(-Math.sin(this.angle) * this.maxAcc, Math.cos(this.angle) * this.maxAcc));

        // console.log(this.acceleration, Math.sin(this.angle) * this.maxAcc);
        

        // if(controls.up) this.acceleration.add(new Vector(Math.sin(this.angle), -Math.cos(this.angle)));
        // if(controls.down) this.acceleration.add(new Vector(-Math.sin(this.angle), Math.cos(this.angle)));
        // if(controls.left) this.angle -= 0.04;
        // if(controls.right) this.angle += 0.04;

        
        // const x = this.acceleration.x * Math.sin(this.angle);
        // const y = this.acceleration.y * -Math.cos(this.angle);
        
        // console.log(Math.sin(this.angle), -Math.cos(this.angle))
        // console.log(x, y)
        // console.log(Math.sin(this.angle), this.acceleration.x)

        // else if(controls.down) this.acceleration.add(new Vector(-Math.sin(this.angle), Math.cos(this.angle)));
    }

    boundingBox() {
        drawingSurface.strokeRect(this.position.x - this.height * this.scale / 2, this.position.y - this.width * this.scale / 2, this.height * this.scale, this.width * this.scale);
    }

    update() {
        this.allowControls();

        this.applyMovement();
        
        this.draw();
        
        this.acceleration.mult(0);
        
        // this.speed.mult(0.9);
    }

    // draw() {
    //     drawingSurface.save();

    //     drawingSurface.translate(this.position.x, this.position.y);

    //     const angleOffset = this.degrees * Math.PI / 180

    //     drawingSurface.rotate(this.angle + angleOffset);

    //     drawingSurface.drawImage(
    //         this.image,
    //         this.sourceX, this.sourceY,
    //         this.sourceWidth, this.sourceHeight,
    //         (-this.width / 2) * this.scale, (-this.height / 2) * this.scale,
    //         this.width * this.scale, this.height * this.scale,
    //     );

    //     drawingSurface.restore();
        
    //     // this.boundingBox();
    // }

    // update() {
    //     this.applyMovement();
        
    //     this.draw();
        
    //     this.acceleration.mult(0);
        
    //     // this.speed.mult(0.9);
    // }
}