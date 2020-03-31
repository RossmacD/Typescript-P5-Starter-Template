import * as p5 from 'p5';
import Human from '../classes/Human';

// ---------------------------
// Global Variables
// ---------------------------
// let molecules, moleculeKey = [];
// let collisonNo,checknum = 0;
// let minRadius = 10, maxRadius = 20, minVelocity = -2, maxVelocity = 2, colWidth, rowHeight;
// let humans: Array<Human> = [];
// let humanKey: Array<Array<number>> = [];
// let collisonNo: number = 0;
// let checknum:number = 0;
const minRadius: number = 10;
const maxRadius: number = 20;
const numRows: number = 8;
const numCols: number = 8;
let colWidth: number;
let rowHeight: number;

// Create an object to hold Variables for gui.
// GUI cannot get handle on scope otherwise, unless var is used (Undesirable as it is outdated)
// let guiVars: object = {
//   numOfMolecules: 1,
//   numRows: 4,
//   numCols: 4,
//   radiusBaseline: 5,
//   showGrid: true,
//   render: true,
//   showTrails: false
// };

const sketch = (p: p5) => {
  /**
   * P5 Setup
   */
  p.setup = () => {
    console.log('Hi');
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    colWidth = p.width / numRows;
    rowHeight = p.height / numCols;
    p.background(0);
    p.stroke(80, 150, 50);
    p.strokeWeight(1);
    // Draw Grid
    for (let x: number = colWidth; x < p.width; x += colWidth) {
      for (let y = 0; y < p.height; y += rowHeight) {
        p.line(x, 0, x, p.height);
        p.line(0, y, p.width, y);
        console.log('TEst');
      }
    }
    // Set min and max radius for humans
    // Human.radiusMinMax=createVector(10,20);
  };

  p.draw = () => {
    // drawGrid(p);
  };
};

export default new p5(sketch);

/**
 * Draw the grid in the background
 */
function drawGrid(p: p5) {
  // console.log(p)
  // p.stroke(80, 150, 50);
  // p.strokeWeight(1)
  // Draw Grid
  for (let x: number = colWidth; x < p.width; x += colWidth) {
    for (let y: number = 0; y < p.height; y += rowHeight) {
      // p.stroke(80, 150, 50);
      p.stroke(52, 235, 100);
      p.strokeWeight(1);
      p.line(x, 0, x, p.height);
      p.line(0, y, p.width, y);
      let currentGridCell = x / colWidth - 1;
      console.log(currentGridCell);
      console.log(humanKey[currentGridCell]);

      let numArray: number = humanKey[x / colWidth - 1 + y / rowHeight].length;
      // tempArray.forEach(function (indexValue) {
      //     if (molecules[indexValue].intersecting == true) {
      //         intersectCount++
      //     }
      // })
      if (numArray === 0) {
        // numArray = ""
      }
      p.noStroke();
      p.fill(255, 255, 255, 255);
      p.textSize(16);
      p.textAlign(p.RIGHT);
      // text(numArray, x - 5, y + 20);

      // fill(255, 50, 0, 150);
      // text(intersectCount, j * gridWidth + gridWidth - 5, i * gridHeight + gridHeight - 5);
    }
  }
}
