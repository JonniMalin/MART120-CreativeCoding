/*
I will admit that we're hitting the threshold of what I seem to be able to
handle in terms of complexity. I knew I was taking a risk this semester by
registering for a coding class. It made me anxious as hell. And when it comes
to my anxiety, my coping specialty is *avoidance.*
[insert magical sparkly sound]
And that triggers the depression. It's a great cycle.
Seriously, though, thank you for the walkthroughs that you've posted for
these homework assignments. I don't know that I'd have been able to
comprehend half of what we've done without them. Anyway, the assignment:
*/

// creating the class; I chose an ellipse for mine
class Ellipse
{
  // constructor; gotta have one!
  constructor(xCoordinate,yCoordinate,width,height,redColor,greenColor,blueColor)
  {
    this.x = xCoordinate;
    this.y = yCoordinate;
    this.w = width;
    this.h = height;
    this.r = redColor;
    this.g = greenColor;
    this.b = blueColor;
  }

  display()
  {
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,this.w,this.h);
  }
}
