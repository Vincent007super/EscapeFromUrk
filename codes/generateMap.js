const GenerateMap = (currentRoom) => {
    let oldCanvas = document.getElementById("mapCanvas");
    if (oldCanvas) oldCanvas.remove(); // Remove previous map

    const mapCanvas = document.createElement("canvas");
    mapCanvas.id = "mapCanvas";
    mapCanvas.width = 300;
    mapCanvas.height = 300;
    mapCanvas.style.position = "fixed";
    mapCanvas.style.zIndex = 100;
    mapCanvas.style.right = "10px";
    mapCanvas.style.top = "10px";
    
    const mapCtx = mapCanvas.getContext("2d");
    document.body.appendChild(mapCanvas);

    let positions = new Map();
    let queue = [{ room: currentRoom, x: 150, y: 150 }];
    let visited = new Set();
    let offsets = { north: [0, -40], south: [0, 40], east: [40, 0], west: [-40, 0] };

    while (queue.length) {
        let { room, x, y } = queue.shift();
        if (visited.has(room)) continue;
        visited.add(room);
        positions.set(room, { x, y });

        for (let direction in room.exits) {
            let nextRoom = room.exits[direction];
            if (!visited.has(nextRoom)) {
                let [dx, dy] = offsets[direction];
                queue.push({ room: nextRoom, x: x + dx, y: y + dy });
            }
        }
    }

    for (let [room, { x, y }] of positions) {
        for (let direction in room.exits) {
            let nextRoom = room.exits[direction];
            if (positions.has(nextRoom)) {
                let { x: nx, y: ny } = positions.get(nextRoom);
                mapCtx.strokeStyle = "white";
                mapCtx.beginPath();
                mapCtx.moveTo(x, y);
                mapCtx.lineTo(nx, ny);
                mapCtx.stroke();
            }
        }
    }

    for (let [room, { x, y }] of positions) {
        mapCtx.fillStyle = room === currentRoom ? "red" : "white";
        mapCtx.beginPath();
        mapCtx.arc(x, y, room === currentRoom ? 10 : 5, 0, Math.PI * 2);
        mapCtx.fill();
    }
}

export default GenerateMap;