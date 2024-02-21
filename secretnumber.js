
function secretnumber(guessedNumber){

    console.log("Welcome to the game!")

    var secretnumber = Math.random()*10;
    var attempts = 0;

   while(guessedNumber != secretnumber){

        if(guessedNumber<secretnumber){
            console.log('Too Low! Try again.')
            attempts++
        }

        else if(guessedNumber>secretnumber){
            console.log('Too High! Try again.')
            attempts++;
        }

        else{
            console.log('Congratulations! you You guessed the correct number: ' + secretnumber + 'It took you ' + attempts +'attempts.')
            break;
        }
   }  
}

secretnumber();





