// Setup the canvas and check for size change
// Scene.js keeps the game running correctly in the browser and keeps the measurements correctly

class Scene {
    constructor(canvasWidth, canvasHeight, canvas) {
        this.canvas = canvas;
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
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
}
