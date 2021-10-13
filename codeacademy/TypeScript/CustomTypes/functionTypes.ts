let myFavoriteFunction = console.log; // Note the lack of parentheses.
myFavoriteFunction('Hello World'); // Prints: Hello World

type StringsToNumberFunction = (arg0: string, arg1: string) => number;

let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};
 
myFunc = function(whatever: string, blah: string) {
  return whatever.length - blah.length;
};
// Neither of these assignments results in a type error.

type StringToNumberFunction = (string)=>number; // NO
type StringToNumberFunction = arg: string=>number; // NO NO NO NO