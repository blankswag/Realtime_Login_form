class Game{
    constructor(){}

    //function definition/method
    //reading gameState value from firebase
    // ()=>{}
    getState(){
        database.ref('gameState').on( "value", (data)=>{
            gameState = data.val();
        });
    }

    //updating to firebase
    //JSON {'key': value}
    update(state){
        database.ref('gameState').update(
            {
                'gameState': state
            }
        );
    }

    start(){
        if(gameState === 0){
            //new player object should be registered.
            player = new Player();
            player.getCount();
            //form object of Form class
            form = new Form();
            //calling display method of Form class/form obj
            form.display();
        }
    }
}