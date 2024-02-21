function EmitRandomNumber(callback, tries = 0) {
    if (tries >= 10) {
        console.log("Maximum tries exceeded.");
        return;
    }

    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 101);
        console.log(`Attempt # ${tries}: EmitRandomNumber is called.`)
        console.log("2 seconds have lapsed");
        console.log(`Random number generated: ${randomNumber}`);
        
        if (randomNumber < 80) {
            EmitRandomNumber(callback, tries + 1);
        } else {
            callback(randomNumber);
        }
    }, 2000);
}

function processRandomNumber(randomNumber) {
    console.log(`Random number generated is ${randomNumber}!!!`);
}

// Call the function to start the process
EmitRandomNumber(processRandomNumber);