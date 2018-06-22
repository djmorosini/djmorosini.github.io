let minG
let maxG

let lastGuess
let firstGuess

let trys

let numberOfGuesses


function start() {
    minG = 1;
    maxG = document.getElementById("maxGuess").value;
    if (!parseInt(maxG) || maxG == "") {
        say("The maximum guess has to be a number!")
        exit()
    } else {

        firstGuess = calcMid(minG, maxG)
        lastGuess = firstGuess

        trys = 1

        numberOfGuesses = Math.ceil(Math.log2(maxG))

        say("Welcome to the guessing game! Think of a number between 1 and " + maxG + " (inclusive).");
        say("I will guess it in " + numberOfGuesses + " tries at the most.\n");
        makeGuess(firstGuess)
    }
}

function say(message) {
    console.log(message)
}

function capitalize(name) {

    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function makeGuess(guess) {

    say("Is it... " + guess + "?\n");

}

function ifCorrect() {
    if (!lastGuess || !minG || !parseInt(maxG)) {
        say("Please submit a maximum number first.")
    } else {
        say("Your number was " + lastGuess + "!");
        say("I guessed it in " + trys + " tries.\n");
        say("Click the 'New Game' button to play again!")
        exit();
    }
}

function ifLower() {
    if (!lastGuess || !minG || !parseInt(maxG)) {
        say("Please submit a maximum number first.")
    } else if (lastGuess != minG) {
        maxG = lastGuess - 1;
        lastGuess = calcMid(minG, maxG);
        trys++;
        makeGuess(lastGuess);
    } else if (lastGuess == 1) {
        say("It can't be lower than 1!!");
    } else if (lastGuess == minG) {
        say("You can't do that! You already said it was higher than " + (lastGuess - 1));
    }
}

function ifHigher() {
    if (!lastGuess || !minG || !parseInt(maxG)) {
        say("Please submit a maximum number first.")
    } else if (lastGuess != maxG) {
        minG = lastGuess + 1;
        lastGuess = calcMid(minG, maxG);
        trys++;
        makeGuess(lastGuess);
    } else if (lastGuess == 100) {
        say("It can't be higher than 100!!");
    } else if (lastGuess == maxG) {
        say("You can't do that! You already said it was lower than " + (lastGuess + 1));
    }
}

function calcMid(min, max) {
    return Math.floor((parseInt(min) + parseInt(max)) / 2);
}

module.exports = {
    ifHigher: ifHigher,
    ifLower: ifLower,
    ifCorrect: ifCorrect,
    calcMid: calcMid,
    start: start,
}