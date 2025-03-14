window.addEventListener("load", function(){
    const canvas = this.document.getElementById("canvas1");
    canvas.width = 1280;
    canvas.height = 720;

    class Player {
        constructor(game){
            this.game = game;
            this.collisionX = this.game.width * 0.5;
            this.collisionY = this.game.height * 0.5;
            this.collisionRadius = 30;
        }

        draw(context){
            context.beginPath();
            context.arc(this.collisionX, this.collisionY, 50, 0, Math.PI * 2
            this.collisionRadius, 0, Math.PI * 2);
            context.stroke();

        }
    }

    class Game {
        constructor(canvas){
            this.canvas = canvas;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.Player = new Player(this);
        }
        render(context){
            this.Player.draw(context);
        }
    }

    const game = new Game(canvas);
    game.render(ctx);
    console.log(game);

    function animate(){

    }

});