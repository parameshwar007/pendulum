class Rope{

    constructor(object1,object2,offsetx,offsety){
    this.offsetx=offsetx    
    this.offsety=offsety 
      
      
      var options={
          bodyA: bodyA ,
          bodyB: bodyB,
          stiffness:0.04,
          length:10,
        pointB:{x:this.offsetx,y:this.offsety}
        }
    
        this.chain=Constraint.create(options); 
         World.add(world,this.rope);
    }
    
    display(){
       var pointA=this.chain.bodyA.position;
       var pointB=this.chain.bodyB.position;
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y); 
    
    }
    
    

    
    
    
    
    
    
    
    }