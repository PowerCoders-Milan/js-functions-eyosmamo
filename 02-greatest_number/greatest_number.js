// define an arrow function that return the maximum between 3 random numbers
const randomNumber = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;

    } else if (num2 > num3 && num2 > num1) {
        return num2

    } else {
        return num3
    }
}
let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let num3 = Math.ceil(Math.random() * 10);
console.log(num1, num2, num3);
console.log(`${randomNumber(num1, num2, num3)} is the greatest`);


// use a conditional statement inside the function to understand wich number is the greatest one


// declare 3 variables and assign random numbers to them

// call the function passing the numbers as arguments
 //call the function inside the ${...}