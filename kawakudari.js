window.onload = function(e){

    var canvas = document.getElementById("main");
    var context = canvas.getContext('2d');
    if (!context) {
        alert("HTML canvas 2d context is not supported in your environment...")
        return;
    }

    var std15 = newStd15(context,512,384,32,24);
    var frame = 0;
    var x = 15;
    var running = true;

    document.addEventListener("keydown",function(e) {
        if (e.key === "ArrowLeft")  x--;
        if (e.key === "ArrowRight") x++;
    });

    setInterval(function() {
        if (!running) return;
        if (frame % 5 == 0) {
            std15.locate(x,5);
            std15.putc('0'.charCodeAt(0));
            std15.locate(Math.floor(Math.random() * 32.0),23);
            std15.putc('*'.charCodeAt(0));
            std15.scroll(DIR_UP);
            if (std15.scr(x,5) != 0) {
                std15.locate(0,23);
                std15.putstr("Game Over...");
                std15.putnum(frame);
                running = false;
            }
        }
        std15.drawScreen();
        ++frame;
    },16);
}
