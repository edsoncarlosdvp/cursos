// Inicialização de duas variáveis
var a = 3
var b = 4

// Variáveis declaradas como var podem ser reescrita durante o código. O mesmo não acontece para a ceclaração em let
var a = 30
// let b = 40
b = 40 // A varável b recebendo um novo valor

console.log(a, b)

a = 300
b = 400
console.log(a, b)

// A constante não pode ser reescrita como o var
const c = 5
// c = 50
console.log(c)