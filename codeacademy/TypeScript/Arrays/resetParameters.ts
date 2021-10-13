function smush(firstString, ...otherStrings){
  let output = firstString;
  for(let i = 0; i < otherStrings.length; i++){
    output = output.concat(otherStrings[i]);
  }
  return output;
}

console.log(smush('hi', 'there'))

function smush(firstString, ...otherStrings: string[]){
  /*rest of function*/
}