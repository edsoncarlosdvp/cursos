Algoritmo "dependentesfuncionarios"
// Disciplina  :  [Linguagem e Lógica de Programação] 
// Professor   : Gustavo Gunabara
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Edson Carlos
// Data atual  : 26/01/2019
Var
// Seção de Declarações das variáveis 
      nome: caractere
      sal, n_sal: real
      dep: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Qual o nome do funcionário? ")
   leia(nome)
   escreva("Qual o salário do funcionário? R$ ")
   leia(sal)
   escreva("Qual é a quantidade de dependentes? ")
   leia(dep)
   
   // 5, 10, 15, 18
   Escolha dep
   
           caso 0
                n_sal <- sal + (sal*5/100)

           caso 1, 2, 3
                n_sal <- sal + (sal*10/100)
                
           caso 4, 5, 6
                n_sal <- sal + (sal*15/100)

           outrocaso
                n_sal <- sal + (sal*18/100)
   
   FimEscolha
   
   escreval("O novo salário de ", nome, " será de R$ ", n_sal:5:2)
   
Fimalgoritmo