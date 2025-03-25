// index.js

import Building from "./Building.js";
import Room from "./Room.js";
import { RoomWithItems, Item } from "./RoomWithItems.js";
import generateMap from "./generateMap.js";
import { handleKeydown, handleCanvasClick, handleItemClick } from "./eventHandlers.js";

// Get your canvas and initialize the Scene
const canvas = document.querySelector('#gameCanvas');
const gameScene = new Scene(canvas);  // Scene handles the canvas resizing
const ctx = gameScene.ctx;

// Eerste Kamer: Port (Start)
const port = new Room("Port", "media/styles/images/haven.avif", null); // Voeg het juiste pad naar de afbeelding toe
const street = new Room("Street", "media/styles/images/straat.avif", null);
const churchOfWestfall = new Room("Church of Westfall", "media/styles/images/kerk.jpg", null);

// Voeg uitgangen toe aan de kamers
port.addExit("west", null);  // Geen exit naar het westen (op dit moment geen verbinding)
port.addExit("north", street);  // Port naar Street

street.addExit("west", null);  // Guard 1 House, niet gedetailleerd hier
street.addExit("north", churchOfWestfall);  // Street naar Church of Westfall

churchOfWestfall.addExit("south", street);  // Church of Westfall naar Street
churchOfWestfall.addExit("east", null);  // Pijpen achter het orgel
churchOfWestfall.addExit("west", null);  // Clocktower naar westen
churchOfWestfall.addExit("north", null);  // Confession Booth

// Stel de startlocatie in
let currentRoom = port;
currentRoom.draw(ctx);
generateMap(currentRoom);

// Event listeners voor navigatie
window.addEventListener("keydown", (event) => {
    currentRoom = handleKeydown(event, currentRoom, ctx, generateMap);  // Update currentRoom if needed
});

canvas.addEventListener("click", (event) => {
    currentRoom = handleCanvasClick(event, currentRoom, ctx, generateMap, canvas);  // Update currentRoom if needed
});

canvas.addEventListener("click", (event) => {
    handleItemClick(event, currentRoom, ctx, canvas);  // Handle item interactions
});
