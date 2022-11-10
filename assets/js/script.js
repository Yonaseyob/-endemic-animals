

const quizData = [
{
    question: "how many players are in a football team?",
    option1: "2",
    option2: "4",
    option3: "11",
    option4: "5",
    correctAswer: "11"
},
{
    question: "how are you?",
    option1: "2",
    option2: "4",
    option3: "11",
    option4: "5",
    correctAswer: "11"
},
{
    question: "what is my age?",
    option1: "2",
    option2: "4",
    option3: "11",
    option4: "5",
    correctAswer: "11"
},
]

const quizContainer = document.getElementById("quiz-container");
var randomQuiz = quizData[Math.floor(Math.random()*quizData.length)];

function displayQuiz (quiz) {

     quizContainer.innerHTML = `
     <div class = "quiz-area">
        <p>${quiz.question}</p><hr>
        <input type="radio" name=${quiz.option1}>${quiz.option1}<br>
        <input type="radio" name=${quiz.option2}>${quiz.option2}<br>
        <input type="radio" name=${quiz.option3}>${quiz.option3}<br>
        <input type="radio" name=${quiz.option4}>${quiz.option4}<br>
        <button class="next" onclick="next()">NEXT</button>
    </div>
     `
}

displayQuiz(randomQuiz)

function welcome() {

let userName = document.querySelector(".userName");
let welcomeText = document.querySelector(".welcome-text");
let welcomeArea = document.querySelector(".welcome-area");

    welcomeText.innerHTML = ""
    welcomeText.innerHTML = "Hello! " + userName.value;
    welcomeArea.style.display = "none";
    
}


document.getElementsByClassName("quiz-area")[0].style.display = "block";

function next() {
    var randomQuiz = quizData[Math.floor(Math.random()*quizData.length)];
    displayQuiz(randomQuiz)
  //  document.getElementsByClassName("quiz-area")[id-1].style.display = "none";
   // document.getElementsByClassName("quiz-area")[id].style.display = "block";

    
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
    

}

function correctAswer() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incorrectAaswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}








