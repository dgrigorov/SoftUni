/*
This is a basic Tic Tac Toe game.

The AI appears to fully work, but it is untested.  The case statements and jquery click calls 
should be cleaned up.  Furthermore, the checkWin function could be better implemented by
using an array which contains the winning possibilities instead of the if statements.

In addition, the cpu doesn't actually draw the winning move.  I'm unsure as to why, and it's 
a logic error somewhere in the program.  
*/

$(document).ready(function() {

    //this is the array that will keep track of spaces
    var spacesTaken = [false, false, false, false, false, false, false, false, false];
    var takenBy = [];
    var bestMove;
    //1 is easy, 2 is medium, 3 is hard
    var difficulty = 3;

    //This will be the main object for the game
    function Game(){
    }

    // This method will take an integer (1-9) and mark the appropriate
    // square on the board.  It will also take a boolean value which 
    // will determine if the user or program is using the method.
    // This method ASSUMES correct input.
    Game.prototype.toArray = function(space, user){
        spacesTaken[space] = true;
        if(user){
            takenBy[space] = 'O';
        }
        else if(!user){
            takenBy[space] = 'X';
        }
    };

    // This method will draw an X or O in the appropriate spot.
    Game.prototype.draw = function(space, isUser){
        //these draw Os for the user
        if(isUser){
            switch(space){
                case 1:
                    $('div.ox1.o').show("slow");
                    break;
                case 2:
                    $('div.ox2.o').show("slow");
                    break;
                case 3:
                    $('div.ox3.o').show("slow");
                    break;
                case 4:
                    $('div.ox4.o').show("slow");
                    break;
                case 5:
                    $('div.ox5.o').show("slow");
                    break;
                case 6:
                    $('div.ox6.o').show("slow");
                    break;
                case 7:
                    $('div.ox7.o').show("slow");
                    break;
                case 8:
                    $('div.ox8.o').show("slow");
                    break;
                case 9:
                    $('div.ox9.o').show("slow");
                    break;
            }
        } 
        
        if(!isUser){
            // These draw Xs for the computer
            switch(space){
                case 1:
                    $('div.ox1.x').show("slow");
                    break;
                case 2:
                    $('div.ox2.x').show("slow");
                    break;
                case 3:
                    $('div.ox3.x').show("slow");
                    break;
                case 4:
                    $('div.ox4.x').show("slow");
                    break;
                case 5:
                    $('div.ox5.x').show("slow");
                    break;
                case 6:
                    $('div.ox6.x').show("slow");
                    break;
                case 7:
                    $('div.ox7.x').show("slow");
                    break;
                case 8:
                    $('div.ox8.x').show("slow");
                    break;
                case 9:
                    $('div.ox9.x').show("slow");
                    break;
            }
        }
    };

    //This method will check to see if the user or program has won
    //furthermore, it will check to see if the game is a tie.
    Game.prototype.checkWin = function(){
        //checks to see if the program (X) has won.
        //there are 8 possible ways to victory
        
        //checks rows first
        if(takenBy[0] == 'X' && takenBy[1] == 'X' && takenBy[2] == 'X'){
            return "X";
        }
        else if (takenBy[3] == 'X' && takenBy[4] == 'X' && takenBy[5] == 'X'){
            return "X";
        }
        else if (takenBy[6] == 'X' && takenBy[7] == 'X' && takenBy[8] == 'X'){
            return "X";
        }
    
        //check cols second
        if(takenBy[0] == 'X' && takenBy[3] == 'X' && takenBy[6] == 'X'){
            return "X";
        }
        else if (takenBy[1] == 'X' && takenBy[4] == 'X' && takenBy[7] == 'X'){
            return "X";
        }
        else if (takenBy[2] == 'X' && takenBy[5] == 'X' && takenBy[8] == 'X'){
            return "X";
        }
    
        //checks diagonals third
        if(takenBy[0] == 'X' && takenBy[4] == 'X' && takenBy[8] == 'X'){
            return "X";
        }
        else if (takenBy[2] == 'X' && takenBy[4] == 'X' && takenBy[6] == 'X'){
            return "X";
        }
     
        //this checks to see if the User, or O has won
        if(takenBy[0] == 'O' && takenBy[1] == 'O' && takenBy[2] == 'O'){
            return "O";
        }
        else if (takenBy[3] == 'O' && takenBy[4] == 'O' && takenBy[5] == 'O'){
            return "O";
        }
        else if (takenBy[6] == 'O' && takenBy[7] == 'O' && takenBy[8] == 'O'){
            return "O";
        }
    
        //check cols second
        if(takenBy[0] == 'O' && takenBy[3] == 'O' && takenBy[6] == 'O'){
            return "O";
        }
        else if (takenBy[1] == 'O' && takenBy[4] == 'O' && takenBy[7] == 'O'){
            return "O";
        }
        else if (takenBy[2] == 'O' && takenBy[5] == 'O' && takenBy[8] == 'O'){
            return "O";
        }
    
        //checks diagonals third
        if(takenBy[0] == 'O' && takenBy[4] == 'O' && takenBy[8] == 'O'){
            return "O";
        }
        else if (takenBy[2] == 'O' && takenBy[4] == 'O' && takenBy[6] == 'O'){
            return "O";
        }
    
        var isATie = true;
        // checks to see if it is a tie
        for(var i = 0; i < spacesTaken.length; i++){
            if(spacesTaken[i] === false){
                isATie = false;
            }
        }
        if(isATie){
            return "tie";
        }
    
        //If it is not a tie, and neither person has won, it returns "neither"
        return "neither";
    };

    //This function simply calls the other functions needed in the program
    Game.prototype.doMove = function(space, isUser){
      
      if(isUser){
            match.draw(space, true);
            match.toArray(space-1, true);
            match.check();
            match.cpuMove();
        }
        else if(!isUser){
            match.draw(space, false);
            match.toArray(space-1, false);
        }
        
        //checks to see if the cpu won before letting the user go again
        match.check();
    };

    //This function is called when there is a winner.  It restarts the game in order to play again.
    Game.prototype.exit = function(){
        spacesTaken = [false, false, false, false, false, false, false, false, false];
        takenBy = [];
        $('div.x').hide("slow");
        $('div.o').hide("slow");
        match.goFirstOrSecond();
        $(document).reload();
    };
    
    //This function is called as part of exit.  It asks the user whether they'd like to go first or second
    Game.prototype.goFirstOrSecond = function(){
        var first = prompt("Would you like to go first or second?  Type a 1 and enter if you'd like to go first");
        if(first != 1){
           match.cpuMove();
        }
        difficulty = prompt("Please enter 1 for easy, 2 for medium, and 3 for hard.");
    };

    //This method checks to see if the game is over and displays the appropriate message.
    Game.prototype.check = function(){

        var won = match.checkWin();
    
        if(won == 'X' || won == 'x'){
            alert("The computer has won!");
            match.exit();
            return;
        }
        else if(won == 'O' || won == 'o'){
            alert("You have won!");
            match.exit();
            return;
        }
        else if(won == "tie"){
            alert("The game is a tie!");
            match.exit();
            return;
        }
    };
    
    //This method will decide a CPU move
    Game.prototype.cpuMove = function(){
        var tempMove = 10;
        //sets to a default value at random
        for(var i=0; i < spacesTaken.length; i++){
            if(spacesTaken[i] === false){
                bestMove = i + 1;
            }
        }
        
        //this step is skipped on medium or easy
        if(difficulty > 2){
            //this ensures a decent second move when the user is going first
            if(spacesTaken[6] == false && spacesTaken[8] == false){
                bestMove = 7;
            }
        }
        
        //if the middle square isn't taken, take it
        if(spacesTaken[4] === false){
            bestMove = 5;
        }

        //these steps are skipped on easy
        if(difficulty > 1){
            //see if the player can win the next move
            tempMove = match.canWin('O', true);
            if(tempMove != 10){
                bestMove = tempMove + 1;            
            }
            
            //see if the CPU can win the next move
            tempMove = match.canWin('X', false);
            if(tempMove != 10){
                bestMove = tempMove + 1;            
            }
        }

        match.draw(bestMove, false);
        match.doMove(bestMove, false);
    };
    
    //this method will check to see if the cpu can win in the next turn
    //if there is a winning move, it returns it as an integer; if not, it returns 10
    Game.prototype.canWin = function(winningChar, isUser){
        var winPossible;
        var winningMove = 10;
        //This will cylce through all possible moves
        for(var i = 0; i < 8; i++){
            if(spacesTaken[i] === false){
                var priorValue = takenBy[i];
                //for each possible move, check to see if that move will win
                match.toArray(i, isUser);
                winPossible = match.checkWin();
                if(winPossible == winningChar){
                    winningMove = i;
                    spacesTaken[i] = false;
                    takenBy[i] = priorValue;
                    return i;
                }
                //remove the move
                spacesTaken[i] = false;
                takenBy[i] = priorValue;
            }
        }
        return 10;
    };

    var match = new Game();

    $('div.x').hide("slow");
    $('div.o').hide("slow");
    
    //asks the user if they'd like to go first or second
    match.goFirstOrSecond();
    
    $('div.s1').click(function(){
        match.doMove(1, true);
    });
    $('div.s2').click(function(){
        match.doMove(2, true);  
    });
    $('div.s3').click(function(){
        match.doMove(3, true);   
    });
    $('div.s4').click(function(){
        match.doMove(4, true);  
    });
    $('div.s5').click(function(){
        match.doMove(5, true);     
    });
    $('div.s6').click(function(){
        match.doMove(6, true); 
    });
    $('div.s7').click(function(){
        match.doMove(7, true);     
    });
    $('div.s8').click(function(){
        match.doMove(8, true);     
    });
    $('div.s9').click(function(){
        match.doMove(9, true);    
    });
});