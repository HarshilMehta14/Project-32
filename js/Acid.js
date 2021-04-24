class Acid{
    constructor(){
        var options = {
            'restitution' : 0.2,
            'density' : 1,
            'friction' : 0.5
        }

        this.body = Body.circle(random(5, 1355), 0, 10, 10);
        World.add(world, this.body);        
    }

    display(){
        var position = this.body.position;

        push();
        translate(position.x, position.y);

        noStroke();
        fill("red");

        ellipseMode(RADIUS);
        ellipse(0, 0, 10, 10);

        pop();
    }
}