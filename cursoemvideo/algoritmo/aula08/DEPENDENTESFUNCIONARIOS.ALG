Algoritmo "dependentesfuncionarios"
// Disciplina  :  [Linguagem e L�gica de Programa��o] 
// Professor   : Gustavo Gunabara
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Edson Carlos
// Data atual  : 26/01/2019
Var
// Se��o de Declara��es das vari�veis 
      nome: caractere
      sal, n_sal: real
      dep: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   escreva("Qual o nome do funcion�rio? ")
   leia(nome)
   escreva("Qual o sal�rio do funcion�rio? R$ ")
   leia(sal)
   escreva("Qual � a quantidade de dependentes? ")
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
   
   escreval("O novo sal�rio de ", nome, " ser� de R$ ", n_sal:5:2)
   
Fimalgoritmo