let userName = document.querySelector(".userName");
let welcomeText = document.querySelector(".welcome-text");
let welcomeArea = document.querySelector(".welcome-area");

function welcome() {
    welcomeText.innerHTML = ""
    welcomeText.innerHTML = "Hello! " + userName.value;
    welcomeArea.style.display = "none";
}