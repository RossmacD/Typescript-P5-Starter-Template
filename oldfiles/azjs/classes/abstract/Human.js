'use strict';
export default class Human{
    constructor(_id, _position = createVector(0, 0)){
        this.id=_id;
        /* Physical*/
        this.position=_position;
        this.velocity = createVector(random(-2, 2), random(-2, 2));
        this.radius = random(radiusMin, radiusMax);
        
        // Pulse represents the contagion
        this.pulseRadius = 0;
        this.pulseRadiusMax = 15;
        this.pulseSpeed = 1;
        this.fill = color(255, 255, 255);
        this.stroke = color(255, 255, 255);

        /* Collision*/
        this.isColliding = false;
        this.bounce = false;
        // Number between 0 and 8 representing the closest corner or edge
        this.closestEdge=0;
        this.cell=0;

        /* Health*/
        this.age=random(10,90);
        this.health= 100 / random();
        this.sickness=0;
        // After a successful recovery from the virus you may have immunity for a period, immunity can also be gotten by wahsing hands and so on
        //https://www.nbcnews.com/health/health-news/can-you-catch-coronavirus-twice-you-ll-probably-be-immune-n1171976
        this.immunity=20;
        // You might no show symptoms to other viruses, you can still transmit the virus
        this.asymptomatic = Math.random() < 0.5;

    }

    render() {
        stroke(this.stroke);
        strokeWeight(1);
        this.isColliding ? fill(this.fill) : noFill();
        push()
            translate(this.position.x, this.position.y);
            ellipse(0, 0, (this.radius) * 2, (this.radius) * 2);
        pop();
        this.isColliding = false;
    }


    step(){

    }

    checkEdges(){

    }

    reset(){

    }
}