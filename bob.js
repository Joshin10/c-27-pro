class bob  {
  constructor(x,y,r){
  var options={
    isStatic:false,
  restitution:1,
friction:0,
density:1
 }
 this.x=x
 this.y=y
 this.r=r
 this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
 World.add(world,this.body)

  }
  display(){
    var papperPos=this.body.position;
    push()
    translate(papperPos.x,papperPos.y)
    ellipse(0,0,this.r,this.r)
pop()
   
  }
}