var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var pen = canvas.getContext("2d");

var x = 0;
var y = 0;
var width = 30;
var height = 30;
var velocityX = 0;
var velocityY = 0;

var areaX = 300,
    areaY = 300;
var areaWidth = 300,
    areaHeight = 300;

function update() {
    pen.clearRect(0, 0, canvas.width, canvas.height);

    pen.beginPath();
    pen.rect(areaX, areaY, areaWidth, areaHeight);

    var playerLeft = x,
        playerRight = x + width;
    var playerTop = y,
        playerBottom = y + height;

    var areaLeft = areaX,
        areaRight = areaX + areaWidth;
    var areaTop = areaY,
        areaBottom = areaY + areaHeight;

    if (
        ((playerLeft <= areaRight && areaLeft <= playerLeft) ||
            (playerRight <= areaRight && areaLeft <= playerRight)) &&
        ((playerTop <= areaBottom && areaTop <= playerTop) || (playerBottom <= areaBottom && areaTop <= playerBottom))
    ) {
        pen.fillStyle = "red";
    } else {
        pen.fillStyle = "orange";
    }
    pen.fill();

    x += velocityX;
    y += velocityY;
    pen.beginPath();
    pen.rect(x, y, width, height);
    pen.fillStyle = "black";
    pen.fill();

    window.requestAnimationFrame(update);
}

update();

window.onkeydown = function (e) {
    if (e.key === "ArrowLeft") {
        velocityX = -5;
    }
    if (e.key === "ArrowRight") {
        velocityX = 5;
    }
    if (e.key === "ArrowUp") {
        velocityY = -5;
    }
    if (e.key === "ArrowDown") {
        velocityY = 5;
    }
};

window.onkeyup = function (e) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        velocityX = 0;
    }
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        velocityY = 0;
    }
};
