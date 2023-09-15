var player
var platforms,platformGroup
var score

function preload(){

}

function setup() {
 createCanvas(600,600)
 player=createSprite(300,500,10,10)
 player.shapeColor="blue"
 player.velocityY=0
 platformGroup = new Group()
 score=0
}

function draw() {
 background("gray")
 mousePressed()
 frames()
 text(400,-50, "Score:"+score)
 if (platformGroup.isTouching(player)){
    score=score+1
 }
 player.collide(platformGroup);
 drawSprites()
}

function mousePressed(){
if(keyDown("ENTER")){
player.velocityY=1
}
if(keyDown("UP_ARROW")){
player.velocityY=-3
}
player.velocityY=player.velocityY+0.2
if (keyDown("RIGHT_ARROW")){
player.x=player.x+5
}
if (keyDown("LEFT_ARROW")){
player.x=player.x-5
}
}  
function frames (){
if (frameCount%60===0){
    platforms = createSprite(200,400,40,10)
    platforms.velocityX=-2
    platforms.scale = 0.7
    platforms.y = Math.round(random(300,400))
    platforms.shapeColor="red"
    platformGroup.add(platforms)
}
}