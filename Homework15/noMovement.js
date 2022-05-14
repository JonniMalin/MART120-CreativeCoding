/*
Professor Cassens, I spent about an hour and a half trying to figure this out,
and I was wondering if you might be able to offer some feedback on it.
When I originally made the "enemies" in the little JavaScript game we worked
on, I made a circle and a square separately. I had hoped to use a similar
approach for this final assignment by making a separate set of arrays for
each type of shape: a set for the circles and a set for the squares. However,
I can't seem to get them to move. The squares, if you watch closely, will
move a single tick, and then stop. The circles don't seem to move at all.
I've been staring at this for so long that I feel like I'm going nuts, and I'm
sure it's a really obvious error. "Snake it would've bit ya" sort of deal.
Are you able to see what I've done wrong here? I've checked the console in
Chrome, both with mine and then with your example to see if there was something
that I missed. I get the "scope" error with both our codes, but nothing that
tells me why my shapes aren't moving.

Thank you.
*/

//adding in a couple canvas variables for my own experiment; let's see if it works
var canvasWidth = 500
var canvasHeight = 500

// player starting coordinate variables
var playerX = 180;
var playerY = 45;

// first enemy starting coordinate variables; figure out how to randomize....
var enemyXone = 125
var enemyYone = 225
var enemyZoomiesXone;
var enemyZoomiesYone;

// second enemy starting coordinates
var enemyXtwo = 75
var enemyYtwo = 115
var enemyZoomiesXtwo;
var enemyZoomiesYtwo;

// set up WASD key codes
var keyW = 87;
var keyA = 65;
var keyS = 83;
var keyD = 68;

/*
arrays for moving obstacle shapes (I did two different ones because I used
two different shapes in my original assignment and wanted to use both squares
and circles.)
*/
var obstaSquareXs = [];
var obstaSquareYs = [];
var obstaSquareSize = [];
var obstaSquareXZoomies = [];
var obstaSquareYZoomies = [];

var obstaCircleXs = [];
var obstaCircleYs = [];
var obstaCircleDiameter = [];
var obstaCircleXZoomies = [];
var obstaCircleYZoomies = [];

// working out how to make a triangle on mouse-click; will experiment later, I suppose
// in the meantime, tried to make each click a random sized obstacle; still trying
var clickyMouseX = 50;
var clickyMouseY = 50;
var obstacleSizeWidth = Math.random() * 10 + 25;
var obstacleSizeHeight = Math.random() * 10 + 25;

// this is the object created from the class I just made
var ellipseShape1;
var ellipseShape2;
var ellipseShape3;


// setup the scene
function setup()
{
  createCanvas(500,500);

  ellipseShape1 = new Ellipse(100,100,50,25,255,0,255);
  ellipseShape2 = new Ellipse(250,300,70,100,0,255,255);
  ellipseShape3 = new Ellipse(450,400,20,50,255,255,0);

  // random speeds for my enemy shapes
  for (var i = 0; i < 40; i++)
  {
      obstaSquareXZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
      obstaSquareYZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
      obstaSquareXs[i] = randomizedFun(canvasWidth);
      obstaSquareYs[i] = randomizedFun(canvasHeight);
      obstaSquareSize[i] = randomizedFun(25);
  }

  for (var i = 0; i < 30; i++)
  {
      obstaCircleXZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
      obstaCircleYZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
      obstaCircleXs[i] = randomizedFun(canvasWidth);
      obstaCircleYs[i] = randomizedFun(canvasHeight);
      obstaCircleDiameter[i] = randomizedFun(25);
  }

  // creating 3 square enemies and assigning speed
  for (var i = 0; i < 3; i += 1)
  {
    obstaSquareXZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 2);
    obstaSquareYZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstaSquareXs[i] = randomizedFun(canvasWidth);
    obstaSquareYs[i] = randomizedFun(canvasHeight);
  }

  // creating 2 circle enemies and assigning speed
  // I incremented differently from before; memorizing the ways to increment
  for (var i = 0; i < 2; i++)
  {
    obstaCircleXZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 3);
    obstaCircleYZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstaCircleXs[i] = randomizedFun(canvasWidth);
    obstaCircleYs[i] = randomizedFun(canvasHeight);
  }
}

