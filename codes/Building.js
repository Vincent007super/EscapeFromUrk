class Building {
    constructor(name, backgrounds) {
        this.name = name;
        this.backgrounds = backgrounds; // Array of background images
        this.rooms = {}; // Object to hold Room instances
    }

    addRoom(room) {
        this.rooms[room.name] = room;
    }
}