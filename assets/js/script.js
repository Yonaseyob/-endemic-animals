
const quizData = [
    {
        question: "Which one of the followin animals is endemic to China??",
        a: "Three-Toed Sloth",
        b: "Giant Panda",
        c: "Poisen Dart Frog",
        correct: "b",
    },
    {
        question: "Which one of the followin animals is endemic to Costarica?",
        a: "Sclater's Monkey",
        b: "Three-Toed Sloth",
        c: "Poisen Dart Frog",
        correct: "c",
    },
    {
        question: "Which one of the followin animals is endemic to USA?",
        a: "Patagonian Mar",
        b: "Glacier Bear",
        c: "Wilson's Beird of Paradise",
        correct: "b",
    },
    {
        question: "Which one of the followin animals is endemic to Nigeria?",
        a: "Pygmy Three-Toed Sloth",
        b: "Sclater's Monkey",
        c: "Poisen Dart Frog",
        correct: "b",
    },
    {
        question: " Which one of the followin animals is endemic to Argentina?",
        a: "Wilson's Beird of Paradise",
        b: "Patagonian Mara",
        c: "Sclater's Monkey",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question' );
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

function welcome() {

    let userName = document.querySelector(".userName");
    let welcomeText = document.querySelector(".welcome-text");
    let welcomeArea = document.querySelector(".welcome-area");
    
        welcomeText.innerHTML = ""
        welcomeText.innerHTML = "Hello! " + userName.value;
        welcomeArea.style.display = "none";
        
    }

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
const currentQuizData = quizData[currentQuiz];

questionElement.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false);
    }

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl. id;
         }
       
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer){
      if(answer === quizData[currentQuiz] .correct){
        score ++;

        incrementScore();
      }else {
        incrementWrongAnswer();

      }

      currentQuiz ++;

      if(currentQuiz < quizData.length){
        loadQuiz();
      }

       else{
        quiz.innerHTML = `<h2>You answered corectly at ${score}/${quizData.length} questions</h2>
        <button onclick = "location.reload()">Reload</button>`;
       }
    }

});
    
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}










