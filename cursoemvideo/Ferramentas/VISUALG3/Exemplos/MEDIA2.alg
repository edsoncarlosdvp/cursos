Algoritmo "Média"
// Disciplina  :  [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Calculo da média
// Autor(a)     : Nome do(a) aluno(a)

TIPO
          CURSO = registro
                   Disciplina : Caracter
                   Nota_1     : Real
                   Nota_2     : Real
                   Nota_3     : Real
                   Nota_4     : Real
                   Media      : Real
                   Situacao  : Logico
        FIMregistro

Var
        Dados : VETOR[1..3] DE CURSO
        N1,N2,N3,N4, MD : REAL
                 I  : Inteiro
Inicio
      PARA I DE 1 ATÉ 3 FAÇA
            Escreva("Digite a disciplina : ")
            Leia(Dados[i].Disciplina)
            Escreva("Digite a Nota 1 : ")
            Leia(N1)
            Escreva("Digite a Nota 2 : ")
            Leia(N2)
            Escreva("Digite a Nota 3 : ")
            Leia(N3)
            Escreva("Digite a Nota 4 : ")
            Leia(N4)
            MD <- (N1+ N2+ N3+N4)/4
            Dados[i].Nota_1 <- N1
            Dados[i].Nota_2 <- N2
            Dados[i].Nota_3 <- N3
            Dados[i].Nota_4 <- N4
            Dados[i].Media  <- MD
            Dados[i].Situacao <- Falso
            SE MD >= 7 ENTÃO
                 Dados[i].Situacao <- Verdadeiro
            FIMSE
     FIMPARA
// mostrar os dados
     ESCREVAL
      PARA I DE 1 ATÉ 3 FAÇA
            ESCREVA(Dados[i].Disciplina)
            ESCREVA(Carac(9))    // tabulação
            ESCREVA(Dados[i].Nota_1:2:2)
            ESCREVA(Carac(9))    // tabulação
            ESCREVA(Dados[i].Nota_2:2:2)
            ESCREVA(Carac(9))    // tabulação
            ESCREVA(Dados[i].Nota_3:2:2)
            ESCREVA(Carac(9))    // tabulação
            ESCREVA(Dados[i].Nota_4:2:2)
            ESCREVA(Carac(9))    // tabulação
            ESCREVA(Dados[i].Media:2:2)
            ESCREVA(Carac(9))    // tabulação
            SE Dados[i].Situacao ENTÃO
                 ESCREVA("Aprov")
           SENÃO
                 ESCREVA("Reprov")
            FIMSE
            ESCREVAL
     FIMPARA
    FIMALGORITMO
