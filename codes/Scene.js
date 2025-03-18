class Scene {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        // Initialize the canvas size correctly
        this.updateCanvasSize();

        // Automatically resize canvas when the window resizes
        window.addEventListener("resize", () => this.updateCanvasSize());
    }

    updateCanvasSize() {
        // Set canvas size to match the window's inner width and height
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        console.log(`Canvas resized to: ${this.canvas.width} x ${this.canvas.height}`);
    }

    clear() {
        // Clear the entire canvas (useful before redrawing)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default Scene;
