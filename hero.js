class Hero {
    constructor(x,y,width,height,angle){
         var options = {
             'frictionAir' : 0.005,
             'denstiy' : 1
         }
       
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        strokeWeight(0);
    }
}
