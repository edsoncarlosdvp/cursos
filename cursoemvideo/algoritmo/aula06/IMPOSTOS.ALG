Algoritmo "emprestimos"

Var

   emprestimo, parcelas, juros, resultado : real
   
Inicio

      Escreva ("Qual o valor do empréstimo? ")
      Leia(emprestimo)
      Escreva ("Quantas parcelas? ")
      Leia(parcelas)
      juros <- (emprestimo * 20) / 100
      resultado <- juros * 10
      Escreva("Vou pagar ", parcelas, " de R$ ", resultado:5:2)

Fimalgoritmo