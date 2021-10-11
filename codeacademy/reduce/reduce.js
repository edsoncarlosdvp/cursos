const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(summedNums)

/*
Now let’s go over the use of .reduce() from the example above:

numbers is an array that contains numbers.
summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.
As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.
*/

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117