Algoritmo "Aluno"
// Disciplina  :  [Linguagem e L�gica de Programa��o] 
// Professor   : Gustavo Guanabara

Var
// Se��o de Declara��es das vari�veis 
      p_nota, s_nota, media:real
      aprovacao:caractere

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

   escreval("")
   escreval("----------STATUS------------")
   escreval("M�DIA: ", media:5:2, " PONTOS.")
   escreval(aprovacao)
   escreval("----------------------------")
   
   

Fimalgoritmo
