import * as p5 from 'p5';
import PerlinBrush from '../classes/PerlinBrush';
// Symmetry corresponding to the number of reflections. Change the number for different number of reflections
const symmetry: number = 8;
const angle: number = 360 / symmetry;
let brush: PerlinBrush;
/*
 * P5 Sketch
 */
const sketch = (p: p5) => {
  /*
   * P5 Setup
   */
  p.setup = () => {
    p.createCanvas(710, 710);
    p.angleMode(p.DEGREES);
    p.background(0);
    brush = new PerlinBrush(p);
  };

  /*
   * P5 Draw
   */
  p.draw = () => {
    p.background(p.color(0,0,0,10))
    p.translate(p.width / 2, p.height / 2);
    const mx = brush.x - p.width / 2;
    const my = brush.y - p.height / 2;
    const pmx = brush.px - p.width / 2;
    const pmy = brush.py - p.height / 2;

    // if (p.mouseIsPressed) {
    for (let i = 0; i < symmetry; i++) {
      p.rotate(angle);
      // const sw = sizeSlider.value();
      // p.strokeWeight(5);
      p.strokeWeight(5);
      p.stroke(200, brush.x, brush.y);
      p.line(mx, my, pmx, pmy);
      p.push();
      p.scale(1, -1);
      p.line(mx, my, pmx, pmy);
      p.pop();
    }
    //   }
    // }
    brush.step(p);
    // brush.display(p);
  };
};

export default new p5(sketch);
