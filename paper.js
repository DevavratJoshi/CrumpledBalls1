class paper{
    constructor(){
        var options={
            isStatic: false,
            restitution : 1.0,
            friction : 0.5,
            density: 1.2

        }
        this.body = Bodies.circle(100 , 200, 25, options );

        World.add(world,this.body)
    }
    display(){
     var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS)
        fill("violet");
      ellipse(0,0,10,10);
        pop();
      }
    };