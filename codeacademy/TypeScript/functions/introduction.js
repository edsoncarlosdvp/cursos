function printLengthOfText(text) {
  console.log(text.length);
}

printLengthOfText(3); // Prints: undefined

function printLengthOfText(text) {
  if (typeof text !== 'string') {
    throw new Error('Argument is not a string!');
  }

  console.log(text.length);
}

printLengthOfText(3); // Error: Argument is not a string!

