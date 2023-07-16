var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;

function setimg(rand, val) {
    // console.log(rand)
    document.querySelector(val).setAttribute("src", "./images/dice" + rand + ".png")
}

function winner(rand1, rand2) {
    if (rand1 === rand2) {
        document.getElementsByTagName("h1")[0].textContent = "Draw 🎌";
    } else if (rand1 > rand2) {
        document.getElementsByTagName("h1")[0].textContent = "🚩 Player1 wins.";
    } else {
        document.getElementsByTagName("h1")[0].textContent = "Player2 wins. 🚩";
    }
}
setimg(rand1, ".img1")
setimg(rand2, ".img2")
winner(rand1, rand2)