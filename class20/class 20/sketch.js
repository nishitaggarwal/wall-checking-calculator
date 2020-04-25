
var  bullet1  , bullet2 ,bullet3,bullet4, wall ;
 var fm = randomNumber(30,95) ;

// var rand = randomNumber(30,95);

function setup() {

  createCanvas(1600,700);
 

  bullet1  =  createSprite(100, 100, 15, 10);
  bullet1.velocityX = 22 ;
  bullet1.shapeColor = "yellow "

  

  bullet3  =  createSprite(100, 500, 15, 10);
  bullet3.velocityX = 22  ;
  bullet3.shapeColor = " green  "

 



  wall = createSprite (1250,100, 70 ,350);
 // wall.shapeColour  = " Blue " ;
  //wall.shapeCsolour(80,80,80);
  wall.shapeColor = "white";

  wall2 = createSprite (1200,500, 40 ,350);
  // wall.shapeColour  = " Blue " ;
   //wall.shapeCsolour(80,80,80);
   wall2.shapeColor = "white";
 
    
///text.fill = "red";
}

 function draw() {

   background( "black");  
    

   text(" bullet A  ",100 ,70 );
   text(" free to go wall ",100 ,100 )
   text(" bullet weight = 32 ",300 ,190 )
   text(" SPEED = 223 ",200 ,200 );
  


   //text(" SPEEED = 80 ",800 ,270 )

 text(" Bullet B  ",400 ,370 );
   text(" disgusting wall  ",400 ,400 )
   text(" bullet weight = 32 ",500 ,390 )
   text(" SPEED = 223 ",520 ,370 );

   text(" wall width = 40  ",400 ,420 );
   text(" wall width = 70  ",300 ,70 )




  bullet3.collide(wall);
  // bullet4.collide(wall);
     bullet1.collide(wall);
    //bullet2.collide(wall);
    //bullet1.collide(wall);

    bullet3.collide(wall2);
  
     bullet1.collide(wall2);
   



if( bullet3.x>1150){

  wall2.shapeColor = "red";
  text ("deformation = 12.43 ",300,570);
  
  var broken1 = createSprite(1170,106,2,3);
  
  }
 

    if( bullet1.x>1150){

      wall.shapeColor = " green ";
      text ("deformation = 3.68 ",320,90);
      var broken = createSprite(1170,306,2,3);
      }

  drawSprites();
}






