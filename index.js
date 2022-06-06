import Phaser from "phaser";

const config = {
  // WebGL(Web graphics library) JS Apii for rendering 2D and 3D graphics
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    // Arcade physics plugin, manages physics simulation
    default: "arcade",
    arcade: {
      gravity: {
        y: 200,
      },
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

// Loading assets, such as images, music, animations ...
function preload() {
  // this context - scene
  // contains functions and properties we can use
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
}

let bird = null;
let totalDelta = 0;

function create() {
  // x, y, key
  this.add.image(0, 0, "sky").setOrigin(0, 0);
  bird = this.physics.add
    .sprite(config.width / 10, config.height / 2, "bird")
    .setOrigin(0);

  // miiddle  of the height, 1/10 width
  bird.body.gravity.y = 200;
}

// 60fps
// 60 times per second
// 60 * 16ms = 1000ms

function update(time, delta) {
  totalDelta += delta;

  if (totalDelta < 1000) {
    return;
  }

  totalDelta = 0;
}

new Phaser.Game(config);
