class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }

    display() {
      if (this.body.speed<50) {
      super.display();
      }
      else {
        World.remove(world,this.body)
        push()
        this.visible = this.visible-10
        tint(255,this.visible)
        pop()
        rect (this.body.position.x,this.body.position.y,30,40)
      }
    }
  };