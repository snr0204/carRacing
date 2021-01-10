//this class will hold all the properties related to the players (Name , distance etc)

class Player {

    constructor(){
        this.distance = 0;
        this.name = null;
        this.index = null;
        this.rank = null;
    }
    getRank(){
        database.ref("carsAtEnd").on("value",(d) => {
            this.rank = d.val()
        })


        
    }
    static updateRank (r){
database.ref("/").update({
    carsAtEnd:r 
})
    }
    readCount(){

        var r = database.ref("playerCount");
        r.on("value" , (d)=> {
pc = d.val ()
        })
    }
    updateCount(c){
database.ref("/").update({
    playerCount:c
})
    }
    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name: this.name, 
            distance:this.distance
        })
    }
    static getInfoAboutPlayers(){
        var r = database.ref("players")
        r.on("value" , (d) =>{
            info=d.val()
        })
        
    }
}

