class Building {
    constructor(name, backgrounds = []) {
        this.name = name;
        this.rooms = {};
        this.backgrounds = backgrounds;
    }

    addRoom(name, backgroundIndex) {
        if (backgroundIndex < 0 || backgroundIndex >= this.backgrounds.length) {
            console.error("Invalid background index for room:", name);
            return;
        }
        this.rooms[name] = new Room(name, this.backgrounds[backgroundIndex]);
    }

    getRoom(name) {
        return this.rooms[name] || null;
    }
}
