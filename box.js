class box
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true
            

        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body);

    }
    display()
    {
     var paperpos=this.body.position;

     push()
     translate(paperpos.x,paperpos.y);
     rectMode(CENTER)
     strokeWeight(3);
     fill(255,0,255)
     rect(0,0,this.w,this.h)
     pop()   
    }
}