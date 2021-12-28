const alunos = [
    { nome: 'Ana', nota: 8.5 },
    { nome: 'João', nota: 7.5 }
]

// IMPERATIVO
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// DECLARATIVO
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)