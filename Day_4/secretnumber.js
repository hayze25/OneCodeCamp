function Game(){
   
    console.log('Welcome to the Secret Number Game')

    secretNumber = Math.floor(Math.random()*10);
    
    var attempts = 0;

    let guessedNumber;

    do{

         guessedNumber = parseInt(prompt("Enter your guess (between 1 and 10):"));
        if(guessedNumber<secretNumber){
            
            console.log("Too low! Try again.")  
            attempts++;
          }

          else if(guessedNumber>secretNumber){
            console.log("Too High! Try again.")  
            attempts++;
        }
        else{
         
           console.log("Congratulations! You guessed the correct number: "+ secretNumber + " It took you " + attempts +" attemps.")
           break;
        }
             
    } while(guessedNumber != secretNumber);

   
         
}

Game();

