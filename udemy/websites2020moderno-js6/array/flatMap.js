const escola = [{
    nome: 'Turma 01',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Andressa',
        nota: 9.3
    }]
}, {
    nome: 'Turma 02',
    alunos: [{
        nome: 'Lara',
        nota: 8.9
    }, {
        nome: 'Andersson',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)