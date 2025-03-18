class Building {
    constructor(name, backgrounds) {
        this.name = name;
        this.backgrounds = backgrounds; // Array of background images
        this.rooms = {}; // Object to hold Room instances
    }

    addRoom(room) {
        this.rooms[room.name] = room;
    }

    logRoomDetails() {
        console.log(`\n=== Building: ${this.name} ===`);
        for (const roomName in this.rooms) {
            const room = this.rooms[roomName];
            console.log(`\nRoom: ${room.name}`);
            console.log(`Background: ${room.background}`);
            
            console.log("Connections:");
            for (const direction in room.exits) {
                console.log(`- ${direction}: ${room.exits[direction].name}`);
            }

            console.log("Items:");
            room.items.length > 0 ? room.logItems() : console.log("No items in this room.");
        }
        console.log(`\n=== End of Building: ${this.name} ===\n`);
    }
}

export default Building;