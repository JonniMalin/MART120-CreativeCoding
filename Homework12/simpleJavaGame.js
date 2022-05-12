/*
So, I've been using your homework walkthrough and example videos
to help me with some of my assignments, and it's only just
occurred to me that you probably put these up *after* students had a
chance to complete the assignments. In which case, I've had way too
much help with these. In all honesty, though, I would have asked for
all that same help, anyway. I really struggle with code. I may have
mentioned it in one of my discussion posts, but I struggle with
anything beyond the rather simple stuff. I can understand what I'm
seeing, and I can tell you what it's supposed to do, but producing my
own code is incredibly difficult. I guess what I'm getting at is:
I'm sorry if my code is too similar to yours when I submit my homework.
*/

// player starting coordinate variables
var playerX = 180;
var playerY = 45;

// enemy starting coordinate variables; figure out how to randomize....
var enemyX = 125
var enemyY = 225
var enemyZoomiesX;
var enemyZoomiesY;

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

  // the "sign" for my exit
  fill(0,0,0);
  textSize(15);
  textFont('Georgia');
  text("ESCAPE -->",410,30);

  // create the player's shape
  fill(140,140,140);
  square(playerX,playerY,30);

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

  // create the enemy shape; I'm following your given example here
  // I'll also admit I copied your code here; still figuring out how these work together
  fill(255,0,0);
  circle(enemyX,enemyY,15);
  enemyZoomiesX = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
  enemyZoomiesY = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);

  // random movement for enemy shape
  enemyX -= enemyZoomiesX;
  enemyY += enemyZoomiesY;

  // out of bounds check; I tried my own thing here
  if(enemyX > 500)
  {
    enemyX = 0;
  }
  else if(enemyX < 0)
  {
    enemyX = 500;
  }
  else if(enemyY > 500)
  {
    enemyY = 0;
  }
  else if(enemyY < 0)
  {
    enemyY = 500;
  }

  // Has the character escaped?
  // check to see if the character has left the exit
  // feel like an idiot for not being able to think of my own logical operator here
  if(playerX > 500 && playerY < 60)
  {
      fill(0,255,0);
      textSize(26);
      text("Escape Successful!", 150, 150);
  }

  // Gonna try getting the mouse to click a triangle
  fill(0,0,255);
  rect(clickyMouseX,clickyMouseY,obstacleSizeWidth,obstacleSizeHeight);

}

function mouseClicked()
{
    clickyMouseX = mouseX;
    clickyMouseY = mouseY;
}
