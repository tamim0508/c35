class Form {
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(150,0);

        var input = createInput("Name");
        input.position(200,100);
        var button = createButton("Play");
        button.position(230,210);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement("h2");
            greeting.html("Hello" + name);
            greeting.position(115,150);
        });
    }
}