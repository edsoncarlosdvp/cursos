// pessoa => 123 => {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa => 456 => {...}
// pessoa = { nome: 'Ana' }

// Com o Object.freeze é impossível realizar alterações no endereço de memória do objeto, como também, em seus atributos
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)