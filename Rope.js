class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointa = this.rope.bodyA.position;
        var pointb = this.rope.bodyB.position;

        var BX = pointb.x + this.offsetX
        var BY = pointb.y + this.offsetY
        fill("Black")
        line(pointa.x,pointa.y,BX,BY)
    }
    }