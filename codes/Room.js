class Room {
    constructor(name, background, building) {
        this.name = name;
        this.background = background;
        this.building = building;
        this.items = [];
        this.exits = {}; // Stores possible directions ("left", "right", etc.)
    }

    addExit(direction, room) {
        this.exits[direction] = room;
    }

    draw(ctx) {
        let img = new Image();
        img.src = this.background;
        img.onload = () => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
        };
    }
}
