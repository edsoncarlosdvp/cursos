Algoritmo "criancaesperanca"
// Disciplina  :  [Linguagem e L�gica de Programa��o] 
// Professor   : Gustavo Gunabara
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Edson Carlos
// Data atual  : 26/01/2019
Var
// Se��o de Declara��es das vari�veis 
      d, v:inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval("----------------------------")
escreval("|     CRIAN�A ESPERAN�A    |")
escreval("----------------------------")
escreval(" Muito obrigado por ajudar! ")
escreval(" [1] Para doar R$ 10     ")
escreval(" [2] Para doar R$ 25     ")
escreval(" [3] Para doar R$ 50     ")
escreval(" [4] Para doar outros valores")
escreval(" [5] Para cancelar     ")
leia(d)

escolha d
  caso 1
  v <- 10
  
  caso 2
  v <- 25
  
  caso 3
  v <- 50
  
  caso 4
  escreva("Digite o valor desejado: R$ ")
  leia(v)
  
  caso 5
  v <- 0

FimEscolha

escreval("----------------------------")
escreval(" SUA DOA��O FOI DE: R$ ", v)
escreval(" MUITO OBRIGADO! ")
escreval("----------------------------")

Fimalgoritmo
