

function welcome() {

let userName = document.querySelector(".userName");
let welcomeText = document.querySelector(".welcome-text");
let welcomeArea = document.querySelector(".welcome-area");

    welcomeText.innerHTML = ""
    welcomeText.innerHTML = "Hello! " + userName.value;
    welcomeArea.style.display = "none";
    
}


document.getElementsByClassName("quiz-area")[0].style.display = "block";

function next(id) {

    document.getElementsByClassName("quiz-area")[id-1].style.display = "none";
    document.getElementsByClassName("quiz-area")[id].style.display = "block";

    
}


function score() {
    let score = 0;
    
    if (document.getElementById("correct1").checked){
        score++;
    }
    if (document.getElementById("correct2").checked){
        score++;
    }

    if (document.getElementById("correct3").checked){
        score++;
    }

    if (document.getElementById("correct4").checked){
        score++;
    }

    if (document.getElementById("correct5").checked){
        score++;
    }
     alert("naice:" + score);
     correctAswer();
    } else {
        alert("not");
        incorrectAaswer();
     

}

function correctAswer() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incorrectAaswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}








