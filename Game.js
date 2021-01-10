class Game {
    constructor(){

    }
    readState(){
        var r = database.ref("gameState");
        r.on("value", (a)=> {
            gs = a.val ()
        })

        
        
    }
    updateState(s){
        database.ref("/").update({
            gameState:s
        }

        )
    }
    start(){
        if(gs === 0){
            player = new Player()
            player.readCount()
            f = new Form()
            f.display()
        }
        //creating Cars
        c1 = createSprite();
        c1.addImage("c1",car1);

        c2 = createSprite();
        c2.addImage("c2",car2);

        c3 = createSprite();
        c3.addImage("c3",car3);

        c4 = createSprite();
        c4.addImage("c4",car4);

        cars = [c1 , c2 ,c3 , c4 ];
    }
    play(){
        background("brown")
        image(track,0,-displayHeight*4, displayWidth,displayHeight*5)
player.getRank()
        f.welcome.hide()
        Player.getInfoAboutPlayers()
        if(info!= undefined){
            var index = 0
            var x = 170
            var y = 0
            for(var i in info ){
index = index+1 
x = x+210
y = displayHeight - info[i].distance
cars [index - 1].x = x
cars [index - 1].y = y
// condition to check the active player in the window                                     
if(index === player.index ){
    fill("yellow")
    ellipse(x,y,80,50)
cars [index - 1].shapeColor = "cyan"
camera.position.y = cars[index-1].y
camera.position.x = displayWidth/2
}

 }
        }
if(keyDown("up")&& player.distance< 4550 && player.index != null){
    player.distance+= 50
    player.update()
}

if(player.distance> 4500){

    gs = 2
    player.rank += 1
    Player.updateRank(player.rank)
}


drawSprites()
        }
        end(){
            console.log ("GAME OVER")
            console.log(player.rank)
        }
    }


