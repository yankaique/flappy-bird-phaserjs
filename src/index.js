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
      debug: true,
      gravity: {
        y: 400,
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
const flapVelocity = 300;
const velocity = 200;
const initialPosition = {x:config.width / 10,y:config.height / 2}

function create() {
  // x, y, key
  this.add.image(0, 0, "sky").setOrigin(0, 0);
  bird = this.physics.add
    .sprite(initialPosition.x, initialPosition.y, "bird")
    .setOrigin(0);

  // miiddle  of the height, 1/10 width
  // bird.body.velocity.x = velocity; 

  this.input.on('pointerdown', flap)

  this.input.keyboard.on('keydown_SPACE', flap)
}

// 60fps
// 60 times per second
// 60 * 16ms = 1000ms

function update(time, delta) {
  if(bird.y > config.height || bird.y < -bird.height){
    restartBirdPosition()
  }
}

function restartBirdPosition(){
  bird.x = initialPosition.x;
  bird.y = initialPosition.y;
  bird.body.velocity.y = 0;
}

function flap(){
  bird.body.velocity.y = -flapVelocity;

}

new Phaser.Game(config);
