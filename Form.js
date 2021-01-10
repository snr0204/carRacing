/*
html is used to create any content like a form on a web page 
An html contains elements which defines the structuor of a page
This model of a html page is called DOM (Document object model)
*/
class Form {
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("")
         this.button = createButton("Start")
         this.welcome = createElement("H1")
         this.button1 = createButton("Reset")
    }
    display(){
this.title.html("A car racing game")
this.title.position(130,50)
 
this.input.position(200,130)
this. button.position(200,200)
 this.button1.position(10,10)
 this.button1.mousePressed(()=>{
     game.updateState(0)
     player.updateCount(0)
     Player.updateRank(0)
 })
 
this.button.mousePressed(()=> {
   this.input.hide()
   this.button.hide()
     player.name = this.input.value()
     pc = pc+1
     player.index = pc 
     player.updateCount(player.index)
    this.welcome.html("Welcome"+player.name)
   this.welcome.position(100,100)
    
})


    }

}