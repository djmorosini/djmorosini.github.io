let minG
let maxG

let lastGuess
let firstGuess

let humanGuess

let trys

let numberOfGuesses


function startCgame() {
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

        say("Welcome to the Groot guessing game! Think of a number between 1 and " + maxG + " {inclusive}.");
        say("Let Groot know if it's 'Higher' or 'Lower' with the buttons above. Groot will guess it in " + numberOfGuesses + " tries at the most.\n");
        makeGuess(firstGuess)
    }
}

function startHguess() {
    minG = 1;
    maxG = document.getElementById("maxGuess").value;
    if (!parseInt(maxG) || maxG == "") {
        say("The maximum guess has to be a number!")
        exit()
    } else {
        numberOfGuesses = Math.ceil(Math.log2(maxG))

        trys = 1
        computerNumber = getRandomIntInclusive(minG, maxG)
    }
    say("I am Groot. I am Groot?")
    say("'I'm thinking of a number between " + minG + " and " + maxG + " (Inclusive). Can you guess it in " + numberOfGuesses + " tries?'")
    say("Enter a number above.")
}
function runHgame() {
    clear()
    humanGuess = Number(document.getElementById("inputNumber").value);
    if (isNaN(humanGuess)) {
        say("I am Groot!")
        say("'Please enter a number!'");
    } else if (humanGuess == 0) {
        say("I am Groot!")
        say("'You have to enter a number!'");
    } else if (humanGuess < minG) {
        say("I am Groot.")
        say("'I already told you it can't be lower than " + minG + ".'");
    } else if (humanGuess > maxG) {
        say("I am Groot.")
        say("'I already told you it can't be higher than " + maxG + ".'");
    } else if (humanGuess < computerNumber) {
        if (maxG != 100) {
            say("I am Groot!")
            say("'Nope, it's higher than " + humanGuess + " but lower than " + maxG + "!' Guess again.");
            minG = humanGuess;
            trys++;
        } else {
            say("I am Groot!")
            say("'Nope, it's higher than " + humanGuess + " but lower than, or including " + maxG + "!' Guess again.");
            minG = humanGuess;
            trys++;
        }
    } else if (humanGuess > computerNumber) {
        if (minG != 1) {
            say("I am Groot!")
            say("'Nope, it's lower than " + humanGuess + " but higher than " + minG + "!' Guess again.");
            maxG = humanGuess;
            trys++;
        } else {
            say("I am Groot!")
            say("'Nope, it's lower than " + humanGuess + " but higher than, or including " + minG + "!' Guess again.");
            maxG = humanGuess;
            trys++;
        }
    } else if (humanGuess == computerNumber) {
        if (trys < numberOfGuesses) {
            say("I am Groot!")
            say("'You guessed it in " + trys + " tries! Congratulations on guessing it in less than " + numberOfGuesses + " tries!'");
            exit();
        } else if (trys > numberOfGuesses) {
            say("I am Groot.")
            say("'It took " + trys + " tries. That's more than " + numberOfGuesses + " tries, better luck next time.'");
            exit();
        } else if (trys == numberOfGuesses) {
            say("I am Groot.")
            say("'It took exactly " + trys + " out of " + numberOfGuesses + " tries. Nice job.'");
            exit();
        }
    } else {
        say("I am Groot?")
        say("'What?'");
        exit();
    }
}


function say(message) {
    console.log(message)
}

function capitalize(name) {

    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function makeGuess(guess) {
    if (trys > 1) {
        clear()
    }
    say("Guess " + trys + " out of " + numberOfGuesses + ";\n")
    say("I am Groot?")
    say("'Is it... " + guess + "?'\n");

}

function ifCorrect() {
    if (!lastGuess || !minG || !parseInt(maxG)) {
        say("Please submit a maximum number first.")
    } else {
        say("I am Groot!")
        say("'Your number was " + lastGuess + "!'\n");
        say("Groot guessed your number in " + trys + " out of " + numberOfGuesses + " tries.\n");
        say("Click the 'New Game' button to play again!\n")
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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



module.exports = {
    ifHigher: ifHigher,
    ifLower: ifLower,
    ifCorrect: ifCorrect,
    calcMid: calcMid,
    startCgame: startCgame,
    startHguess: startHguess,
}

