// Add your type alias below:
type Coord = [number, number, string, number, number, string];

let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0, 'N', 71, 0, 'W'];

//Function Types
// Math Operations
function add(a, b){ return a+b }
function subtract(a, b){ return a-b }
function multiply(a, b){ return a*b}
function divide(a, b){ return a/b}
function wrongAdd(a, b){return (a+b)+''}

// Add your function type below:
type OperatorFunction = (a: number, b: number)=>number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
  console.log('Now fill out this worksheet.')
}

// Call your functions below:
mathTutor(multiply);
mathTutor(wrongAdd);

//Type Guards

function formatStatistic(stat: string | number) {
  if (typeof stat === 'number') {
    return stat.toFixed(2);
  }

  if (typeof stat === 'string') {
    return stat.toUpperCase();
  }
}

console.log(formatStatistic('Win'));
console.log(formatStatistic(0.364));

// Types Guards2

type Cat = {
  name: string;
  run: () => string;
}

type Fish = {
  name: string;
  swim: () => string;
}

const siameseCat = { 
  name: 'Proxie', 
  run: () => 'pitter pat'
}

const bettaFish = { 
  name: 'Neptune', 
  swim: () => 'bubble blub'
}

function move(pet: Cat | Fish) {
  if ('run' in pet) {
    return pet.run();
  }

  if ('swim' in pet) {
    return pet.swim();
  }
}

console.log(move(siameseCat))

// Narrowing with else

type Pasta = {
  menuName: string;
  boil: () => string;
}

type Meat = {
  menuName: string;
  panFry: () => string;
}

const fettuccine = {
  menuName: 'Fettuccine',
  boil: () => "Heat water to 212 degrees",
}

const steak = {
  menuName: 'New York Strip Steak',
  panFry: () => "Heat oil to 350 degrees",
}

function prepareEntree(entree: Pasta | Meat) {
  if ('boil' in entree) {
    return entree.boil();
  } else {
    return entree.panFry();
  }
}

console.log(prepareEntree(fettuccine));

// Narrowing Type Guard
type Metal = {
  magnetize: () => string;
}

type Glass = {
  melt: () => string;
}

const iron = {
  magnetize: () => 'Electromagnet activated'
}

const bottle = {
  melt: () => 'Furnace set to 2,700 degrees'
}


function recycle(trash: Metal | Glass) {
  // Add your code below:
  if ('magnetize' in trash) {

  return trash.magnetize();
  }

  
  
  return trash.melt();
}

console.log(recycle(iron));