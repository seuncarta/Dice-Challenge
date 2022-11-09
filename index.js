// document.querySelector("h1").innerHTML = "Go"

var randomNumber1 = Math.floor(Math.random() * 6) + 1;


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// getRndInteger(1, 6);

var randomDiceImage = "dice" + randomNumber1 + ".png" //dice1.png - dice1.png
var randomImageSource = "images/" + randomDiceImage //images/dice1.png - images/dice1.png 


var player1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = `images/dice${randomNumber2}.png`;

var player2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent="Player 1 Wins! 🚩"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent="Player 2 Wins! 🚩"
} else {
    document.querySelector("h1").textContent="It is a Draw! Rethrow dice"
}