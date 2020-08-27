//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dog1img, dogimg;
var database;

function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png");
  dog1img=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage("dog",dogimg);
  dog.scale=0.15;

  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  

  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage("happydog",dog1img);
  }

  drawSprites();

  //add styles here
  fill("red");
  textSize(18);
  text('Note: Press Up Arrow Key to feed Drago milk', 70,30);

  fill("red");
  textSize(18);
  text('Food Remaining: ' + foodStock, 0,320);

}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//function to write values in DB
function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}

