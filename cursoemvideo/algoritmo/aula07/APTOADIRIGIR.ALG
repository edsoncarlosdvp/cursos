Algoritmo "AptoADirigir"
// Disciplina  :  [Linguagem e L�gica de Programa��o] 
// Professor   : Gustavo Guanabara

Var
// Se��o de Declara��es das vari�veis 
      a_atual, a_nasc, idade:inteiro
      aprovacao:caractere

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   escreval("----------------------------")
   escreval("| DEPARTAMENTO DE TR�NSITO |")
   escreval("----------------------------")
   escreval("")
   
   escreva("Ano atual (aaaa): ")
   leia(a_atual)
   escreva("Ano de Nasc.(aaaa): ")
   leia(a_nasc)
   idade <- a_atual - a_nasc
   
   se (idade > 18) entao
   {
      aprovacao <- "PODE TIRAR A SUA CNH!"
   }
   senao
   {
      aprovacao <- "SEM IDADE PARA TER CNH."
   }
   fimse

   escreval("")
   escreval("----------STATUS------------")
   escreval("IDADE: ", idade, " ANOS.")
   escreval(aprovacao)
   escreval("----------------------------")
   
   

Fimalgoritmo
