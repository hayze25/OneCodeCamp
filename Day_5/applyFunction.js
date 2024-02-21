function applyFunction(func, array) {
    return array.map(func);
}


function double(x) {
    return x * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = applyFunction(double, numbers);
console.log(doubledNumbers); 