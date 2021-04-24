class Anvil{
    constructor(){
        var options = {
            'restitution' : 0.02,
            'density' : 1,
            'friction' : 1
        }

        this.anvil = Bodies.rectangle(random(25, 1345), 25, 50, 50);
        World.add(world, this.anvil);

        this.image = loadImage("images/anvil.png");
    }

    display(){
        var pos = this.anvil.position;

        push();
        translate(pos.x, pos.y);

        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}