// Import CSS for webpack - DOsnt work?
import '../css/myStyle.css';
import * as p5 from 'p5';

/**
 *  Create a p5 sketch
 * @param p - an isntance of p5
 */
let sketch = (p: p5) => {
  /**
   *P5 Setup
   */
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.background(0);
    p.noLoop();
  };

  p.draw = () => {};
};

new p5(sketch);
