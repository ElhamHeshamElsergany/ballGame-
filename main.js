var ball = document.getElementById('ballImg');
ball.style.position = "absolute";
ball.style.left = "0px";
ball.style.top = "0px";


var boundX = window.innerWidth;
var boundY = window.innerHeight;

var speed = 10;
var x = 1;
var y = 1;

function myMove() {
    var positionX = ball.offsetLeft;
    var positionY = ball.offsetTop;

    if (positionX + ball.offsetWidth > boundX || positionX < 0) {
        x *= -1;
    }

    if (positionY + ball.offsetHeight > boundY || positionY < 0) {
        y *= -1;
    }

    ball.style.left = ball.x + (speed * x) + 'px';
    ball.style.top = ball.y + (speed * y) + 'px';

    setTimeout(myMove, 50);
}

myMove();


