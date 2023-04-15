function set(){
    setTimeout(function set(){
        document.getElementById("pop").classList.add("popUp");
    },1000);
}
var diffLevel;
var compNum;
var noOfLives;
var initialchances;
var mulfac;
var hearts = ["","❤","❤❤","❤❤❤","❤❤❤❤","❤❤❤❤❤","❤❤❤❤❤❤","❤❤❤❤❤❤❤","❤❤❤❤❤❤❤❤","❤❤❤❤❤❤❤❤❤","❤❤❤❤❤❤❤❤❤❤"]
function level(diffLevel){
    document.getElementById("pop").classList.add("popDown");
    document.getElementsByClassName("main")[0].classList.remove("popDown");
    document.getElementsByClassName("main")[0].classList.add("popUp");
    var rangeplace = document.getElementById("range");
    if(diffLevel == "easy"){
        compNum = Math.ceil(Math.random()*10);
        noOfLives = 3;
        rangeplace.innerHTML = "Iam thinking of a number between 1-10";
        document.getElementById("lifes").innerHTML = " "+ hearts[noOfLives];
        mulfac = 50;
        }
    else if(diffLevel == "medium"){
        compNum = Math.ceil(Math.random()*50);
        noOfLives = 5;
        rangeplace.innerHTML = "Iam thinking of a number between 1-50";
        document.getElementById("lifes").innerHTML = " "+ hearts[noOfLives];
        mulfac = 75;
    }
    else{
        compNum = Math.ceil(Math.random()*100);
        noOfLives = 10;
        rangeplace.innerHTML = "Iam thinking of a number between 1-100";
        document.getElementById("lifes").innerHTML = "  "+hearts[noOfLives];
        mulfac = 100;
    }
    initialchances = noOfLives;
    console.log(compNum,noOfLives,initialchances);
    
}
function check(){
    var num = document.getElementById("guessNum").value;
    console.log(noOfLives);
    if(noOfLives > 0 ){
        noOfLives = noOfLives -1;
        var hintplace = document.getElementById("hint");
        if(num == compNum ){
            document.getElementsByClassName("main")[0].classList.add("popDown");
            document.getElementsByClassName("restart")[0].classList.remove("popDown");
            document.getElementsByClassName("restart")[0].classList.add("popUp");
            document.getElementById("occ").innerHTML = "Hurry! 🥳 You Have Guessed It correctly in " + (initialchances - noOfLives) + " guesses";
            document.getElementById("score").innerHTML = "Your Score : " + ((noOfLives+1)*mulfac);
        }
        else if(num>compNum){
            hintplace.innerHTML = "Hint - The number is Lesser than " + num ;

        }
        else{
            hintplace.innerHTML = "Hint - The number is Greater than " + num ;
        }
        document.getElementById("lifes").innerHTML = "  "+hearts[noOfLives];
        document.getElementById("guessNum").value = null;
        document.getElementById("guessNum").focus();
    }
    if(noOfLives == 0 && num != compNum){
        document.getElementsByClassName("main")[0].classList.add("popDown");
            document.getElementsByClassName("restart")[0].classList.remove("popDown");
            document.getElementsByClassName("restart")[0].classList.add("popUp");
            document.getElementById("occ").innerHTML = "OOPS! 😭 no chances left. The Correct number is " + compNum;
            document.getElementById("score").innerHTML = "Your Score : 0";
    }
   
}
function playagain(){
    setTimeout(function playagain(){location.reload();},1000);
}

