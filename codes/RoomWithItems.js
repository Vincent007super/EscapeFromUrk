import Room from './Room.js';

class RoomWithItems extends Room {
    constructor(name, background, building) {
        super(name, background, building);
        this.items = [];  // This will store items in this room
    }

    addItem(item) {
        this.items.push(item);  // Add item to the room's items array
        console.log(`Item added: ${item.name} - Location: (${item.x}, ${item.y}) - Image: ${item.imagePath}`);
    }

    draw(ctx) {
        super.draw(ctx);

        // Wait for the room background to load, then draw items
        setTimeout(() => {
            this.items.forEach(item => {
                if (item.imageLoaded) {
                    ctx.drawImage(item.image, item.x - 15, item.y - 15, 30, 30);
                }
            });
        }, 100); // Delay to allow the background to finish rendering
    }

    // Check if the mouse click is inside any item
    handleClick(clickX, clickY) {
        this.items.forEach((item, index) => {
            const distance = Math.sqrt(Math.pow(clickX - item.x, 2) + Math.pow(clickY - item.y, 2));
            if (distance < 10) {
                // Item clicked, remove it from the array
                console.log(`Item picked up: ${item.name}`);
                this.items.splice(index, 1);
            }
        });
    }
    logItems() {
        console.log(`Items in ${this.name}:`);
        this.items.forEach(item => {
            console.log(`- ${item.name} at (${item.x}, ${item.y}) with image: ${item.imagePath}`);
        });
    }
}

class Item {
    constructor(name, x, y, imagePath) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.imagePath = imagePath;
        this.image = new Image();
        this.image.src = imagePath;
        this.imageLoaded = false;

        this.image.onload = () => {
            this.imageLoaded = true;
        };
    }
}

export { RoomWithItems, Item };