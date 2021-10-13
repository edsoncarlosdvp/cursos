type MyString = string;
let myVar: MyString = 'Hi'; // Valid code.let aCompany: { 
  companyName: string, 
  boss: { name: string, age: number }, 
  employees: { name: string, age: number }[], 
  employeeOfTheMonth: { name: string, age: number },  
  moneyEarned: number
};

type Person = { name: string, age: number };
let aCompany: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};

type MyString = string; 
type MyOtherString = string;
let firstString: MyString = 'test';
let secondString: MyOtherString = firstString; // Valid code.

