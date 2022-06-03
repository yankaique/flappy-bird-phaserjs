import Phaser from "phaser";

const config = {
  // WebGL(Web graphics library) JS Apii for rendering 2D and 3D graphics
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    // Arcade physics plugin, manages physics simulation
    default: "arcade",
  },
  scene: {
    preload,
    create,
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

function create() {
  // x, y, key
  this.add.image(0, 0, "sky").setOrigin(0, 0);
  bird = this.add
    .sprite(config.width / 10, config.height / 2, "bird")
    .setOrigin(0);
}

new Phaser.Game(config);
