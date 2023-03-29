
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
        while (winCount < 3 || lossCount < 3){
            console.log("I'm looping.");
            if (!(winCount == 0 && lossCount == 0 && tieCount == 0)){
                console.log("Are we on our second game?");
                console.log("WinCount" + winCount)
                console.log("lossCount " + lossCount)
                //Good luck consolelogs.
                var playerMove = prompt("Enter R, P or S (case sensitive).");
            }
        // computer picks r, p , or s
            var cpuRandIdx = Math.floor(Math.random() * moves.length);
            var cpuMove = moves[cpuRandIdx];
        // we compare our return value to the computers value
            if (cpuMove === playerMove){
                tieCount++
            alert(`The score: Wins: ${winCount} Losses: ${lossCount}, Ties: ${tieCount}`)
            }
            else if (playerMove=="R" && cpuMove=="S"){
                winCount++
                alert(`The score: Wins: ${winCount} Losses: ${lossCount}, Ties: ${tieCount}`)
            }

            else if (playerMove=="P" && cpuMove=="R"){
                winCount++
                alert(`The score: Wins: ${winCount} Losses: ${lossCount}, Ties: ${tieCount}`)
            }

            else if (playerMove=="S" && cpuMove=="P"){
                winCount++
                alert(`The score: Wins: ${winCount} Losses: ${lossCount}, Ties: ${tieCount}`)
            }

            else if (cpuMove=="R" && playerMove=="S"){
                lossCount++
                alert(`The score: Wins: ${winCount} Losses: ${lossCount}, Ties: ${tieCount}`)
            }

            else if (cpuMove=="P" && playerMove=="R"){
                lossCount++
                alert(`The score: Wins: ${winCount} Losses: ${lossCount}, Ties: ${tieCount}`)
            }

            else if (cpuMove=="S" && playerMove=="P"){
                lossCount++
                alert(`The score: Wins: ${winCount} Losses: ${lossCount}, Ties: ${tieCount}`)
            }
        }

        alert(`The finalscore: Wins: ${winCount} Losses: ${lossCount}, Ties: ${tieCount}`);
        return;

    }
    else {
        console.log("condition met");
        return RPSGame();
    }
    //If the entered values does not = our moves, we display an alert box that says not a valid input. (Press OK to start over.)



}
RPSGame();
