function fahrenheit_to_celsius(tempFahrenheit) {
    let celsius = num.fixed(tempFahrenheit - 32) * 5/9;
    return celsius;
}

console.log(fahrenheit_to_celsius(3));