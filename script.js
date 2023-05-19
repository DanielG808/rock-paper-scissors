// DEPENDENCIES
    // N/A

// DATA
choices = ["R", "P", "S"]

// FUNCTIONS
function startIntro() {
    alert("Are you ready to play Rock, Paper, Scissor, Shoot?");
    alert("Your opponent is the computer! Best of luck...");
}

function startGame() {
    
    var userChoice = getUserChoice();
    var compChoice = getCompChoice();
    var wins = 0;
    var ties = 0;
    var losses = 0;

    function getUserChoice() {
        var choice = prompt("Enter R, P, or S: ");
        choice = choice.toUpperCase()
        // if (choice !== "R") {
        //     alert("Please enter one of the given choices! (R, P, or S)")
        // }
        console.log(choice);
        return choice;
    }

    function getCompChoice() {
        var randomIndex = Math.floor(Math.random() * choices.length);
        var choice = choices[randomIndex];
        alert("The computer chose " + choice + "!");
        console.log(choice);
        return choice;
    }

    function getWinner() {
        if (userChoice === compChoice) {
            ties++;
            alert("It's a tie!")
        } else if ((userChoice === "R" && compChoice === "S") || (userChoice === "P" && compChoice === "R") || (userChoice === "S" && compChoice === "P")) {
            wins++;
            alert("You won!");
        } else {
            losses++;
            alert("You lost!");
        }
        alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)
    }
    getWinner()   
}
// EVENT LISTENERS
    // N/A

//INITILIZATION
startIntro()
startGame()