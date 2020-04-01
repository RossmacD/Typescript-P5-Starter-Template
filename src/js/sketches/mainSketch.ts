/*
 * Imports
 */
import * as p5 from 'p5';
import PerlinBrush from '../classes/PerlinBrush';

/*
 * Global Variables
 */
// Number of reflections
const symmetry: number = 8;
const angle: number = 360 / symmetry;
// The randomised brush
let brush: PerlinBrush;

/*
 * P5 Sketch
 */
const sketch = (p: p5) => {
  /*
   * P5 Setup
   */
  p.setup = () => {
    // Set canvas size to be asquare which will fit the page exactly
    const canvasSize = p.windowHeight < p.windowWidth ? p.windowHeight : p.windowWidth;
    p.createCanvas(canvasSize,canvasSize);
    // Tell p5 to use angles instead of radians
    p.angleMode(p.DEGREES);
    // Set the background
    p.background(p.color('#080808'));
    // Anti Alias the shapes
    p.smooth();
    // Create a brush from the PerlinBrush class
    brush = new PerlinBrush(p);

  };

  /*
   * P5 Draw
   */
  p.draw = () => {
    p.noStroke();
    // Blank the canvas by setting teh background, lower opacity will leave a trailing effect
    p.background(0,0,0,15)
    // p.filter(p.ERODE);
    // p.filter( p.BLUR );
    // for(let i =0;i<p.width;i++){
    //   for (let j = 0; j < p.height; j++) {
    //   }
    // }
    p.translate(p.width / 2, p.height / 2);
    const mx = brush.x - p.width / 2;
    const my = brush.y - p.height / 2;
    const pmx = brush.px - p.width / 2;
    const pmy = brush.py - p.height / 2;

    for (let i = 0; i < symmetry; i++) {
      p.rotate(angle);
      p.strokeWeight(5);
      p.stroke(200, brush.x, brush.y);
      p.line(mx, my, pmx, pmy);
      p.push();
      p.scale(1, -1);
      p.line(mx, my, pmx, pmy);
      p.pop();
    }
    // Move the brush
    brush.step(p);
    // brush.display(p);
  };
};

export default new p5(sketch);
