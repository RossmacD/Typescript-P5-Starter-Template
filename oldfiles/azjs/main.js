'use strict';
import Civilian from './classes/Civilian';

//---------------------------
// Global Variables
//---------------------------
let molecules, moleculeKey = [];
let collisonNo, checknum = 0;
let minRadius = 10, maxRadius = 20, minVelocity = -2, maxVelocity = 2, colWidth, rowHeight;
//Create an object to hold Variables for gui. - GUI cannot get handle on scope otherwise, unless var is used (Undesirable as it is outdated)
let guiVars = {
    numOfMolecules: 1,
    numRows: 4,
    numCols: 4,
    radiusBaseline: 5,
    showGrid: true,
    render: true,
    showTrails: false
};


//---------------------------
//P5 Functions
//---------------------------
/**
 * Canvas Set up
 */
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(127);
    noLoop();
    //frameRate(100);
    //Create Gui
    addGui();
    //Generate the Initial Moleules
    generateMolecules(); 
}

/**
 * P5 function
 * Draw each frame
 */
function draw(){
    //Regenerate cell calculations
    colWidth = width / guiVars.numCols;
    rowHeight = height / guiVars.numRows;

    //Show trail behind balls
    guiVars.showTrails ? background(0, 0, 0, 125) : background(0);


    //Run checks
    // splitIntoGridsBroad();
    // checkIntersections();
    splitIntoGridsNarrow();
    checkIntersections();

    //Draw the grid in the background
    if (guiVars.showGrid) drawGrid();
    //Render molecules
    if (guiVars.render) renderGrid();

    /**
     * FrameRate display
     */
    textSize(32);
    fill("#FFF");
    text(int(getFrameRate()), 30, 30);
}



function generateHumans() {
    humans = [];
}