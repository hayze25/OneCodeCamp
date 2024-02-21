function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function EmitRandomNumber(tries = 0) {
    if (tries >= 10) {
        throw new Error("Maximum tries exceeded.");
    }

    await delay(2000);
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Attempt # ${tries}: EmitRandomNumber is called.`)
    console.log("2 seconds have lapsed");
    console.log(`Random number generated: ${randomNumber}`);

    if (randomNumber < 80) {
        return await EmitRandomNumber(tries + 1);
    }

    return randomNumber;
}

// Usage
(async () => {
    try {
        const ExceededNumber = await EmitRandomNumber();
        console.log(`Random number generated is ${ExceededNumber}!!! `);
    } catch (error) {
        console.error(error.message);
    }
})();