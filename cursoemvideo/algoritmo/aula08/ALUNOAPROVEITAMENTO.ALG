Algoritmo "AlunoAproveitamento"
// Disciplina  :  [Linguagem e L�gica de Programa��o] 
// Professor   : Gustavo Guanabara

Var
// Se��o de Declara��es das vari�veis 
      p_nota, s_nota, media:real
      aprovacao:caractere
      aproveitamento: caractere

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   escreval("-----------------------------")
   escreval("| ESCOLA ESTUDE VOC� TAMB�M |")
   escreval("-----------------------------")
   escreval("")
   
   escreva("Primeira nota: ")
   leia(p_nota)
   escreva("Segunda nota: ")
   leia(s_nota)
   media <- (p_nota + s_nota) / 2
   
   se (media < 5) entao
   
      aprovacao <- "O ALUNO EST� REPROVADO."

   senao
      se (media >= 5) e (media < 7) entao
      aprovacao <- "O ALUNO EST� EM RECUPERA��O"
      
      senao
      aprovacao <- "O ALUNO EST� APROVADO!"
      fimse
   fimse

   se (media >= 9) e (media <= 10) entao
      aproveitamento <- "A"
      senao
           se (media >=8) e (media <= 8.99) entao
           aproveitamento <- "B"
      
           senao
                se (media >=7) e (media <=7.99) entao
                aproveitamento <- "C"

                senao
                     se (media >=6) e (media <= 6.99) entao
                     aproveitamento <- "D"
                     
                     senao
                          se (media >=5) e (media <= 5.99) entao
                          aproveitamento <- "E"

                          senao
                               aproveitamento <- "F"
                          fimse

               fimse
          fimse
     fimse
   escreval("")
   escreval("----------STATUS------------")
   escreval("M�DIA: ", media:5:2, " PONTOS.")
   escreval("SITUA��O: ", aprovacao)
   escreval("APROVEITAMENTO: ", aproveitamento)
   escreval("----------------------------")
   
   

Fimalgoritmo
