Algoritmo "calculoidade"

Var

   ano_atual : inteiro
   ano_nasc  : inteiro
   idade     : inteiro

Inicio

      Escreva ("Em que ano n�s estamos?")
      Leia(ano_atual)
      Escreva ("Em que ano voc� nasceu?")
      Leia(ano_nasc)
      idade <- ano_atual - ano_nasc
      Escreva("Em ", ano_atual, " voc� ter� ",idade)
      
      se (idade >= 21) entao
         Escreva (" e ter� atingido a maioridade.")
         senao
              Escreval (" e ainda ter� menoridade.")
      fimse
              

Fimalgoritmo