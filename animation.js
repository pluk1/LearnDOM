var box1 = document.getElementById("box1");
var x = 0;
var y = 0;
var docSize = document.getElementById("container").offsetHeight;

console.log(docSize);

var direction = 0;

if (direction === 0) {
    var t = setInterval(moveDownRight, 15);

} else if (direction === 1) {
    t = setInterval(moveUpRight, 15);
}


function moveDownRight() {
    if (y >= docSize - box1.offsetHeight) {
        clearInterval(t);
        direction = 1;
        t = setInterval(moveUpRight, 15);
    }
    x++;
    y++;
    box1.style.left = x + "px";
    box1.style.top = y + "px";
}

function moveUpRight() {
    console.log(x);
    console.log(y);

    if (y === 0) {
        clearInterval(t);
        direction = 0;
        //t = setInterval(moveUpRight, 15);
    }

    y--;
    x++;
    box1.style.left = x + "px";
    box1.style.top = y + "px";
}

