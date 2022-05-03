var nave;
var inimigo;
var inimigo_img;

function setup(){
  createCanvas(600,600);
  nave = new Nave();
  inimigos();
}

function preload(){
inimigo_img = loadImage("images/naveInimiga.png");
}

function draw(){
  background('grey');
  nave.show();

  

  if(keyDown("a") || keyDown("A")){
    

    if(nave.x > 1){
      nave.x = nave.x - 5;
    }
  }

  if(keyDown("d") || keyDown("D")){
    
    if(nave.x < 472){
      nave.x = nave.x + 5;
    }
  }

  drawSprites();
}

function inimigos(){
  inimigo = createSprite(285,-75);
  inimigo.addImage(inimigo_img);

  if(inimigo.y < 100){
  inimigo.velocityY = 5;
 }

 else{
   inimigo.velocityY = -5;
 }


 
}

