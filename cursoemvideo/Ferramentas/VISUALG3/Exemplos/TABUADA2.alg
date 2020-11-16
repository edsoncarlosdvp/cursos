

algoritmo "Tabuada"
// Disciplina  : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Taboada com (multiplicação,soma,subtração e divisão)
// Autor(a)    : Leonardo Suely VI, Suelly, Aldair Avelino
// Data atual  : 11/05/2018

var cont, n, x, op, q:inteiro
                    r: real
inicio
   Limpatela
   escreval
   escreval("1 - multiplicaçao")
   escreval("2 - adicao")
   escreval("3 - subtracao")
   escreval("4 - divisao")
   escreval("0 - pra sair")
   Escreval
   Escreva("escolha a sua opcao : ")
   leia(op)
   SE (Op <> 0) Entao

      Escreval
      Escreval   // pula duas linhas em branco

      Escreva("Digite o numero : ")
      leia(n)
      Escolha op
         limpatela
      caso 1
         para cont de 1 ate 12 faca
            escreval (n:2," X ",cont:2," = ",n*cont:2)
         fimpara
      caso 2
         para cont de 1 ate 12 faca
            escreval (n:2," + ",cont:2," = ",n+cont:2)
         fimpara
      caso 3
         para cont de 1 ate 12 faca
            escreval (n:2," - ",cont:2," = ",n-cont:2)
         fimpara
      caso 4
         r <- n
         para cont de 1 ate 12 faca
            escreval (n:2," ÷ ",cont:2," = ",r/cont:3:3)
         fimpara
      fimescolha
   Fimse
fimalgoritmo

