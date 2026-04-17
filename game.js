var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var player1 = new GameObject();
var ball = new GameObject();     // ball varible
var keys = {};

// ball thingy shows 
ball.x = 200;
ball.y = 200;
ball.radius = 20;
ball.color = "magenta";

// ball vecolity?
ball.vx = 4;
ball.vy = 4;


// console.log(document.getElementById("canvas"));

// player line thijngy shows
player1.x = 20;
player1.y = canvas.height / 2 - 50;
player1.width = 20;
player1.height = 100;
player1.color = "blue";
player1.speed = 3;


// makes sure that when player presses a key, the system knows (dyslexia)
document.addEventListener("keydown", function(e) 
{
    keys[e.key] = true;
});

document.addEventListener("keyup", function(e) 
{
    keys[e.key] = false;
});


setInterval(animate, 1000 / 60);

function animate() 
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    //YAY THE BALL WORKS  BUUUTTTT it doesnt hit the slider
    
    // ball movement 
    ball.x += ball.vx; // keep messing up with putting x instead of v
    ball.y += ball.vy;


    // // i put 2, thats why it brookkkkeeee ughhhh
    // ball.x += ball.vx; 
    // ball.y += ball.vy;

    // bounce off walls
    if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) 
    {
        ball.vx *= -1;
    }

    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) 
    {
        ball.vy *= -1;
    }





    // this entire line of code is broken for some reason.
// ===================
    // if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0)
    // {
    //    // ball.vx = -ball.vx; // messed up, put xy instead and didn't show on canvas

    //    // ball.vx = *= -1; this breaks?????
    // }

    // if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0)
    // {
    //    //  ball.xy = -ball.vy; // same with this one too. xy insead of vy
       
    //    // ball.vy = *= -1;  
    // }
// ===================


    //keys up and down for player
    if (keys["w"] && player1.y > 0)
    {
        player1.y -= player1.speed;
    }

    if (keys["s"] && player1.y + player1.height < canvas.height)
    {
        player1.y += player1.speed;
    }

    //player bounding
    if (player1.y < 0)
    {
        player1.y = 0;
    }
    
    if (player1.y + player1.height > canvas.height)
    {
        player1.y = canvas.height - player1.height;
    }

    player1.drawRect(context);
    ball.drawCircle(context); 
}