class Room {
    constructor(name, background) {
        this.name = name;
        this.background = background;
        this.items = [];
        this.connectedRooms = {}; // E.g., { north: anotherRoom, south: anotherRoom }
    }

    setBackground(image) {
        this.background = image;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    connectRoom(direction, room) {
        this.connectedRooms[direction] = room;
    }

    navigateTo(direction) {
        if (this.connectedRooms[direction]) {
            return this.connectedRooms[direction];
        } else {
            console.log(`You cannot go ${direction} from here.`);
            return this;
        }
    }
}

