

function welcome() {

let userName = document.querySelector(".userName");
let welcomeText = document.querySelector(".welcome-text");
let welcomeArea = document.querySelector(".welcome-area");


    welcomeText.innerHTML = ""
    welcomeText.innerHTML = "Hello! " + userName.value;
    welcomeArea.style.display = "none";
    
}

function quizArea() {
    
    let quizArea = document.getElementsByClassName("quiz-are");
    for (quizArea of quizArea);

    quizArea.style.display[0] = "block";
    
    

}

function score() {
    let score = 0;
    if (document.getElementById("correct1").checked){
        score++;
     alert("naice:" + score);
     correctAswer();
    } else {
        alert("not");
        incorrectAaswer();
    }

}

function correctAswer() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incorrectAaswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}








