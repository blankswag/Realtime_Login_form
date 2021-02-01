class Player{
    constructor(){

    }

    getCount(){
        database.ref('playerCount').on("value" , (data) =>{
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update(
            {
                'playerCount' : count
            }  
            
        );
        console.log("updateCount");
    }

    updateName(playerName){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).update(
            {
                name: playerName
            }
        );
        console.log("updateName");
    }
}