//declaring the game variables
  var wall,bulletThickness;
  var bullet,BulletSpeed,BulletWeight;
  var damage;
  var BulletRightEdge, wallLeftEdge;

//declaring the setup function

function setup() 
{
    createCanvas(1600,400);
  
    bulletThickness = random(22,83);

    BulletWeight = random(30,52);

    BulletSpeed = random(223,321);

    bullet=createSprite(200,200,bulletThickness,5);
    bullet.shapeColor = "white";
    bullet.velocityX = BulletSpeed;

    wall = createSprite(1200,200,bulletThickness,400);
    wall.shapeColor = "blue";
}

//declaring the draw() function
function draw()
{
    background("black");

    fill("blue");
        //stroke("pink");
        textSize(16);
        textFont("Comic Sans MS");
    text("Test Statistics : ",60,90);
    text("Speed of the bullet : "+(Math.round(BulletSpeed))+" km/h",60,120);
    text("Weight of the bullet : "+(Math.round(BulletWeight))+" grams",60,150);
    text("Thickness of the bullet : "+(Math.round(bulletThickness))+" nanometer(s)",60,180);
    text("Thickness of the wall : "+(Math.round(bulletThickness))+" nanometer(s)",60,210);
    text("DAMAGE TO THE WALL : "+(Math.round(damage))+"%",60,240);
    
    BulletHasCollided(bullet,wall);
    if(BulletHasCollided(bullet,wall)) {
      bullet.velocityX = 0;
      
      damage = (0.5*BulletWeight*BulletSpeed*BulletSpeed) / (bulletThickness*bulletThickness*bulletThickness)

      if(damage>10) {
        wall.shapeColor = rgb(255,0,0);
        
        fill("red");
        //stroke("pink");
        textSize(20);
        textFont("Comic Sans MS");
        text("The wall is INEFFECTIVE against the bullet😧😧😥 !!!",400,150);

      }

      if(damage<=10) {
        wall.shapeColor = rgb(0,255,0);

        fill("green");
        //stroke("white");
        textSize(20);
        textFont("Comic Sans MS");
        text("The wall is EFFECTIVE against the bullet😁😁😎 !!!",400,150);
      }

    }
    drawSprites();
  }


  function BulletHasCollided(bullet,wall) {

    /* if((wall.x-bullet.x <= 0.1 ) ) {
        return true;
    }

    else {
      return false;
    } */
    
    BulletRightEdge = bullet.x+bullet.width;
    wallLeftEdge = wall.x;

    if(BulletRightEdge >= wallLeftEdge) {
      return true;
    }

    else{
      return false;
    }

  }
