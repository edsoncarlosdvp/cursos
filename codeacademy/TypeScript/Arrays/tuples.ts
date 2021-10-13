let ourTuple: [string, number, string, boolean] = ['Is', 7, 'our favorite number?', false]

let numbersTuple: [number, number, number] = [1, 2, 3, 4]; // Type Error! numbersTuple should only have three elements.
let mixedTuple: [number, string, boolean] = ['hi', 3, true] // Type Error! The first elements should be a number, the second a string, and the third a boolean. 

let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there','there'];
tup = ['there', 'there']; // No Errors.
tup = arr; // Type Error! An array cannot be assigned to a tuple.

