var canvasWidth = 500
var canvasHeight = 500

var headX = 200;
var headY = 175;
var headWidth = 150;
var headHeight = 160;

var earX = 195;
var earY = 170;
var earWidth = 22;
var earHeight = 40;

var noseXfirst = 275;
var noseYfirst = 175;
var noseXsecond = 259;
var noseYsecond = 125;
var noseXthird = 300;
var noseYthird = 175;

var neckX = 175;
var neckY = 250;
var neckWidth = 45;
var neckHeight = 43;

var eyeX = 230;
var eyeY = 147;
var eyeWidth = 30;
var eyeHeight = 15;

var hairTieX = 116;
var hairTieY = 172;
var hairTieWidth = 8;
var hairTieHeight = 25;

/*
wanted to make my text size variable unique so I wasn't just
copying you, Professor, but simple is best!
*/

var size = 40;
var incCount = 0;
var sizeChange = 1;



// setup function is called only once
function setup()
{
    createCanvas(canvasWidth,canvasHeight);
    headDirection = floor(random() * 10) + 1;
    earDirection = floor(random() * 10) + 1;
    noseDirection = floor(random() * 10) + 1;
    neckDirection = floor(random() * 10) + 1;
    eyeDirection = floor(random() * 10) + 1;
    hairTieDirection = floor(random() * 10) + 1;
}
/*
this function is called continuously
while the sketch is open in the browser
*/
function draw() {
  background(0,170,170);

  // Skin color
  fill(241,194,125);

  // Head
  ellipse(headX,headY,headWidth,headHeight);
  headY += headDirection;
  if(headY >= canvasHeight - headHeight/2 || headY <= headHeight/2)
  {
    headDirection *= -1;
  }

  // Ear
  ellipse(earX,earY,earWidth,earHeight);
  earX -= earDirection;
  if(earX >= canvasWidth - earWidth/2 || earX <= earWidth/2)
  {
    earDirection *= -1;
  }

  // Nose
  triangle(noseXfirst,noseYfirst,noseXsecond,noseYsecond,noseXthird,noseYthird);
  /*
  Was going to move nose up and down as well, but I can't
  figure out triangles. Will come back to this.
  */

  // "Neck"
  rect(neckX,neckY,neckWidth,neckHeight);
  neckX += neckDirection;
  if(neckX >= canvasWidth - neckWidth/2 || neckX <= neckWidth/2)
  {
    neckDirection *= -1;
  }

  // Eye
  fill(76,153,76);
  ellipse(eyeX,eyeY,eyeWidth,eyeHeight);
  eyeX -= eyeDirection;
  eyeY -= eyeDirection;
  if(eyeX >= canvasWidth - eyeWidth/2 || eyeY <= eyeHeight/2)
  {
    eyeDirection *= -1;
  }

  // Hair (This won't move beacause I have no idea where to begin.)
  fill(137,98,20);

  /*
  This whole mess constitutes the shape I made for my hair.
  It is not going to do anything for this assignment.
  */
  beginShape();
  vertex(259,125);
  vertex(255,120);
  vertex(240,105);
  vertex(225,98);
  vertex(200,94);
  vertex(175,98);
  vertex(160,105);
  vertex(140,123);
  vertex(130,140);
  vertex(125,160);
  vertex(124,175);
  vertex(110,175);
  vertex(100,180);
  vertex(93,190);
  vertex(93,240);
  vertex(90,280);
  vertex(85,320);
  vertex(75,390);
  vertex(75,410);
  vertex(80,440);
  vertex(95,400);
  vertex(107,390);
  vertex(120,375);
  vertex(125,370);
  vertex(123,340);
  vertex(123,300);
  vertex(120,275);
  vertex(118,250);
  vertex(115,200);
  vertex(119,194);
  vertex(126,194);
  vertex(175,180);
  vertex(185,150);
  endShape(CLOSE);

  // Ponytail holder
  fill(0,0,255);
  rect(hairTieX,hairTieY,hairTieWidth,hairTieHeight);
  hairTieY -= hairTieDirection;
  if(hairTieY >= canvasHeight - hairTieHeight/2 || hairTieY <= hairTieHeight/2)
  {
    hairTieDirection *= -1;
  }

  // Signature
  fill(0,0,0);
  textSize(size);
  size -= sizeChange;
  incCount ++;
  if(incCount > 5)
  {
    sizeChange *= -1;
    incCount = 0;
  }
  text('Jonni D.',300,350);
}
