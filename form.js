class Form{
    constructor(){
        
    }

display(){
    var title = createElement('h2' ,'Car Racing Game');
    title.position(130, 0);
    var input = createInput().attribute('placeholder' , 'NAME');
    input.position(130,160);
    var button = createButton('play');
    button.position(250,200);
  

    //click - mousePressed 
    button.mousePressed(
        // fun in library fun -callback
        // fun with no name anonymous fun
        function (){
            input.hide();
            button.hide();

            playerCount = playerCount + 1;
            player.updateCount(playerCount);

            var name = input.value();
            player.updateName(name);

            var greeting = createElement('h3' ,'Hello Racer'+ name );
            greeting.position(130, 160);
        }
    )
}

}
