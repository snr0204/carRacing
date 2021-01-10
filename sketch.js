var database,f , player , game;
var pc , gs = 0;
var info
var c1 , c2 , c3 , c4 , cars;
var car1 , car2 , car3 , car4 , track;
//var carrank;


function preload(){

track = loadImage("images/track.jpg")
car1 = loadImage("images/car1.png")
car2 = loadImage("images/car2.png")
car3 = loadImage("images/car3.png")
car4 = loadImage("images/car4.png")



}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth - 50 , displayHeight - 100);
game = new Game()
game.readState()
game.start()

  



}

function draw(){
  background("white");
  if(pc === 4){
    game.updateState(1)
  }
    if(gs === 1){
      clear()
      game.play()

      
    }

    if (gs === 2){
      game.end()
    }
  
}
