let minG
let maxG

let numberOfGuesses = Math.ceil(Math.log2(maxG))

let trys = 1
let computerNumber = getRandomIntInclusive(minG, maxG)



        let humanGuess = Number(document.getElementById("inputNumber").value);
 

function runHgame() {
    let humanGuess = Number(document.getElementById("inputNumber").value);
    if (isNaN(humanGuess)) {
        say("Please enter a number!");
    }
    else if (humanGuess == 0) {
        say("You have to enter a number!");
    }
    else if (humanGuess < minG) {
        say("I already told you it can't be lower than " + minG + ".");
    }
    else if (humanGuess > maxG) {
        say("I already told you it can't be higher than " + maxG + ".");
    }
    else if (humanGuess < computerNumber) {
        if (maxG != 100) {
            say("Nope, it's higher than " + humanGuess + " but lower than " + maxG + "! Guess again.");
            minG = humanGuess;
            trys++;
        }
        else {
            say("Nope, it's higher than " + humanGuess + " but lower than, or including " + maxG + "! Guess again.");
            minG = humanGuess;
            trys++;
        }
    }
    else if (humanGuess > computerNumber) {
        if (minG != 1) {
            say("Nope, it's lower than " + humanGuess + " but higher than " + minG + "! Guess again.");
            maxG = humanGuess;
            trys++;
        }
        else {
            say("Nope, it's lower than " + humanGuess + " but higher than, or including " + minG + "! Guess again.");
            maxG = humanGuess;
            trys++;
        }
    }
    else if (humanGuess == computerNumber) {
        if (trys < numberOfGuesses) {
            say("You guessed it in " + trys + " tries! Congratulations on guessing it in less than " + numberOfGuesses + " tries!");
            process.exit();
        }
        else if (trys > numberOfGuesses) {
            say("It took " + trys + " tries. That's more than " + numberOfGuesses + " tries, better luck next time.");
            process.exit();
        }
        else if (trys == numberOfGuesses) {
            say("It took exactly " + trys + " out of " + numberOfGuesses + " tries. Nice job!");
            process.exit();
        }
    }
    else {
        say("What?");
        process.exit();
    }
}