// Remember! the draw function continuously updates!
function draw()
{
  background(180,115,295);
  mazeWalls();
  escapeSign();
  establishPlayer();
  playerMovement();
  enemyShapeAndMovementOne();
  enemyShapeAndMovementTwo();
  outOfBoundsEnemyOne();
  outOfBoundsEnemyTwo();
  escapeMessage();

  for (var i = 0; i < obstaSquareXs.length; i += 1)
  {
      square(obstaSquareXs[i], obstaSquareYs[i], obstaSquareSize[i]);
      obstaSquareXZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 2);
      obstaSquareYZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 3);
  }

  for (var i = 0; i < obstaCircleXs.length; i += 1)
  {
      circle(obstaCircleXs[i], obstaCircleYs[i], obstaCircleDiameter[i]);
      obstaCircleXZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 2);
      obstaCircleYZoomies[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 3);
  }

  // The shapes are a-dancin'!
  obstaSquareXs[i] += obstaSquareXZoomies[i];
  obstaSquareYs[i] -= obstaSquareYZoomies[i];
  // Has the shape left the building? Bring it back in!
  if (obstaSquareXs[i] > canvasWidth)
  {
      obstaSquareXs[i] = 0;
  }
  if (obstaSquareXs[i] < 0)
  {
      obstaSquareXs[i] = canvasWidth;
  }
  if (obstaSquareYs[i] > canvasHeight)
  {
      obstaSquareYs[i] = 0;
  }
  if (obstaSquareYs[i] < 0)
  {
      obstaSquareYs[i] = canvasHeight;
  }

  // more dancing
  obstaCircleXs[i] -= obstaCircleXZoomies[i];
  obstaCircleYs[i] += obstaCircleYZoomies[i];
  // Please re-enter the building, circles
  if (obstaCircleXs[i] > canvasWidth)
  {
      obstaCircleXs[i] = 0;
  }
  if (obstaCircleXs[i] < 0)
  {
      obstaCircleXs[i] = canvasWidth;
  }
  if (obstaCircleYs[i] > canvasHeight)
  {
      obstaCircleYs[i] = 0;
  }
  if (obstaCircleYs[i] < 0)
  {
      obstaCircleYs[i] = canvasHeight;
  }

  mouseClickObstacle();

  // drawing/displaying the ellipses I just made
  ellipseShape1.display();
  ellipseShape2.display();
  ellipseShape3.display();
}

function mazeWalls()
{
  /*
  creating the "walls" for my "maze"
  I saw that you simply used the Height and Width of your canvas, but I
  wanted to practice my shape placement. I'll probably end up using your
  technique in my final project, though.
  */
  fill(0,0,0);
  rect(0,0,500,10);
  rect(0,0,10,500);
  rect(0,490,500,10);
  rect(490,65,10,445);
  rect(245,0,10,300);
  rect(120,300,260,10);
}

function escapeSign()
{
  // the "sign" for my exit
  fill(0,0,0);
  textSize(15);
  textFont('Georgia');
  text("ESCAPE -->",410,30);
}

function establishPlayer()
{
  // create the player's shape
  fill(140,140,140);
  square(playerX,playerY,30);
}

function playerMovement()
{
  // I prefer the key-hold style as opposed to the key-press style
  if(keyIsDown(keyW))
  {
    playerY -= 8;
  }
  if(keyIsDown(keyA))
  {
    playerX -= 8;
  }
  if(keyIsDown(keyS))
  {
    playerY += 8;
  }
  if(keyIsDown(keyD))
  {
    playerX += 8;
  }
}

function enemyShapeAndMovementOne()
{
  // create the enemy shape; I'm following your given example here
  // I'll also admit I copied your code here; still figuring out how these work together
  fill(255,0,0);
  circle(enemyXone,enemyYone,15);
  enemyZoomiesXone = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
  enemyZoomiesYone = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
  // random movement for enemy shape
  enemyXone -= enemyZoomiesXone;
  enemyYone += enemyZoomiesYone;
}

function enemyShapeAndMovementTwo()
{
  // create the enemy shape; I'm following your given example here
  // I'll also admit I copied your code here; still figuring out how these work together
  fill(255,0,0);
  square(enemyXtwo,enemyYtwo,25);
  enemyZoomiesXtwo = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
  enemyZoomiesYtwo = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  // random movement for enemy shape
  enemyXtwo += enemyZoomiesXtwo;
  enemyYtwo += enemyZoomiesYtwo;
}

function outOfBoundsEnemyOne()
{
  // out of bounds check; I tried my own thing here
  if(enemyXone > 500)
  {
    enemyXone = 0;
  }
  else if(enemyXone < 0)
  {
    enemyXone = 500;
  }
  else if(enemyYone > 500)
  {
    enemyYone = 0;
  }
  else if(enemyYone < 0)
  {
    enemyYone = 500;
  }
}

function outOfBoundsEnemyTwo()
{
  // out of bounds check; I tried my own thing here
  if(enemyXtwo > 500)
  {
    enemyXtwo = 0;
  }
  else if(enemyXtwo < 0)
  {
    enemyXtwo = 500;
  }
  else if(enemyYtwo > 500)
  {
    enemyYtwo = 0;
  }
  else if(enemyYtwo < 0)
  {
    enemyYtwo = 500;
  }
}

function escapeMessage()
{
  // Has the character escaped?
  // check to see if the character has left the exit
  // feel like an idiot for not being able to think of my own logical operator here
  if(playerX > 500 && playerY < 60)
  {
      fill(0,255,0);
      textSize(26);
      text("Escape Successful!", 150, 150);
  }
}

function mouseClickObstacle()
{
  // Gonna try getting the mouse to click a triangle
  fill(0,0,255);
  rect(clickyMouseX,clickyMouseY,obstacleSizeWidth,obstacleSizeHeight);
}

function randomizedFun(number)
{
    return Math.floor(Math.random() * number) + 10;
}

function mouseClicked()
{
    clickyMouseX = mouseX;
    clickyMouseY = mouseY;
}
