var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}


var btn = document.createElement("button");
btn.textContent = "random color generator";
body.appendChild(btn);


/*function RGBColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor;   
  }

function randomColors(){
    color1.value = RGBColor();
	color2.value = RGBColor();
	setGradient();
}*/

/*var rgbColorpart1 = Math.floor(Math.random() * 256);
var rgbColorpart2 = Math.floor(Math.random() * 256);
var rgbColorpart3 = Math.floor(Math.random() * 256);*/


/*var rgbColor1 = function (){
    return "rgb (" + rgbColorpart1 + ","+ rgbColorpart2 + "," + rgbColorpart3 + ")";
};

var rgbColor2 = function (){
    return "rgb (" + rgbColorpart1 + ","+ rgbColorpart2 + "," + rgbColorpart3 + ")";
};*/

/*function randomColors(){
    color1.value = rgbColor1;
	color2.value = rgbColor2;
	setGradient();
}*/


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
function randomColors(){
    color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

var btnReset = document.createElement("button");
btnReset.textContent = "reset";
body.appendChild(btnReset);

function resetGradient(){
    body.style.background = "linear-gradient(to right, " + "red" + ", " + "yellow" + ")";
    
    css.textContent = body.style.background + ";";
}


btn.addEventListener("click", randomColors);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btnReset.addEventListener("click", resetGradient);