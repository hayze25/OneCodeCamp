function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const incrementCounter1 = counter();
const incrementCounter2 = counter();

incrementCounter1(); // Output: 1
incrementCounter1(); // Output: 2
incrementCounter1(); // Output: 3

incrementCounter2(); // Output: 1
incrementCounter2(); // Output: 2

// in this case counter() serves as a function factory without having to write
//increment counter 1 and 2 manually;