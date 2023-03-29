
//we enter one of those



// if we win, tally a win, if we lose tally a loss, if it is a tie tally a tie
// if we enter any other characters than R, P, or S, then we get an alert message that says "you must enter R, P, or S. It is case sensitive"
    // it kicks us back to first prompt
// when either you or the computer reaches 3 wins, an alert box ap[pears showing the wins for each player and who won.
// the box will give the option to play again by pressing okay

//Initialize our variables.

var moves = ["R", "P", "S"]

// make a function that will open a prompt box, ask "prompt will say "say R,P, or S"

function RPSGame(){
    // we save the return value from the prompt
    var playerMove = prompt("Enter R, P or S (case sensitive).");
    var winCount = 0;
    var lossCount = 0;
    var tieCount = 0;
    if (moves.includes(playerMove)){

    // computer picks r, p , or s
    var cpuRandIdx = Math.floor(Math.random() * moves.length);
    var cpuMove = moves[cpuRandIdx];
    // we compare our return value to the computers value
    if (cpuMove === playerMove){
        tieCount++
        alert(`The score: Wins: ${winCount} Losses: ${lossCount}, Ties: ${tieCount}`)
    }



    } else {

        return RPSGame();
    }
    //If the entered values does not = our moves, we display an alert box that says not a valid input. (Press OK to start over.)



}
RPSGame();
