import { Game as RunGame, AUTO as WebGL } from "phaser";

const config = {
  // WebGL(Web graphics library) JS Apii for rendering 2D and 3D graphics
  type: WebGL,
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
  debugger;
}

function create() {
  debugger;
}

new RunGame(config);
