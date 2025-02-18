class Scene {
    constructor(background, canvasWidth, canvasHeight, canvas) {
        this.canvas = canvas;
        this.background = background;
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.canvas.style.backgroundImage = `url(${this.background})`;
    }

    updateCanvasSize() {
        console.log(this.canvas.width, window.innerWidth)
        if (this.canvas.width !== window.innerWidth) {
            this.canvas.width = window.innerWidth;
        }
        if (this.canvas.height !== window.innerHeight) {
            this.canvas.height = window.innerHeight;
        }
    }

    setCanvasBackground(image) {
        this.background = image;
        this.canvas.style.backgroundImage = `url(${this.background})`;
    }
}
