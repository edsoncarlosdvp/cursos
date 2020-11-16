Algoritmo "calculoidade"

Var

   ano_atual : inteiro
   ano_nasc  : inteiro
   idade     : inteiro

Inicio

      Escreva ("Em que ano nós estamos?")
      Leia(ano_atual)
      Escreva ("Em que ano você nasceu?")
      Leia(ano_nasc)
      idade <- ano_atual - ano_nasc
      Escreva("Em ", ano_atual, " você terá ",idade)
      
      se (idade >= 21) entao
         Escreva (" e terá atingido a maioridade.")
         senao
              Escreval (" e ainda terá menoridade.")
      fimse
              

Fimalgoritmo