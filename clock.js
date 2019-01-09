function printTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    document.body.innerHTML = "<h1>" + h + ":" + m + ":" + s + "</h1>";

}

setInterval(printTime,1000);