import Building from "./Building.js";
import Room from "./Room.js";
import Scene from "./Scene.js";
import { RoomWithItems, Item } from "./RoomWithItems.js";
import generateMap  from "./generateMap.js";
import { handleKeydown, handleCanvasClick, handleItemClick } from "./eventHandlers.js";  // Import your event handlers

// Get your canvas and initialize the Scene
const canvas = document.querySelector('#gameCanvas');
const gameScene = new Scene(canvas);  // Scene handles the canvas resizing
const ctx = gameScene.ctx;

let currentRoom = room1;
currentRoom.draw(ctx);
generateMap(currentRoom);

generateMap(currentRoom);

window.addEventListener("keydown", (event) => {
    currentRoom = handleKeydown(event, currentRoom, ctx, generateMap);  // Update currentRoom if needed
});

canvas.addEventListener("click", (event) => {
    currentRoom = handleCanvasClick(event, currentRoom, ctx, generateMap, canvas);  // Update currentRoom if needed
});

canvas.addEventListener("click", (event) => {
    handleItemClick(event, currentRoom, ctx, canvas);  // Handle item interactions
});

// Chapter 1 --------------------------------------------

// Create buildings

// Create rooms

// Create items

