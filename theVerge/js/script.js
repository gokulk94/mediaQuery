var v = document.getElementById('menu');
var p = document.getElementById('slide-menu');
var k = document.getElementById('slide-article');
var f = document.getElementById('ar');
var runner = false;
function run() {
    runner = !(runner);
    if(runner == true) {
        p.className = "menu"+" show-left";
        console.log(p);
    } else {
        p.className = "menu"+" hide-left";
    }
}

v.addEventListener('click', run, false);
var s = document.getElementById('slide-menu');
s.addEventListener('click', run, false);

var art = false;
function art_run() {
    art = !(art);
    if(art == true) {
        // f.style.display = "block"
        f.className = "ar"+" show-right";
        // f.style.position ="absolute"
    } else {
        // f.style.display = "none";
        f.className = "ar"+" hide-right";
        // f.style.position = "fixed";
    }
}
k.addEventListener('click', art_run,false);
f.addEventListener('click', art_run,false);
