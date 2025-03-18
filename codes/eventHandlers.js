// Description: Event handlers for keydown, canvas click, and item click events

export function handleKeydown(event, currentRoom, ctx, generateMap) {
    const directions = { "ArrowUp": "north", "ArrowRight": "east", "ArrowDown": "south", "ArrowLeft": "west" };
    console.log(event.key);
    const direction = directions[event.key];

    if (direction && currentRoom.exits[direction]) {
        currentRoom = currentRoom.exits[direction];
        currentRoom.draw(ctx);
    }

    generateMap(currentRoom);
    return currentRoom;  // Return updated currentRoom
}

export function handleCanvasClick(event, currentRoom, ctx, generateMap, canvas) {
    console.log("click");
    const clickX = event.clientX;
    const clickY = event.clientY;
    const width = canvas.width;
    const height = canvas.height;

    if (clickY < height * 0.1 && currentRoom.exits["north"]) {
        currentRoom = currentRoom.exits["north"];
    } else if (clickY > height * 0.9 && currentRoom.exits["south"]) {
        currentRoom = currentRoom.exits["south"];
    } else if (clickX < width * 0.1 && currentRoom.exits["west"]) {
        currentRoom = currentRoom.exits["west"];
    } else if (clickX > width * 0.9 && currentRoom.exits["east"]) {
        currentRoom = currentRoom.exits["east"];
    }

    currentRoom.draw(ctx);
    generateMap(currentRoom);
    return currentRoom;  // Return updated currentRoom
}

export function handleItemClick(event, currentRoom, ctx) {
    const clickX = event.clientX;
    const clickY = event.clientY;
    try { currentRoom.handleClick(clickX, clickY); }
    catch { return };  // It somehow failed, so just return.
    currentRoom.draw(ctx);  // Redraw room after item is picked up
}
