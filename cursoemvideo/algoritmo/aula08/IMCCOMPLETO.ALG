Algoritmo "imccompleto"
// Disciplina  :  [Linguagem e L�gica de Programa��o] 
// Professor   : Gustavo Gunabara
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Edson Carlos
// Data atual  : 26/01/2019
Var
// Se��o de Declara��es das vari�veis 
      m, a, i:real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreva("Massa (Kg): ")
		leia(m)
		escreva ("Altura (m): ")
		leia(a)
		i <- m/(a^2)
		
		escreval("IMC: ", I:5:2)

		se (i < 17) entao
         escreval("Muito abaixo do peso")
        senao
             se (i >= 17)  e (i < 18.5) entao
                escreval("Abaixo do peso.")
             senao
                  se (i >= 18.5) e (i < 25) entao
                  escreval("Peso ideal.")
                  senao
                       se (i >= 25) e (i < 30) entao
                       escreval("Sobrepeso.")
                       senao
                            se (i >= 30) e (i < 35) entao
                            escreval("Obesidade.")
                            senao
                                 se (i >= 35) e (i < 40) entao
                                 escreva("Obesidade severa.")
                                 senao
                                      escreval("Obesidade m�rbida.")
                            fimse
                       fimse
                  fimse
             fimse
         fimse
      fimse

Fimalgoritmo
