class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new Lancamento('Salário: ', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

const salario2 = new Lancamento('Salário: ', 45000)
const contaDeLuz2 = new Lancamento('Energia: ', -150)

const contas2 = new CicloFinanceiro(7, 2018)
contas2.addLancamentos(salario2, contaDeLuz2)

console.log(contas.sumario())
console.log(contas2.sumario())