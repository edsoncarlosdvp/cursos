interface Shape {
  color: string;
}
 
interface Square extends Shape {
  sideLength: number;
}
 
const mySquare: Square = { sideLength: 10, color: 'blue' };