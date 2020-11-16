

Algoritmo "MAPA"
// Disciplina  : Programação e Cálculo Numérico
// Professor   : André Noel
// Descrição   :1. Leia os valores de quantidades de peças produzidas por funcionários,
//                 por dia de semana, para 4 funcionários e 5 dias.
//              2. Calcule a média aritmética simples de peças por funcionário.
//              3. Calcule e exiba a variância populacional para cada funcionário.
//              4. Calcule o desvio padrão para cada funcionário.
//              5. Exiba a média aritmética +- desvio padrão, como no exemplo,
//                 para cada funcionário.
// Autor(a)    : Rafael Muhlmann
// Data atual  : 28/07/2018
Var
// Seção de Declarações das variáveis
   n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20 : inteiro
   media1, media2, media3, media4, vp1, vp2, vp3, vp4, dp1, dp2, dp3, dp4 : real
Inicio
// Seção de Comandos, procedimentos, funções, operadores, etc
   Escreval
   Escreva("Digite a Produção do Funcionário A na Segunda")
   Leia(n1)
   Escreva("Digite a Produção do Funcionário A na Terça")
   Leia(n2)
   Escreva("Digite a Produção do Funcionário A na Quarta")
   Leia(n3)
   Escreva("Digite a Produção do Funcionário A na Quinta")
   Leia(n4)
   Escreva("Digite a Produção do Funcionário A na Sexta")
   Leia(n5)

   Escreva("Digite a Produção do Funcionário B na Segunda")
   Leia(n6)
   Escreva("Digite a Produção do Funcionário B na Terça")
   Leia(n7)
   Escreva("Digite a Produção do Funcionário B na Quarta")
   Leia(n8)
   Escreva("Digite a Produção do Funcionário B na Quinta")
   Leia(n9)
   Escreva("Digite a Produção do Funcionário B na Sexta")
   Leia(n10)

   Escreva("Digite a Produção do Funcionário C na Segunda")
   Leia(n11)
   Escreva("Digite a Produção do Funcionário C na Terça")
   Leia(n12)
   Escreva("Digite a Produção do Funcionário C na Quarta")
   Leia(n13)
   Escreva("Digite a Produção do Funcionário C na Quinta")
   Leia(n14)
   Escreva("Digite a Produção do Funcionário C na Sexta")
   Leia(n15)

   Escreva("Digite a Produção do Funcionário D na Segunda")
   Leia(n16)
   Escreva("Digite a Produção do Funcionário D na Terça")
   Leia(n17)
   Escreva("Digite a Produção do Funcionário D na Quarta")
   Leia(n18)
   Escreva("Digite a Produção do Funcionário D na Quinta")
   Leia(n19)
   Escreva("Digite a Produção do Funcionário D na Sexta")
   Leia(n20)
   
   escreval
   media1 <-(n1+n2+n3+n4+n5)/5
   Escreval ("Média da Produção Semanal para o Funcionário A é: ", media1 :1:2)

   media2 <-(n6+n7+n8+n9+n10)/5
   Escreval ("Média da Produção Semanal para o Funcionário B é: ", media2 :1:2)

   media3 <-(n11+n12+n13+n14+n15)/5
   Escreval ("Média da Produção Semanal para o Funcionário C é: ", media3 :1:2)

   media4 <-(n16+n17+n18+n19+n20)/5
   Escreval ("Média da Produção Semanal para o Funcionário D é: ", media4 :1:2)

   vp1 <-( ((n1-media1)^2) +((n2-media1)^2)+((n3-media1)^2)+((n4-media1)^2)+((n5-media1)^2))/5)
   Escreval ("Variância Populacional para o Funcionário A é: ", vp1 :1:2)

   vp2 <-(((n6-media2)^2)+((n7-media2)^2)+((n8-media2)^2)+((n9-media2)^2)+((n10-media2)^2))/5)
   Escreval ("Variância Populacional para o Funcionário B é: ", vp2 :1:2)

   vp3 <-(((n11-media3)^2)+((n12-media3)^2)+((n13-media3)^2)+((n14-media3)^2)+((n15-media3)^2))/5)
   Escreval ("Variância Populacional para o Funcionário C é: ", vp3 :1:2)

   vp4 <-(((n16-media4)^2)+((n17-media4)^2)+((n18-media4)^2)+((n19-media4)^2)+((n20-media4)^2))/5)
   Escreval ("Variância Populacional para o Funcionário D é: ", vp4 :1:2)

   dp1 <- RaizQ(vp1)
   Escreval("O Desvio Padrão para o Fincionário A é: ", dp1 :1:2)
   dp2 <- RaizQ(vp2)
   Escreval("O Desvio Padrão para o Fincionário B é: ", dp2 :1:2)
   dp3 <- RaizQ(vp3)
   Escreval("O Desvio Padrão para o Fincionário C é: ", dp3 :1:2)
   dp4 <- RaizQ(vp4)
   Escreval("O Desvio Padrão para o Fincionário D é: ", dp4 :1:2)

   //Conforme solicitado no Enunciado:
   Escreval ("Funcionário A: ",vp1," +- ",dp1 :1:2, " peças por dia")
   Escreval ("Funcionário B: ",vp2," +- ",dp2 :1:2, " peças por dia")
   Escreval ("Funcionário C: ",vp3," +- ",dp3 :1:2, " peças por dia")
   Escreval ("Funcionário D: ",vp4," +- ",dp4 :1:2, " peças por dia")

Fimalgoritmo


