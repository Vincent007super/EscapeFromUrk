let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

class Example extends Phaser.Scene {
    preload() {
        this.load.setBaseURL('https://labs.phaser.io');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create() {

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 75);
        logo.setBounce(1.1, 1.1);
        logo.setCollideWorldBounds(true);

        particles.startFollow(logo);
    }
}

const config = {
    type: Phaser.AUTO,
    width: canvasWidth,
    height: canvasHeight,
    scene: Example,
    physics: {
        default: 'arcade',
    }
};

const game = new Phaser.Game(config);