var sprite1, sprite2;

function setup() {
  createCanvas(800,400);
  sprite1=createSprite(250,150,50,50);
  sprite1.shapeColor=("blue");
  sprite2=createSprite(200,300,65,75);
  

  
}

function draw() {
  background(255,255,255); 
  sprite1.x=mouseX;
  sprite1.y=mouseY; 

  if(sprite1.x-sprite2.x<sprite1.width/2+sprite2.width/2 && 
    sprite2.x-sprite1.x<sprite1.width/2+sprite2.width/2&&
    sprite1.y-sprite2.y<sprite1.height/2+sprite2.height/2 && 
      sprite2.y-sprite1.y<sprite1.height/2+sprite2.height/2){
    sprite1.shapeColor=("yellow");
    sprite2.shapeColor=("red");
  }

else{sprite1.shapeColor=("blue");
     sprite2.shapeColor=("blue");}
  drawSprites();
}