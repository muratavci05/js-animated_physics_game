window.addEventListener("load", function(){
    const canvas = this.document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 1280;
    canvas.height = 720;

    ctx.fillStyle = "white";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";

    //To limit certain canvas settings only to specific draw calls we can wrap that drawing code between save and restore built -in canvas methods.
    class Player {
        constructor(game){
            this.game = game;
            this.collisionX = this.game.width * 0.5;
            this.collisionY = this.game.height * 0.5;
            this.collisionRadius = 50;
         }
        draw(context){
            context.beginPath();
            context.arc(this.collisionX, this.collisionY, this.collisionRadius,0, Math.PI * 2);
            context.save();
            context.globalAlpha = 0.5;
            context.fill();
            context.restore();
            context.stroke();

        } }

    class Game {
        constructor(canvas){
            this.canvas = canvas;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.Player = new Player(this);
            this.mouse = {
                x: this.width * 0.5,
                y: this.height * 0.5,
                pressed: false
            }


            // event listeners
            window.addEventListener("mousedown", e=>{
               this.mouse.x = e.offsetX;
               this.mouse.y = e.offsetY;
               this.mouse.pressed = true;
            });
            window.addEventListener("mouseup", e=>{
                this.mouse.x = e.offsetX;
                this.mouse.y = e.offsetY;
                this.mouse.pressed = false;
             });
             window.addEventListener("mousemove", e=>{
                this.mouse.x = e.offsetX;
                this.mouse.y = e.offsetY;
                console.log(this.mouse.x)
             });


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