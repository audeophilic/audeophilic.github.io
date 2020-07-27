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