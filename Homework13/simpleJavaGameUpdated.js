/*
Hey! I actually managed to build my functions and call them within the draw
function without leaning on your example from the lesson! Granted, I DID
follow what the gentleman in the supplementary videos did: I basically copied
my own code and pasted into a function which I named for what it was doing.
It was a bit easier than I thought. I liked it, though; it makes coding way
easier when you don't have a chaotic mess inside the draw function. I've
already begun using that knowledge in my final project.
*/

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

// working out how to make a triangle on mouse-click; will experiment later, I suppose
// in the meantime, tried to make each click a random sized obstacle; still trying
var clickyMouseX = 50;
var clickyMouseY = 50;
var obstacleSizeWidth = Math.random() * 10 + 25;
var obstacleSizeHeight = Math.random() * 10 + 25;


// setup the scene
function setup()
{
  createCanvas(500,500);
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
  mouseClickObstacle();
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

function mouseClicked()
{
    clickyMouseX = mouseX;
    clickyMouseY = mouseY;
}
