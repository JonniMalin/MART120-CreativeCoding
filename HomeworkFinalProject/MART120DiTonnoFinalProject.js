/*
Professor Cassens,

I know you said that this project didn't need to be crazy, and it most
certainly isn't, but I hope it's enough. I was so caught up in trying to
do something, ANYTHING, that showed I actually retained some information
from the class, that I got overwhelmed and kind of gave up. I didn't know
what to do, so I did what I could. I tried to adapt some of the snippets of
JavaScript that I used throughout my assignments, but I had to look up others.

Thank you for all the patience and the leeway on getting things done.

Now, more to the point: This script is meant to be an art piece built with
simple shapes, kind of like our self portrait, but better-looking. I
originally wanted to make it interactive, but I didn't have time, so I decided
to see what I could do with JavaScript instead of Microsoft Paint.
*/

// variables for canvas size
var canvasWidth = 500;
var canvasHeight = 500;

var sunX = 300;
var sunY = 60;
var sunDiameter = 30;

function setup()
{
  createCanvas(canvasWidth,canvasHeight);
  sunDirection = floor(random() * 10) + 0.5;
}

function draw()
{
  background(135,206,235);
  ground();
  river();
  mountainsLeft();
  mountainsRight();
  tree1();
  tree2();
  sun();
  
  circle(sunX,sunY,sunDiameter);
  sunX += sunDirection;
  if(sunX >= canvasWidth - sunDiameter/2 || sunX <= sunDiameter/2)
  {
    sunDirection *= -1;
  }
}

function ground()
{
  noStroke();
  fill(98,170,54);
  rect(0,350,500,150);
}

function river()
{
  noStroke();
  fill(0,76,153);
  beginShape();
  vertex(235,350);
  vertex(195,365);
  vertex(205,385);
  vertex(165,410);
  vertex(165,420);
  vertex(180,430);
  vertex(160,450);
  vertex(20,500);
  vertex(310,500);
  vertex(325,450);
  vertex(300,430);
  vertex(240,410);
  vertex(240,405);
  vertex(250,390);
  vertex(215,365);
  vertex(245,350);
  endShape();
}

function mountainsLeft()
{
  noStroke();
  fill(147,148,153);
  triangle(-10,360,30,120,90,360);
  triangle(75,360,105,185,140,360);
  triangle(30,360,80,210,115,360);
  fill(230,230,230);
  triangle(30,120,20,176,45,176);
  triangle(105,185,97,230,115,230);
}

function mountainsRight()
{
  noStroke();
  fill(147,148,153);
  triangle(410,360,470,180,510,360);
  triangle(350,360,310,250,270,360);
  triangle(325,360,360,270,400,360);
  triangle(385,360,420,210,470,360);
  fill(230,230,230);
  triangle(460,210,470,180,478,210);
  triangle(105,185,97,230,115,230);
  triangle(302,270,310,250,318,270);
}

function tree1()
{
  noStroke();
  fill(104,83,48);
  rect(135,410,15,20)
  fill(0,51,0);
  triangle(125,415,140,390,160,415);
  triangle(127,405,143,380,158,405);
  triangle(130,394,144,370,156,394);
}

function tree2()
{
  noStroke();
  fill(104,83,48);
  rect(270,382,15,20)
  fill(0,51,0);
  triangle(257,390,275,375,297,390);
  triangle(260,382,276,367,295,382);
  triangle(262,375,277,362,293,375);
}

function sun()
{
  noStroke();
  fill(253,184,19);
  circle(sunX,sunY,sunDiameter);
}

function sunMove()
{
  circle(sunX,sunY,sunDiameter);
  sunX += sunDirection;
  if(sunX >= canvasWidth - sunDiameter/2 || sunX <= sunDiameter/2)
  {
    sunDirection *= -1;
  }
}
