

const quizData = [
{
    question: "Q1 how many players are in a football team?",
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
{
    question: "what is my age?",
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
let randomQuiz = quizData[Math.floor(Math.random()*quizData.length)];

function displayQuiz (quiz) {

     quizContainer.innerHTML =`
     <div class = "quiz-area">
        <p>${quiz.question}</p><hr>
        <input type="radio" name=${quiz.option1}>${quiz.option1}<br>
        <input type="radio" name=${quiz.option2}>${quiz.option2}<br>
        <input type="radio" name=${quiz.option3}>${quiz.option3}<br>
        <input type="radio" name=${quiz.option4}>${quiz.option4}<br>
        <button class="next" onclick="next()">NEXT</button>
    </div>
     `}

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
  
}
 function checkAnswer(){
    let userAnswer = quizData.correctAswer;
    let isCorrect = userAnswer === correctAswer[0];

    if (isCorrect) {
        alert("nn" + score);
    }
 }






