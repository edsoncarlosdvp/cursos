const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

console.log(alunos.map(aluno => aluno.nota))

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas))

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsistas))