Algoritmo "semnome"
// Disciplina  :  [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
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

		se ((i >= 18.5)  e (i < 25)) entao
		{
			escreva("Parab�ns! Voc� est� no seu peso ideal.")
		}
		senao
		{
			escreva("Voc� n�o est� na faixa de peso ideal.")
		}
      fimse

Fimalgoritmo
