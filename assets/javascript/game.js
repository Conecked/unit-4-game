// create a random number
let randomNumber = Math.floor(Math.random() * 102) + 19;
console.log(randomNumber);
let userTotal = 0;

// have random number populate "number" box
function displayRandomNumber() {
    $(".number").html("<h3>" + randomNumber + "</h3>");
}

displayRandomNumber();

// assign a random value between 1-12 to each crystal

let randomCrystal =  {};
randomCrystal[1] = Math.floor(Math.random() * 12) + 1;
randomCrystal[2] = Math.floor(Math.random() * 12) + 1;
randomCrystal[3] = Math.floor(Math.random() * 12) + 1;
randomCrystal[4] = Math.floor(Math.random() * 12) + 1;

function getCrystalValue (crystalKey) {
    return function () {
        userTotal = userTotal + randomCrystal[crystalKey];
        console.log("New userTotal is: " + userTotal);
        $(".userValue").text(userTotal);

        if (userTotal === randomNumber) {
            winner()
        }
        
        else if (userTotal > randomNumber) {
            loser()
        }
    }
}

// collect user input/click of each crystal

$("#blue").on("click", getCrystalValue(1));
$("#citrine").on("click", getCrystalValue(2));
$("#crystal").on("click", getCrystalValue(3));
$("#ruby").on("click", getCrystalValue(4));


// allow value of each crystal to reset to new value when game is over

function reset() {
    randomNumber = Math.floor(Math.random() * 102) + 19;
    console.log(randomNumber);
    $(".number").html("<h3>" + randomNumber + "</h3>");
    randomCrystal[1] = Math.floor(Math.random() * 12) + 1;
    randomCrystal[2] = Math.floor(Math.random() * 12) + 1;
    randomCrystal[3] = Math.floor(Math.random() * 12) + 1;
    randomCrystal[4] = Math.floor(Math.random() * 12) + 1;
    userTotal = 0;
    $(".userValue").text(userTotal);
}

// tally a win on scoreboard if user can equal random number
let wins = 0;
let losses = 0;

$(".wins").text("Wins: " + wins);
$(".losses").text("Losses: " + losses);

function winner() {
    $(".alert").html("You Won!");
    wins++;
    $(".wins").text("Wins: " + wins);
    reset();
}

// tally a loss if user goes over the random number

function loser() {
    $(".alert").html("You Loss!");
    losses++;
    $(".losses").text("Losses: " + losses);
    reset();
}
// reset entire game when user wins or loses