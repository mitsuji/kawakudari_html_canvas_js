# kawakudari-html-canvas-js

This project implements part of the [std15.h](https://github.com/IchigoJam/c4ij/blob/master/src/std15.h) API (from [c4ij](https://github.com/IchigoJam/c4ij)) with [HTML Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), and [Kawakudari Game](https://ichigojam.github.io/print/en/KAWAKUDARI.html) on top of it.

It will allow programming for [IchigoJam](https://ichigojam.net/index-en.html)-like targets using a JavaScript programming language.
```
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

    document.addEventListener("keydown",function(e){
        if (e.key === "ArrowLeft")  --x;
        if (e.key === "ArrowRight") ++x;
    });

    setInterval(function(){
        if (!running) return;
        if(frame % 5 == 0) {
            std15.locate(x,5);
            std15.putc('0'.charCodeAt(0));
            std15.locate(Math.floor(Math.random() * 32.0),23);
            std15.putc('*'.charCodeAt(0));
            std15.scroll();
            if(std15.scr(x,5) != 0) running = false;
        }
        std15.draw();
        ++frame;
    },16);
}
```

## Prerequisite

Download and install web browser which supports HTML Canvas API.
* [Google Chrome](https://www.google.com/chrome/)
* [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)


## Preparation

* Start browser application.
* Open directory of this project in the file manager application like 'Explorer' or 'Finder'.


## How to use

To run it
```
Drug 'kawakudari.html' to the browser window.
```

To restart it
```
Reload the browser.
```




