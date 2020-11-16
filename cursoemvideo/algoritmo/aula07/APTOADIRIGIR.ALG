Algoritmo "AptoADirigir"
// Disciplina  :  [Linguagem e Lógica de Programação] 
// Professor   : Gustavo Guanabara

Var
// Seção de Declarações das variáveis 
      a_atual, a_nasc, idade:inteiro
      aprovacao:caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("----------------------------")
   escreval("| DEPARTAMENTO DE TRÂNSITO |")
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
