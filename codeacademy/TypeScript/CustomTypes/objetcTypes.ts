let aPerson: { name: string, age: number };

aPerson = {name: 'Aisle Nevertell', age: "wouldn't you like to know"}; // Type error: age property has the wrong type.
aPerson = {name: 'Kushim', yearsOld: 5000}; // Type error: no age property. 
aPerson = { name: 'User McCodecad', age: 22 }; // Valid code.

let aCompany: {
  companyName: string, 
  boss: {name: string, age: number}, 
  employees: {name: string, age: number}[], 
  employeeOfTheMonth: {name: string, age: number},  
  moneyEarned: number
};