let examAnswers = [true, false, false];

examAnswers[3] = true; // No type error.

let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];
tupleOfExamAnswers[3] = true; // Type error! The tuple only has 3 elements.

let tup: [number, number, number] = [1,2,3];
let concatResult = tup.concat([4,5,6]); // concatResult has the value [1,2,3,4,5,6].