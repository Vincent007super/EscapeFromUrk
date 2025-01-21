let canvas = document.querySelector('#gameCanvas');
let scene = new Scene('../media/img/back.png', window.innerWidth, window.innerHeight, canvas);

scene.updateCanvasSize();
scene.setCanvasBackground('../media/img/back.png');
