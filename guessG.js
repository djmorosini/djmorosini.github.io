let minGuess
let maxGuess

let lastGuess
let firstGuess

let trys

let numberOfGuesses


function start() {
    minGuess = 1;
    maxGuess = 100;

    firstGuess = calcMid(minGuess, maxGuess)
    lastGuess = firstGuess

    trys = 1;

    numberOfGuesses = Math.ceil(Math.log2(maxGuess))

    say("Please think of a number between 1 and " + maxGuess + " (inclusive).");
    say("I will guess it in " + numberOfGuesses + " tries at the most.");
    makeGuess(firstGuess)
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


function ifCorrect() {
    say("Your number was " + lastGuess + "!");
    say("I guessed it in " + trys + " tries.");
    exit();
}

function ifLower() {
    if (lastGuess != minGuess) {
        maxGuess = lastGuess - 1;
        lastGuess = calcMid(minGuess, maxGuess);
        trys++;
        makeGuess(lastGuess);
    }
    else if (lastGuess == 1) {
        say("It can't be lower than 1!!");
    }
    else if (lastGuess == minGuess) {
        say("You can't do that! You already said it was higher than " + (lastGuess - 1));
    }
    else {

    }
}

function ifHigher() {
    if (lastGuess != maxGuess) {
        minGuess = lastGuess + 1;
        lastGuess = calcMid(minGuess, maxGuess);
        trys++;
        makeGuess(lastGuess);
    }
    else if (lastGuess == 100) {
        say("It can't be higher than 100!!");
    }
    else if (lastGuess == maxGuess) {
        say("You can't do that! You already said it was lower than " + (lastGuess + 1));
    }
    else {

    }
}

function calcMid(min, max) {
    return Math.floor((min + max) / 2);
}

module.exports = {
    ifHigher: ifHigher,
    ifLower: ifLower,
    ifCorrect: ifCorrect,
    calcMid: calcMid,
    start: start
}