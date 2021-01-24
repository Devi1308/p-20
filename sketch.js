var  Tom , tomImg,tomImg2,tomImg3,tomImg4;
var Jerry , jerryImg,jerryImg2,jerryImg3,jerryImg4;
var ground,groundImg;
var edge;

function preload() {
    //load the images here
    tomImg=loadAnimation("images/tomOne.png");
    jerryImg=loadAnimation("images/jerryOne.png");
    groundImg=loadAnimation("images/garden.png");
    jerryImg2=loadAnimation("images/jerryTwo.png");
    tomImg2=loadAnimation("images/tomTwo.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
    tomImg3=loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    ground=createSprite(500,400,1000,800);
    ground.addAnimation(groundImg);
    ground.scale=1;
   // ground.x=ground.width/2;
    

    Tom=createSprite(800,800,30,30);
    Tom.addAnimation(tomImg);
    Tom.scale=0.1;

    Jerry=createSprite(300,700,30,30);
    Jerry.addAnimation(jerryImg);
    Jerry.scale=0.1;

    edge=createEdgeSprites;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    
      
      //Tom.x = World.mouseX;
     // Tom.y = World.mouseY; 
    if(Tom.x - Jerry.x ===  Tom.width/2 - Jerry.width/2) {
      Jerry.addAnimation (jerryImg2);
      Tom.addAnimation(tomImg2); 
    }
    else { 
      Jerry.addAnimation (jerryImg);
      Tom.addAnimation(tomImg);
        } 
      
    drawSprites();
}







function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
  Tom.velocityX=-5;
  Tom.addAnimation("tomRunning",tomImg2);
  Tom.changeAnimation("tomRunning");

  jerryImg.addAnimation("jerryRunning",jerryImg2);
  jerryImg.changeAnimation("jerryRunning");
}

}
