var turns = true
var Xscore = 0
var Oscore = 0
var tieScore = 0
var squaresChanged = 0
var Xcounter = document.getElementById('xPointsCounter')
var Ocounter = document.getElementById('oPointsCounter')
var tieCounter = document.getElementById('tiePointsCounter')
var gameWon = false
var gameLose = false
var gameTied = false
var gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
var fakeBoard = []
var Obutton = 'Images/Oselection.png'
var currentUrl = window.location.href;
console.log(currentUrl)
if (turns === true) {
    document.getElementById('turnTeller').innerHTML = 'P turn'
}
else if (turns === false) {
    document.getElementById('turnTeller').innerHTML = 'CPU turn'
}


var square1 = document.getElementById('1')
var square2 = document.getElementById('2')
var square3 = document.getElementById('3')
var square4 = document.getElementById('4')
var square5 = document.getElementById('5')
var square6 = document.getElementById('6')
var square7 = document.getElementById('7')
var square8 = document.getElementById('8')
var square9 = document.getElementById('9')

window.onclick = e => {
    console.log(e.target.id)
    console.log(document.getElementById(e.target.id).src)
    console.log(document.getElementById(e.target.id).alt)

    let button = document.getElementById(e.target.id)
    let square = parseInt(document.getElementById(e.target.id).alt)

    if (turns === true && square === 0) {
        button.src = 'Images/Xselection.png'
        button.alt = 1
        turns = false
        squaresChanged++
        gameBoard[(e.target.id - 1)] = 'x'
        console.log(gameBoard)
        setTimeout(() => { detectWin(); }, 1000)
        setTimeout(() => { RanCPU(); }, 1000)
    }

    if (turns === true) {
        document.getElementById('turnTeller').innerHTML = 'P turn'
    }
    else if (turns === false) {
        document.getElementById('turnTeller').innerHTML = 'CPU turn'
    }
}


function RanCPU() {
    turns = true
    squaresChanged++
    if (turns === true) {
        document.getElementById('turnTeller').innerHTML = 'P turn'
    }
    else if (turns === false) {
        document.getElementById('turnTeller').innerHTML = 'CPU turn'
    }

    if (gameWon === false) {
        AIstart();
    }
}

function AIstart() {
    let possibleMoves = []
    fakeBoard = gameBoard
    console.log(fakeBoard)
    let i = 0
    while (i < 9) {
        if (fakeBoard[i] === ' ') {
            possibleMoves.push('cell' + (i))
        }

        i++
    }

    let cellChosen
    let movesCounter = 100
    let gameFinished = false
    i = 0
    while ((i < possibleMoves.length)) {
        movesCounter = movesCounter - 1
        cellChosen = possibleMoves[i]
        cellChosen = parseInt(cellChosen.charAt(4))

        fakeBoard[cellChosen] = 'x'
        checkWin();

        fakeBoard[cellChosen] = 'o'
        checkWin();
        if (gameLose === true) {
            console.log('Found LOSE')
            console.log(cellChosen)
            let button = document.getElementById(cellChosen + 1)
            button.src = Obutton
            button.alt = -1
            turns = true
            gameBoard[cellChosen] = 'o'
            console.log(gameBoard)
            gameLose = false
            gameFinished = true
            setTimeout(() => { detectWin(); }, 1000)
            return;
        }
        else if (gameWon === true) {
            console.log('Found WIN')
            console.log(cellChosen)
            let button = document.getElementById(cellChosen + 1)
            button.src = Obutton
            button.alt = -1
            turns = true
            gameBoard[cellChosen] = 'o'
            console.log(gameBoard)
            movesCounter = movesCounter + 100
            gameWon = false
            gameFinished = true
            setTimeout(() => { detectWin(); }, 1000)
            return;
        }

        console.log(fakeBoard)
        fakeBoard[cellChosen] = ' '

        i++
    }
    console.log(possibleMoves)
    if (gameFinished === false) {
        randomIndex = Math.floor(Math.random() * possibleMoves.length)
        console.log(randomIndex)
        cellChosen = possibleMoves[randomIndex]
        cellChosen = parseInt(cellChosen.charAt(4))
        console.log(cellChosen)
        let button = document.getElementById(cellChosen + 1)
        button.src = Obutton
        button.alt = -1
        turns = true
        gameBoard[cellChosen] = 'o'
        console.log(gameBoard)
        setTimeout(() => { detectWin(); }, 1000)
        return;
    }
    setTimeout(() => { detectWin(); }, 1000)
}

