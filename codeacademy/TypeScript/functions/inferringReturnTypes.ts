function createGreeting(name: string) {
  return `Hello, ${name}!`;
}
 
const myGreeting = createGreeting('Aisle Nevertell');

console.log(myGreeting)

function ouncesToCups(ounces: number) {
  return `${ounces / 16} cups`;
}
 
const liquidAmount: number = ouncesToCups(3);
console.log(liquidAmount)
// Type 'string' is not assignable to type 'number'.