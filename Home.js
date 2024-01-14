var turns = true
var Xscore = 0
var Oscore = 0
var tieScore = 0
var squaresChanged = 0
var Xcounter = document.getElementById('xPointsCounter')
var Ocounter = document.getElementById('oPointsCounter')
var tieCounter = document.getElementById('tiePointsCounter')
var gameWon = false

if (turns === true) {
    document.getElementById('turnTeller').innerHTML = 'X turn'
}
else if (turns === false) {
    document.getElementById('turnTeller').innerHTML = 'O turn'
}

var square1 = document.getElementById('Button1')
var square2 = document.getElementById('Button2')
var square3 = document.getElementById('Button3')
var square4 = document.getElementById('Button4')
var square5 = document.getElementById('Button5')
var square6 = document.getElementById('Button6')
var square7 = document.getElementById('Button7')
var square8 = document.getElementById('Button8')
var square9 = document.getElementById('Button9')

window.onclick = e => {
    console.log(e.target.id)
    console.log(document.getElementById(e.target.id).src)
    console.log(document.getElementById(e.target.id).alt)

    let button = document.getElementById(e.target.id)
    let square = document.getElementById(e.target.id).src
    let EmptySquare = 'http://127.0.0.1:5500/TicTacToeWebGame/Images/EmptySquare.png'

    if (turns === true && square === EmptySquare) {
        button.src = 'Images/Xselection.png'
        button.alt = 1
        turns = false
        button = 1
        squaresChanged++
        setTimeout(() => { detectWin(); }, 2000)
    }
    else if (turns === false && square === EmptySquare) {
        button.src = 'Images/Oselection.png'
        button.alt = -1
        turns = true
        button = -1
        squaresChanged++
        setTimeout(() => { detectWin(); }, 2000)
    }

    if (turns === true) {
        document.getElementById('turnTeller').innerHTML = 'X turn'
    }
    else if (turns === false) {
        document.getElementById('turnTeller').innerHTML = 'O turn'
    }
}

function detectWin() {

    if ((parseInt(square1.alt) + parseInt(square2.alt) + parseInt(square3.alt)) === 3) {
        Xscore++
        Xcounter.innerHTML = Xscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square4.alt) + parseInt(square5.alt) + parseInt(square6.alt)) === 3) {
        Xscore++
        Xcounter.innerHTML = Xscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square7.alt) + parseInt(square8.alt) + parseInt(square9.alt)) === 3) {
        Xscore++
        Xcounter.innerHTML = Xscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square1.alt) + parseInt(square4.alt) + parseInt(square7.alt)) === 3) {
        Xscore++
        Xcounter.innerHTML = Xscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square2.alt) + parseInt(square5.alt) + parseInt(square8.alt)) === 3) {
        Xscore++
        Xcounter.innerHTML = Xscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square3.alt) + parseInt(square6.alt) + parseInt(square9.alt)) === 3) {
        Xscore++
        Xcounter.innerHTML = Xscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square1.alt) + parseInt(square5.alt) + parseInt(square9.alt)) === 3) {
        Xscore++
        Xcounter.innerHTML = Xscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square3.alt) + parseInt(square5.alt) + parseInt(square7.alt)) === 3) {
        Xscore++
        Xcounter.innerHTML = Xscore
        gameWon = true
        Restart();
    }

    if ((parseInt(square1.alt) + parseInt(square2.alt) + parseInt(square3.alt)) === -3) {
        Oscore++
        Ocounter.innerHTML = Oscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square4.alt) + parseInt(square5.alt) + parseInt(square6.alt)) === -3) {
        Oscore++
        Ocounter.innerHTML = Oscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square7.alt) + parseInt(square8.alt) + parseInt(square9.alt)) === -3) {
        Oscore++
        Ocounter.innerHTML = Oscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square1.alt) + parseInt(square4.alt) + parseInt(square7.alt)) === -3) {
        Oscore++
        Ocounter.innerHTML = Oscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square2.alt) + parseInt(square5.alt) + parseInt(square8.alt)) === -3) {
        Oscore++
        Ocounter.innerHTML = Oscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square3.alt) + parseInt(square6.alt) + parseInt(square9.alt)) === -3) {
        Oscore++
        Ocounter.innerHTML = Oscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square1.alt) + parseInt(square5.alt) + parseInt(square9.alt)) === -3) {
        Oscore++
        Ocounter.innerHTML = Oscore
        gameWon = true
        Restart();
    }
    else if ((parseInt(square3.alt) + parseInt(square5.alt) + parseInt(square7.alt)) === -3) {
        Oscore++
        Ocounter.innerHTML = Oscore
        gameWon = true
        Restart();
    }

    if (squaresChanged === 9 && gameWon === false) {
        tieScore++
        tieCounter.innerHTML = tieScore
        Restart();
    }
}

function Restart() {
    gameWon = false
    squaresChanged = 0

    square1.src = 'Images/EmptySquare.png'
    square2.src = 'Images/EmptySquare.png'
    square3.src = 'Images/EmptySquare.png'
    square4.src = 'Images/EmptySquare.png'
    square5.src = 'Images/EmptySquare.png'
    square6.src = 'Images/EmptySquare.png'
    square7.src = 'Images/EmptySquare.png'
    square8.src = 'Images/EmptySquare.png'
    square9.src = 'Images/EmptySquare.png'

    square1.alt = 0
    square2.alt = 0
    square3.alt = 0
    square4.alt = 0
    square5.alt = 0
    square6.alt = 0
    square7.alt = 0
    square8.alt = 0
    square9.alt = 0
}