function checkWin() {
    let c1 = 0
    let c2 = 1
    let c3 = 2
    let i = 0
    while (i < 3) {
        if ((fakeBoard[c1] + fakeBoard[c2] + fakeBoard[c3]) === 'xxx') {
            gameLose = true
        }

        if ((fakeBoard[c1] + fakeBoard[c2] + fakeBoard[c3]) === 'ooo') {
            gameWon = true
        }

        c1 = c1 + 3
        c2 = c2 + 3
        c3 = c3 + 3

        i++
    }

    c1 = 0
    c2 = 3
    c3 = 6
    i = 0
    while (i < 3) {
        if ((fakeBoard[c1] + fakeBoard[c2] + fakeBoard[c3]) === 'xxx') {
            gameLose = true
        }

        if ((fakeBoard[c1] + fakeBoard[c2] + fakeBoard[c3]) === 'ooo') {
            gameWon = true
        }

        c1 = c1 + 1
        c2 = c2 + 1
        c3 = c3 + 1
        i++
    }

    c1 = 0
    c2 = 4
    c3 = 8
    i = 0
    while (i < 2) {
        if ((fakeBoard[c1] + fakeBoard[c2] + fakeBoard[c3]) === 'xxx') {
            gameLose = true
        }

        if ((fakeBoard[c1] + fakeBoard[c2] + fakeBoard[c3]) === 'ooo') {
            gameWon = true
        }

        c1 = 2
        c3 = 6
        i++
    }

    if (squaresChanged === 9 && gameWon === false) {
        gameTied = true
    }
}

function detectWin() {

    let c1 = 0
    let c2 = 1
    let c3 = 2
    let i = 0
    while (i < 3) {
        if ((gameBoard[c1] + gameBoard[c2] + gameBoard[c3]) === 'xxx') {
            Xscore++
            Xcounter.innerHTML = Xscore
            gameWon = true
            Restart();
        }

        if ((gameBoard[c1] + gameBoard[c2] + gameBoard[c3]) === 'ooo') {
            Oscore++
            Ocounter.innerHTML = Oscore
            gameWon = true
            Restart();
        }

        c1 = c1 + 3
        c2 = c2 + 3
        c3 = c3 + 3

        i++
    }

    c1 = 0
    c2 = 3
    c3 = 6
    i = 0
    while (i < 3) {
        if ((gameBoard[c1] + gameBoard[c2] + gameBoard[c3]) === 'xxx') {
            Xscore++
            Xcounter.innerHTML = Xscore
            gameWon = true
            Restart();
        }

        if ((gameBoard[c1] + gameBoard[c2] + gameBoard[c3]) === 'ooo') {
            Oscore++
            Ocounter.innerHTML = Oscore
            gameWon = true
            Restart();
        }

        c1 = c1 + 1
        c2 = c2 + 1
        c3 = c3 + 1
        i++
    }

    c1 = 0
    c2 = 4
    c3 = 8
    i = 0
    while (i < 2) {
        if ((gameBoard[c1] + gameBoard[c2] + gameBoard[c3]) === 'xxx') {
            Xscore++
            Xcounter.innerHTML = Xscore
            gameWon = true
            Restart();
        }

        if ((gameBoard[c1] + gameBoard[c2] + gameBoard[c3]) === 'ooo') {
            Oscore++
            Ocounter.innerHTML = Oscore
            gameWon = true
            Restart();
        }

        c1 = 2
        c3 = 6
        i++
    }

    if (squaresChanged === 9 && gameWon === false) {
        tieScore++
        tieCounter.innerHTML = tieScore
        gameWon = true
        Restart();
    }
}

function Restart() {

    gameBoard[0] = ' '
    gameBoard[1] = ' '
    gameBoard[2] = ' '
    gameBoard[3] = ' '
    gameBoard[4] = ' '
    gameBoard[5] = ' '
    gameBoard[6] = ' '
    gameBoard[7] = ' '
    gameBoard[8] = ' '

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