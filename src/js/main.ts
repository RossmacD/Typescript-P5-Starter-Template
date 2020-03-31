// Import CSS for webpack - DOsnt work?
import '../css/myStyle.css';
import Human from './classes/Human'


/**
 *  Create a p5 sketch
 * @param p - an isntance of p5
 */
function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    noLoop();
    //Set min and max radius for humans
    Human.radiusMinMax=createVector(10,20);
  };

function draw(){
    
};


