class Fondo {
    constructor(FondoColor, fadeSpeed) {
        this.FondoColor = FondoColor;
        this.fadeSpeed = fadeSpeed;
        this.opacity = 0;
        this.currentColorIndex = 0;
        this.numColors = FondoColor.length;
        this.colorsShuffled = false;
    }

    initBackground() {
        this.updateBackground();
    }

    updateBackground() {
   
        if (haySonido) {
            this.opacity = 1;
            this.colorsShuffled = false;
        } else {
         
            this.opacity = max(this.opacity - this.fadeSpeed, 0);
        }


        if (this.opacity === 0 && !this.colorsShuffled) {
            this.shuffleColors();
            this.colorsShuffled = true;
        }


        this.currentColorIndex = Math.floor(mouseY / height * this.numColors);


        if (this.currentColorIndex < 0 || this.currentColorIndex >= this.numColors) {
            this.currentColorIndex = 0; 
        }


        background(255);
        noStroke();
        fill(
            red(this.FondoColor[this.currentColorIndex]),
            green(this.FondoColor[this.currentColorIndex]),
            blue(this.FondoColor[this.currentColorIndex]),
            this.opacity * 255
        );
        rect(0, 0, width, height);
    }

    draw() {
        this.updateBackground();
    }

    shuffleColors() {

        for (let i = this.FondoColor.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.FondoColor[i], this.FondoColor[j]] = [this.FondoColor[j], this.FondoColor[i]];
        }
    }
}