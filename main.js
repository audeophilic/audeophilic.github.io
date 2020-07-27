function mouseOverAction(btnId)
{
    console.log("mouseOverEvent on " + btnId);
    document.getElementById(btnId).style.backgroundColor = "#425dff";
    //this.style.backgroundColor = "white";
}

function mouseOutAction(btnId)
{
    console.log("mouseOutEvent on " + btnId);
    document.getElementById(btnId).style.backgroundColor = "#767676";
}

var pulser;
let click = 0;
function pulse(){
    click++;
    //console.log(click % 2);
    if(click % 2 == 1) pulser = setInterval(pulseInternal, 1000);
    else clearInterval(pulser);
}
function pulseInternal(){
    
    if (document.body.style.backgroundColor == "white")
        document.body.style.backgroundColor = "red";
    else document.body.style.backgroundColor = "white";
}