// define a function multiplyByNineFifths(number)
const multiplyByNineFifths = x => {

    return (x * (9 / 5));
}
//return number*(9/5)

// define a function getFahrenheit(celsius)
const Fahrenheit = y => {
    return (multiplyByNineFifths(y) + 32);
}

// return multiplyByNineFifths(celsius) + 32;

console.log(`${Fahrenheit(10)}`)

// call getFahrenheit();


// do the same thing starting from Fahrenheit to Celsius
const getFahrenheit = z => {

    return (z - 32);
}
const Celsius = z => {
    return (getFahrenheit(z) * (5 / 9));
}
console.log(`${Celsius(10)}`)