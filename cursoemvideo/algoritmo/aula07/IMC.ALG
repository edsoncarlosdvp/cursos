Algoritmo "semnome"
// Disciplina  :  [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 26/01/2019
Var
// Seção de Declarações das variáveis 
      m, a, i:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Massa (Kg): ")
		leia(m)
		escreva ("Altura (m): ")
		leia(a)
		i <- m/(a^2)
		
		escreval("IMC: ", I:5:2)

		se ((i >= 18.5)  e (i < 25)) entao
		{
			escreva("Parabéns! Você está no seu peso ideal.")
		}
		senao
		{
			escreva("Você não está na faixa de peso ideal.")
		}
      fimse

Fimalgoritmo
