class Plinko{
    constructor(x,y,r){
        
       

        var options={
            isStatic:true,
           restitution :0.3,
            friction: 0.5,
             density:1.2
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        World.add(world,this.body);
        
        
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white")
        ellipse(0,0,this.r,this.r);
        pop();
       
    }
}
