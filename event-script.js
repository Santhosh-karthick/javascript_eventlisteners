document.getElementById("img1").addEventListener("click",mouseClick);
function mouseClick()
{
    document.getElementById("img1").src="Peekaboo2.jpg";
}
var para=document.querySelector('p');
document.getElementById("circle").addEventListener("mouseover",mouseOver);
document.getElementById("circle").addEventListener("mouseout",mouseOut);
function mouseOver()
{
    document.getElementById("circle").style.height="400px";
    document.getElementById("circle").style.width="400px";
    document.getElementById("circle").style.borderRadius="50%";
    para.style.fontSize="40px";
}
function mouseOut()
{
    document.getElementById("circle").style.height="200px";
    document.getElementById("circle").style.width="200px";
    document.getElementById("circle").style.borderRadius="50%";
    para.style.fontSize="20px";
}

//document.body.addEventListener("click",changeColors);
document.getElementById("background").addEventListener("click",changeColors);
function changeColor()
{
    document.getElementById("background").style.backgroundColor="lightblue";
}
var x;
function changeColors()
{
    x = 1;
    setInterval(change, 1000);
}

function change() {
    if (x === 1) {
        color = "#00DDFF";
        x = 2;
    } else if(x==2) {
        color = "#5cbdb9";
        x = 3;
    }
    else if(x==3)
    {
        color="#c89666";
        x=1;
    }

    document.getElementById("background").style.backgroundColor = color;
}