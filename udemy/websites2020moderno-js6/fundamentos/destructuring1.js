// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 35,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logadouro, numero, cep } } = pessoa
console.log(logadouro, numero, cep)

// const { conta: { ag, num } } = pessoa
// console.log(ag, num)