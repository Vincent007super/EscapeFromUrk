// Create rooms
let room1 = new Room('Starting Room', '../media/img/port.png');
// let room2 = new Room('Church', '../media/img/church.png');

// Set up connections
// room1.connectRoom('north', room2);
// room2.connectRoom('south', room1);

// Current room logic
let currentRoom = room1;
const canvas = document.querySelector('#gameCanvas');
const scene = new Scene(currentRoom.background, window.innerWidth, window.innerHeight, canvas);

// function navigate(direction) {
//     currentRoom = currentRoom.navigateTo(direction);
//     scene.setCanvasBackground(currentRoom.background);
// }

// Example navigation
window.addEventListener('resize', ()=>{
    scene.updateCanvasSize()
});
