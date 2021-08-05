var ball;
var ballimage
function preload ()
{
  ballimage=loadImage ("staraptor.png")
}
function setup() {
  createCanvas(600,400);
  ball=createSprite(100,100,50,10);
  ball.addImage (ballimage)
  ball.scale=0.3
}

function draw() 
{
  background(30);
  text("The muscles in its wings and legs are strong. It can easily fly while gripping a small Pokémon",50,150)
  text ("When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",50,100)
  drawSprites();
if(keyDown("left"))
{
  ball.x=ball.x -6
}
if(keyDown("right"))
{
  ball.x=ball.x +6
}
if(keyDown("up"))
{
  ball.y=ball.y -6
}
if(keyDown("down"))
{
  ball.y=ball.y +6
}
}





