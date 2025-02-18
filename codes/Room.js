class Room {
    constructor(name, background, items = [], connections = []) {
        this.name = name;
        this.background = background;
        this.items = items;
        this.connections = connections; // Array of { x, y, width, height, targetRoom }
    }

    addItem(item) {
        this.items.push(item);
    }

    setConnections(connections) {
        this.connections = connections;
    }

    render(context) {
        const bgImage = new Image();
        bgImage.src = this.background;
        bgImage.onload = () => {
            context.drawImage(bgImage, 0, 0, context.canvas.width, context.canvas.height);
        };

        // Draw items (assuming each item has a render method)
        this.items.forEach(item => item.render(context));
    }

    handleClick(x, y) {
        for (let conn of this.connections) {
            if (x >= conn.x && x <= conn.x + conn.width && y >= conn.y && y <= conn.y + conn.height) {
                return conn.targetRoom;
            }
        }
        return null;
    }
}