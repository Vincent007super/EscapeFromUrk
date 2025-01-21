class Scene {
    constructor(background, canvasWidth, canvasHeight, canvas) {
        this.canvas = canvas;
        this.background = background;
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.canvas.style.backgroundImage = `url(${this.background})`;
    }

    updateCanvasSize() {
        if (this.canvas.width !== window.innerWidth) {
            this.canvas.width = window.innerWidth;
        }
        if (this.canvas.height !== window.innerHeight) {
            this.canvas.height = window.innerHeight;
        }
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
    }

    setCanvasBackground(image) {
        this.background = image;
        this.canvas.style.backgroundImage = `url(${this.background})`;
    }
}
