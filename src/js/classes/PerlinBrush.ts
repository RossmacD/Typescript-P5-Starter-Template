import * as p5 from 'p5';
export default class PerlinBrush {
    x:number;
    y:number;
    px:number;
    py:number;
    tx:number;
    ty:number;

  constructor(p:p5) {
    this.x = p.width / 2;
    this.y = p.height / 2;
    this.px = p.width / 2;
    this.py = p.height / 2;
    this.tx = 0;
    this.ty = 10000;
  }

  step(p:p5) {
    this.px = this.x;
    this.py = this.y;
    this.x = p.map(p.noise(this.tx), 0, 1, 0, p.width);
    this.y = p.map(p.noise(this.ty), 0, 1, 0, p.height);
    this.tx += 0.01;
    this.ty += 0.03;
  }

  display(p:p5) {
    p.translate(-(p.width / 2), -(p.height / 2));
    p.fill(200,this.x,this.y);
    p.ellipse(this.x, this.y, 20, 20);
  }
}
