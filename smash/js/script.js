var navState = false;
var menuState = false;
function run() {
    navState = !(navState);
    var v = document.getElementById("ms");
    console.log(v);
    if(navState == true) {
        console.log("hello");
        document.getElementById("ms").style.display = "block";
        if(menuState == true) {
            menu();
        }
    }
    else {
        document.getElementById("ms").style.display = "none";
        console.log("bye");
        p.innerHTML = " ";
    }
}

function menu() {
    menuState = !(menuState);
    var t = document.getElementById("mn");
    if(menuState == true) {
        t.style.display = "flex";
        if(navState == true) {
            run();
        }
    } else {
        t.style.display = "none";
    }
}

var p = document.getElementById('srch');
p.addEventListener('click', run, false);

var s = document.getElementById("btn");
s.addEventListener('click', menu, false);
