let minGuess
let maxGuess

let lastGuess
let firstGuess

let trys

let numberOfGuesses


function start() {
    minGuess = 1;
    maxGuess = 100;

    firstGuess = calcMid(minGuess,maxGuess)
    lastGuess=firstGuess

    trys = 1;

    numberOfGuesses = Math.ceil(Math.log2(maxGuess))
    makeGuess(firstGuess)

    say("Please think of a number between 1 and " + maxGuess + " (inclusive).");
    say("I will guess it in " + numberOfGuesses + " tries at the most.");
}

function say(message) {
    console.log(message)
    // document.getElementById('output').textContent = + "\n" + message;
}



function capitalize(name) {

    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function makeGuess(guess) {


    say("Is it... " + guess);


}

function handleInput(message) {
    message = message.toString().trim();
    if (message == "") {
        // say("You have to type in a letter!");
    }
    else if (capitalize(message) == "H") {
        if (lastGuess != maxGuess) {
            minGuess = lastGuess + 1;
            lastGuess = calcMid(minGuess,maxGuess)
            trys++;
            makeGuess(lastGuess)
        }
        else if (lastGuess == 100) {
            say("It can't be higher than 100!!");
        }
        else {
            say("You can't do that! You already said it was lower than " + (lastGuess + 1));
        }
    }
    else if (capitalize(message) == "L") {
        if (lastGuess != minGuess) {
            maxGuess = lastGuess - 1;
            lastGuess = calcMid(minGuess, maxGuess)
            trys++;
            makeGuess(lastGuess)
        }
        else if (lastGuess == 1) {
            say("It can't be lower than 1!!");
        }
        else {
            say("You can't do that! You already said it was higher than " + (lastGuess - 1));
        }
    }
    else if (capitalize(message) == "Y") {
        say("Your number was " + lastGuess + "!");
        say("I guessed it in " + trys + " tries.");
        exit();
    }
    else {
        say("Wrong letter, try again!");
    }
}

function calcMid(min, max) {
    return Math.floor((min + max) / 2);
}

module.exports = {
    handleInput: handleInput,
    calcMid: calcMid,
    start: start
}