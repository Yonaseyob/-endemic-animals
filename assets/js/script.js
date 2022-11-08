

function welcome() {

let userName = document.querySelector(".userName");
let welcomeText = document.querySelector(".welcome-text");
let welcomeArea = document.querySelector(".welcome-area");

    welcomeText.innerHTML = ""
    welcomeText.innerHTML = "Hello! " + userName.value;
    welcomeArea.style.display = "none";
    
}


