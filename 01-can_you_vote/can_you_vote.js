// define a function that will check if I can vote or not

const canIVote = age => {
    const legalage = 18;
    if (age >= legalage) {
        console.log("You can vote");
    } else {
        console.log("You can not vote");
    }
}


// define a variable for your age
canIVote(35)
// call the function and see if you can vote
console.log(`age`);