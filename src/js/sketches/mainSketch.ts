import * as p5 from 'p5';
// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
const symmetry:number = 8;

const angle:number = 360 / symmetry;

// let brushSizeSlider:, sizeSlider;


const sketch = (p: p5) => {
  /**
   * P5 Setup
   */
  p.setup = () => {
    p.createCanvas(710, 710);
    p.angleMode(p.DEGREES);
    p.background(127);


    // Setting up the slider for the thickness of the brush
    // brushSizeSlider = p.createButton('Brush Size Slider');
    // sizeSlider = p.createSlider(1, 32, 4, 0.1);
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);

    if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
      const mx = p.mouseX - p.width / 2;
      const my = p.mouseY - p.height / 2;
      const pmx = p.pmouseX - p.width / 2;
      const pmy = p.pmouseY - p.height / 2;

      if (p.mouseIsPressed) {
        for (let i = 0; i < symmetry; i++) {
          p.rotate(angle);
          // const sw = sizeSlider.value();
          p.strokeWeight(5);
          p.line(mx, my, pmx, pmy);
          p.push();
          p.scale(1, -1);
          p.line(mx, my, pmx, pmy);
          p.pop();
        }
      }
    }
  };
};

export default new p5(sketch);