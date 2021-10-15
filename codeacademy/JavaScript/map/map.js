const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map(number => {
    return number * 10;
});

console.log(bigNumbers)
/*
.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.
*/

/*
In the example above:

numbers is an array of numbers.
bigNumbers will store the return value of calling .map() on numbers.
numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.
*/

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumber => bigNumber / 100)
console.log(smallNumbers)