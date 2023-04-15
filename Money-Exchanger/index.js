var currancy = ["India","USA","Europe","Dubai","Africa"]
var convertion = [[1,0.012,0.011,0.045,0.22],[81.95,1,0.92,3.67,18.46],[89.19,1.09,1,4.00,20.09],[22.33,0.27,0.25,1,5.03],[4.45,0.054,0.050,0.20,1]];
function changeToFlag(country){
    var toFlaglink = "images/"+ country+".jpg";
    document.getElementById("toflag").src = toFlaglink;
}
function changeFromFlag(country){
    var fromFlaglink = "images/"+ country+".jpg";
    document.getElementById("fromflag").src = fromFlaglink;
}

function exchange(){
    var fromIndex = currancy.indexOf(document.getElementById("fromCurr").value);
    var toIndex = currancy.indexOf(document.getElementById("toCurr").value);
    var principalAmount = parseFloat(document.getElementById("amount").value);
    var exchangedAmount = principalAmount*convertion[fromIndex][toIndex];
    document.getElementById("converted").innerHTML = "converted Amount = " + exchangedAmount;
}
function reset(){
    document.getElementById("fromflag").src = "images/India.jpg";
    document.getElementById("fromCurr").value = "India";
    document.getElementById("toflag").src = "images/USA.jpg";
    document.getElementById("toCurr").value = "USA";
    document.getElementById("amount").value = 0;
    document.getElementById("converted").innerHTML = null;
}
function swaped(){
    var firstflag = document.getElementById("fromCurr").value;
    var secondflag = document.getElementById("toCurr").value;
    document.getElementById("toCurr").value = firstflag;
    document.getElementById("fromCurr").value = secondflag;
    changeFromFlag(secondflag);
    changeToFlag(firstflag);
    exchange();
}