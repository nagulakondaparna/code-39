  var ghost ;
  var ghostimage;
  var ghostjumping;
  var ground;
  var groundimage;
  var darkghost;
  var dghostimage;
  var iground;
  var greenghost;
  var greenghostimage;
  var rock1;
  var rockimage;
  var rockgroup
  var green;
  var greenimage;
  var greengroup;
  var start;
  var startimage;
  var group;
  var b
  var bimage;
  var ball;
  var ballimage;
  var pgroup;
  var greenghostgroup;
  var posiongroup;
  var posion;
  var posionimage;
  var START=2;
  var PLAY=1;
  var END=0;
  var gamestate=START;
  var lives;
  var survial;
  var s;
  var simage
  function preload(){
  ghostimage=loadAnimation("ghost-standing.png","ghost-jumping.png");
  ghostjumping=loadImage("ghost-jumping.png");
  simage=loadImage("su.png")
    
  groundimage=loadImage("ground.png");
    greenghostimage=loadImage("black ghost.png")
  ballimage=loadImage("ko.png")
  greenimage=loadImage("green.png")
    rockimage=loadImage("obstacle.png");
    startimage=loadImage("start.jfif");
  bimage=loadImage("o.jfif")
  dghostimage=loadAnimation("black ghost.png","ghost-standing-1.png");
    posionimage=loadImage("k.png");
  }

  function setup() {
    createCanvas(820,680)
    b=createSprite(10,340);
  b.addImage(bimage);
    b.scale=5
  b.visible=false;
  ghost=createSprite(50,420);
  s=createSprite(360,340);
    s.addImage(simage);
    s.visible=false;
    ghost.setCollider("circle",0,0,120)
    ghost.addAnimation("running",ghostimage);
    ghost.scale=0.5;
    
    ground=createSprite(50,500);
    ground.scale=0.7
    ground.addImage("display",groundimage);
  s.scale=0.5
    iground=createSprite(400,510,800,10);
  iground.visible=false;
  rockgroup=new Group();
    cloudgroup=new Group();
    group=new Group();
    pgroup=new Group();
    greengroup=new Group();
    greenghostgroup=new Group();
    posiongroup=new Group();
    start=createSprite(410,340);
    start.addImage(startimage);
    start.scale=0.7
    start.visible=false;
    lives=0;
    survial=0
    
  }
  function draw() {
              
  background("black");
    if(gamestate===START){
      s.visible=true
      textSize(30);
      text("Press SPACE to Jump",250,100);
      text("Press Enter To attack",250,150)
        if(keyWentDown("enter")){
  fball();
    }
        ghost.velocityY=ghost.velocityY+0.8
    if(keyDown("space")&&ghost.y>400){
  ghost.velocityY=-22
    }
      ghost.collide(iground);
      if(mousePressedOver(s)){
        gamestate=PLAY
      }
    }
    if(gamestate===PLAY){
      b.visible=true
      s.visible=false
  ground.velocityX=-4;
    gghost();
  b.velocityX=-2;
    if(b.x<180){
      b.x=420
    }
    ghost.collide(iground);

    if(ground.x<200){
      ground.x=400
    }
    ghost.velocityY=ghost.velocityY+0.8
    if(keyDown("space")&&ghost.y>400){
  ghost.velocityY=-22
    }
    if(rockgroup.isTouching(ghost)){
  gamestate=END

    }
    

    if(keyWentDown("enter")){
  fball();
    }
  if(group.isTouching(pgroup)){
    group.destroyEach();
    lives=lives+10
    
    
    pgroup.destroyEach();
  }
    //  if(posiongroup.isTouching(ground)){
    //    posiongroup.destroyEach();
    //  }
    if(group.isTouching(ghost)){
  gamestate=END;

    }
  if(rockgroup.isTouching(pgroup)){
    pgroup.destroyEach();
    
  }
  if(posiongroup.isTouching(ghost)){
  gamestate=END

  }
    if(pgroup.isTouching(greenghostgroup)){
      greenghostgroup.destroyEach();
      greengroup.destroyEach();
      posiongroup.destroyEach();
      pgroup.destroyEach();
  lives=lives+10
      
    }

    rock();
    dghost();
    }   
    else if(gamestate===END){
      greenghostgroup.destroyEach();
      greengroup.destroyEach();
      posiongroup.destroyEach();
      pgroup.destroyEach();
        ghost.destroy();
          rockgroup.destroyEach();
      pgroup.destroyEach();
      group.destroyEach();
      b.destroy();
      ground.destroy();
      textSize(50)
  stroke("yellow")
  text("Score:"+lives,300,200);
  text("GAME OVER",250,250)

      

        
      
      
      
      
      
      
      
    }
    drawSprites();


        
  }

  function rock(){
    if(frameCount%200===0){
      rock1=createSprite(800,480);
    
      rock1.setCollider("circle",0,0,140)
      rock1.addImage(rockimage)
      rock1.velocityX=-(6+frameCount/200)
      rock1.scale=0.4
      rockgroup.add(rock1);
      rock1.lifetime=110
  
      
    }
  }
  function dghost(){
    if(frameCount%500===0){
    darkghost=createSprite(800,420);
  darkghost.velocityX=-(10+frameCount/200)
    darkghost.scale=0.5;

    darkghost.addAnimation("diplay",dghostimage);
      darkghost.setCollider("circle",0,0,130)
      group.add(darkghost);
      darkghost.lifetime=90
  }
  }
  function fball(){
    ball=createSprite(200,200);
    ball.x=ghost.x;
    ball.y=ghost.y;
    ball.velocityX=15;
    ball.scale=0.1
  ball.addImage(ballimage);
    pgroup.add(ball)
    ball.lifetime=50
  }
  function  gghost(){
  if(frameCount%350===0){
    greenghost=createSprite(820,170);
    greenghost.addImage(greenghostimage);
  
    greenghost.scale=0.5
    greenghostgroup.add(greenghost);
    green=createSprite(800,220);

    green.scale=0.4
    green.addImage(greenimage);
    greengroup.add(green);
    posion=createSprite(800,200);
    posion.addImage(posionimage);

    posion.scale=0.1
    posion.velocityX=-11;
    posion.velocityY=4;
    posiongroup.add(posion)
  }
  }