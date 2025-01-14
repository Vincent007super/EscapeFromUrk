class Scene {

    constructor(background, canvasWidth, canvasHeight, canvas) {
        this.canvas = canvas;
        this.background = background;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    updateCanvasSize() {
        if (this.canvasWidth != window.innerWidth) {
            this.canvasWidth = window.innerWidth;
        }
        if (this.canvasHeight != window.innerHeight) {
            this.canvasHeight = window.innerHeight;
        }
    }

    // setCanvasBackground(image, canvas) {
    //     this.background = image;
    //     canvas.style = "background-image: url(" + this.background + ")";
    // }

    // getCanvasTag() {
    //     let canvas = document.querySelector(canvas);
    //     return canvas;
    // }

}