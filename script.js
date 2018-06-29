function handleSubmit() {
    let newMax = document.getElementById("maxGuess").value
    newMax = parseInt(newMax)

    clear()
    clearMain()
    clearInput()
    clearPick()
    pickGame()


}
function clearMain() {

    removeElements("#guessButton")
}
function clearPick() {
    removeElements("#pickButton")

}
function clearInput() {
    removeElements("#inputNumber")
}
function setupHumanGuessGame() {
    clear()
    clearMain()
    clearInput()
    // removeChildren("#inputNumber")
    let hGame = document.getElementById('hGame')

    input = document.createElement('input')
    input.setAttribute("class", "inputbox")
    input.setAttribute("id", "inputNumber")
    input.setAttribute("type", "text")
    input.setAttribute("value", "50")
    input.addEventListener('submit', runHgame)
    hGame.appendChild(input)

    button = document.createElement('button')
    button.textContent = "New Game"
    button.setAttribute("id", "inputNumber")
    button.setAttribute("class", "newHguess")
    button.addEventListener('click', restartHguess)
    hGame.appendChild(button)

    listenEnterKey()

    startHguess()

}

function removeElements(selector) {
    let elements = document.querySelectorAll(selector);
    for (let element of elements) {
        element.remove()
    }
}

function setupComputerGuessGame() {
    clear()
    clearInput()
    clearMain()
    // removeChildren("#guessButton")

    let main = document.getElementById('main')
    button = document.createElement('button')
    button.textContent = "Higher"
    button.setAttribute("id", "guessButton")
    button.addEventListener('click', ifHigher)
    main.appendChild(button)

    button = document.createElement('button')
    button.textContent = "Lower"
    button.setAttribute("id", "guessButton")
    button.addEventListener('click', ifLower)
    main.appendChild(button)

    button = document.createElement('button')
    button.textContent = "Correct"
    button.setAttribute("id", "guessButton")
    button.addEventListener('click', ifCorrect)
    main.appendChild(button)

    button = document.createElement('button')
    button.textContent = "New Game"
    button.setAttribute("id", "guessButton")
    button.addEventListener('click', restartCgame)
    main.appendChild(button)

    startCgame()

}

function say(message) {

    document.getElementById('output').textContent += '\n' + message;
    checkTextareaHeight()

}
function exit() {
    console.log('exit called')

}
function clear() {
    document.getElementById('output').textContent = '';
}
function restartCgame() {
    clear();
    startCgame();
}
function restartHguess() {
    clear()
    startHguess()
}
function checkTextareaHeight() {
    var textarea = document.getElementById("output");
    if (textarea.selectionStart == textarea.selectionEnd) {
        textarea.scrollTop = textarea.scrollHeight;
    }
}
function listenEnterKey() {
    document.querySelector("#inputNumber").addEventListener('keypress', function (e) {
        // var key = e.which || e.keyCode;
        // if (key === 13) {
        if (e.key === 'Enter') {
            runHgame()
        }
        exit()
    });
}
function listenForEnterKey() {
    document.querySelector("#maxGuess").addEventListener('keypress', function (e) {
        // var key = e.which || e.keyCode;
        // if (key === 13) {
        if (e.key === 'Enter') {
            handleSubmit()
        }
        exit()
    });
}
function pickGame() {

    clearPick()
    // removeChildren("#pickButton")
    let pick = document.getElementById('pick')

    appendButton("Guess Groots Number", setupHumanGuessGame, pick);
    appendButton("Groot Guesses Your Number", setupComputerGuessGame, pick)
}

function appendButton(buttonTitle, listener, pick) {
    button = document.createElement('button');
    button.textContent = buttonTitle;
    button.setAttribute("id", "pickButton");
    button.addEventListener('click', listener);
    pick.appendChild(button);
}
