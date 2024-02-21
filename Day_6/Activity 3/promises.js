function EmitRandomNumber() {
    return new Promise((resolve, reject) => {
        let tries = 0;
        const tryGenerateNumber = () => {
            if (tries >= 10) {
                reject("Maximum tries exceeded.");
                return;
            }

            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 101);
                console.log(`Attempt # ${tries}: EmitRandomNumber is called.`)
                console.log("2 seconds have lapsed");
                console.log(`Random number generated: ${randomNumber}`);

                if (randomNumber < 80) {
                    tries++;
                    tryGenerateNumber();
                } else {
                    resolve(randomNumber);
                }
            }, 2000);
        };

        tryGenerateNumber();
    });
}

// Usage
EmitRandomNumber()
    .then(randomNumber => {
        console.log(`Random number generated is: ${randomNumber}!!!`);
    })
    .catch(error => {
        console.error(error);
    });