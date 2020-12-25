var minhaVar = 'Minha variável'

function minhaFunc(x, y) {
  return x + y
}

// ES 6 ou ECMAScript 2015
let num = 2
const PI = 3.14

var numeros = [1, 2, 3]
numeros.map(function (valor) {
  return valor * 2
})

numeros.map(valor => valor * 2) // ES 2015 ARROW FUNCTION

class matematica {
  soma(a, b) {
    return a + b
  }
}

// TIPAGEM DE VARIÁVEIS
var n1: string = "uma string"
n1 = "dois"
