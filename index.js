

document.querySelector("button").onclick = () => {
    
    //For Player 1
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    
    var randomDiceImage = "dice" + randomNumber1 + ".png" //dice1.png - dice6.png
    var randomImageSource = "images/" + randomDiceImage //images/dice1.png - images/dice6.png 
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
    
    //For Player 2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var randomImageSource2 = `images/dice${randomNumber2}.png`;
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 Wins! 🚩"
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
    } else {
        document.querySelector("h1").textContent = "It is a Draw! Rethrow dice"
    }
    
}
    // function getRndInteger(min, max) {
    //     return Math.round(Math.random() * (max - min) + min);
    // }
    
    // getRndInteger(1, 6);