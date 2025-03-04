// Example setup
const urkBuilding = new Building("Urk Church", ["../media/img/port.png", "../media/img/back.png"]);

const room1 = new Room("Entrance Hall", urkBuilding.backgrounds[0], urkBuilding);
const room2 = new Room("Main Hall", urkBuilding.backgrounds[1], urkBuilding);
const room3 = new Room("Side Chamber", "../media/img/church.jpeg", urkBuilding);

room1.addExit("north", room2);
room1.addExit("east", room3);
room2.addExit("south", room1); // Allow movement back
room3.addExit("west", room1); // Allow movement back

urkBuilding.addRoom(room1);
urkBuilding.addRoom(room2);
urkBuilding.addRoom(room3);

// Example game state
let currentRoom = room1;
const canvas = document.querySelector('#gameCanvas');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

currentRoom.draw(ctx);

// Handle movement
window.addEventListener("keydown", (event) => {
    const directions = { "ArrowUp": "north", "ArrowRight": "east", "ArrowDown": "south", "ArrowLeft": "west" };
    console.log(event.key);
    const direction = directions[event.key];
    
    if (direction && currentRoom.exits[direction]) {
        currentRoom = currentRoom.exits[direction];
        currentRoom.draw(ctx);
    }
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
});
