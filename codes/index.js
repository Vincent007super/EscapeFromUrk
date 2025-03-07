const urkBuilding = new Building("Urk Church", ["../media/img/port.png", "../media/img/back.png"]);
const houseBuilding = new Building("Urk House", ["../media/img/house1.png", "../media/img/house2.png"]);

const room1 = new Room("Entrance Hall", urkBuilding.backgrounds[0], urkBuilding);
const room2 = new Room("Main Hall", urkBuilding.backgrounds[1], urkBuilding);
const room3 = new Room("Side Chamber", "../media/img/church.jpeg", urkBuilding);
const room4 = new Room("Living Room", houseBuilding.backgrounds[0], houseBuilding);
const room5 = new Room("Bedroom", houseBuilding.backgrounds[1], houseBuilding);

room1.addExit("north", room2);
room1.addExit("east", room3);
room1.addExit("west", room4);
room2.addExit("south", room1);
room3.addExit("west", room1);
room4.addExit("east", room1);
room4.addExit("north", room5);
room5.addExit("south", room4);

urkBuilding.addRoom(room1);
urkBuilding.addRoom(room2);
urkBuilding.addRoom(room3);
houseBuilding.addRoom(room4);
houseBuilding.addRoom(room5);

let currentRoom = room1;
const canvas = document.querySelector('#gameCanvas');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
currentRoom.draw(ctx);

function generateMap() {
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

generateMap();

window.addEventListener("keydown", (event) => {
    const directions = { "ArrowUp": "north", "ArrowRight": "east", "ArrowDown": "south", "ArrowLeft": "west" };
    console.log(event.key);
    const direction = directions[event.key];
    if (direction && currentRoom.exits[direction]) {
        currentRoom = currentRoom.exits[direction];
        currentRoom.draw(ctx);
    }
    generateMap();
});

// Handle mouse movement
canvas.addEventListener("click", (event) => {
    console.log("click");
    const clickX = event.clientX;
    const clickY = event.clientY;
    const width = canvas.width;
    const height = canvas.height;
    
    if (clickY < height * 0.3 && currentRoom.exits["north"]) {
        currentRoom = currentRoom.exits["north"];
    } else if (clickY > height * 0.7 && currentRoom.exits["south"]) {
        currentRoom = currentRoom.exits["south"];
    } else if (clickX < width * 0.3 && currentRoom.exits["west"]) {
        currentRoom = currentRoom.exits["west"];
    } else if (clickX > width * 0.7 && currentRoom.exits["east"]) {
        currentRoom = currentRoom.exits["east"];
    }
    
    currentRoom.draw(ctx);
    generateMap();
});
