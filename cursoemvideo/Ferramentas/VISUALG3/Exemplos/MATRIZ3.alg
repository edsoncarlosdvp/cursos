algoritmo "Matriz"
// Função : ler numeros impares e pares de uma matriz 3x3
// Autor :     
// Data : 18/03/2018
// Seção de Declarações 
var
i, j : inteiro
M : vetor[1..3,1..3] de inteiro

inicio
      limpatela
      escreval ("Elementos da Matriz 3x3 - Entrada de Dados")
      Escreval ("")
      
      para i de 1 ate 3 faca
           para j de 1 ate 3 faca
                escreva ("Elemento M[", i, ",", j, "]: ")
                leia (M[i,j])
            fimpara
   fimpara

   limpatela
   escreval("Elementos da Matriz 3x3")
   escreval("")
   escreval("RESULTADOS:")
   escreval("")
   
   escreval("Elementos da Matriz:")
   para i de 1 ate 3 faca
      escreva("  |  ")
      para j de 1 ate 3 faca
         escreva(M[i,j],"  ")
      fimpara
      escreval("  |")
   fimpara

   escreval("")
   
escreva("Elementos da matriz que são pares: ")

   para i de 1 ate 3 faca
      para j de 1 ate 3 faca
         se (M[i,j] mod 2 = 0) entao
            escreva(M[i,j], "  ")
         fimse
      fimpara
   fimpara

   escreval("")
   escreval("")
   
   
   escreva("Elementos da matriz que são impares: ")

   para i de 1 ate 3 faca
      para j de 1 ate 3 faca
         se (M[i,j] mod 2 = 1) entao
            escreva(M[i,j], "  ")
         fimse
      fimpara
   fimpara

   escreval("")
   escreval("")
fimalgoritmo
