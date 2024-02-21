function countMultiplesBetween(start, end){
    let  countMultiple = 0;
    for(i = start; i<= end; i++){
     if(i % 3 === 0 && i % 5 === 0 ){
         countMultiple = countMultiple + 1
     }
    }
    console.log("the number of multiples of 3 and 5 between 1 to 100 is: " + countMultiple)
 }
 
 countMultiplesBetween(1, 100);