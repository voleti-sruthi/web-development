var redVal;
var greenVal;
var blueVal;
function getColour(){
    redVal = parseInt(document.getElementById("redPicker").value);
    greenVal = parseInt(document.getElementById("greenPicker").value);
    blueVal = parseInt(document.getElementById("bluePicker").value);
    var str = "rgb(" + redVal+","+greenVal+","+blueVal+")";
    document.getElementById("colorPreview").style.backgroundColor = str;
    if(document.getElementById("decimal").checked){
        document.getElementById("code").innerHTML = str;
    }
    else{
        str = "#" + redVal.toString(16)+""+greenVal.toString(16)+""+blueVal.toString(16);
        document.getElementById("code").innerHTML = str;
    }
}

var redfun = document.querySelector("#redPicker");
redfun.addEventListener("input",getColour);
var greenfun = document.querySelector("#greenPicker");
greenfun.addEventListener("input",getColour);
var bluefun = document.querySelector("#bluePicker");
bluefun.addEventListener("input",getColour);