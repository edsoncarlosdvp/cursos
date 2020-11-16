Algoritmo "Aluno"
// Disciplina  :  [Linguagem e Lógica de Programação] 
// Professor   : Gustavo Guanabara

Var
// Seção de Declarações das variáveis 
      p_nota, s_nota, media:real
      aprovacao:caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("-----------------------------")
   escreval("| ESCOLA ESTUDE VOCÊ TAMBÉM |")
   escreval("-----------------------------")
   escreval("")
   
   escreva("Primeira nota: ")
   leia(p_nota)
   escreva("Segunda nota: ")
   leia(s_nota)
   media <- (p_nota + s_nota) / 2
   
   se (media < 5) entao
   
      aprovacao <- "O ALUNO ESTÁ REPROVADO."

   senao
      se (media >= 5) e (media < 7) entao
      aprovacao <- "O ALUNO ESTÁ EM RECUPERAÇÃO"
      
      senao
      aprovacao <- "O ALUNO ESTÁ APROVADO!"
      fimse
   fimse

   escreval("")
   escreval("----------STATUS------------")
   escreval("MÉDIA: ", media:5:2, " PONTOS.")
   escreval(aprovacao)
   escreval("----------------------------")
   
   

Fimalgoritmo
