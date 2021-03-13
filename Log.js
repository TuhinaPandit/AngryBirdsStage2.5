class Log extends BaseClass{
    //log class constructor
    constructor(x, y, height, angle) {
    //base class constructor
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png")
    
    Matter.Body.setAngle(this.body,angle);
    
    }
  };
  