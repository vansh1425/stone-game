class Stone {
    constructor(x,y,r){
      var options=
{
      'restitution':0,
      'isStatic':false,
      'friction': 1 ,
      'density':1.2
}        
      this.x= x;
      this.y=y;
      this.r=25;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      this.image=loadImage("images/stone.png");
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
       // ellipse(this.x,this.y,this.r*2,this.r*2);
        image(this.image, 0,0,this.r*2, this.r*2)
        pop();
    }
}