function greet(name: string) {
  console.log(`Hello, ${name}!`);
}
 
greet('Katz'); // Prints: Hello, Katz  
 
greet(1337); // Error: argument '1337' is not assignable to parameter of type 'string'

function printKeyValue(key: string, value) {
  console.log(`${key}: ${value}`);
}
 
printKeyValue('Courage', 1337); // Prints: Courage: 1337
printKeyValue('Mood', 'scared'); // Prints: Mood: scared