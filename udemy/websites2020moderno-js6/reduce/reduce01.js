const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

console.log(alunos.map(aluno => aluno.nota))

const resultado = alunos.map(aluno => aluno.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}) // PARA INICIALIZAR O ACUMULADOR, BASTA PASSÁ-LO COMO SEGUNDO PARAMETRO DO REDUCE APÓS A CALLBACK

console.log(resultado);
