const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(num => {
    return num > 1000;
});

console.log(lessThanTen)
console.log(jumbledNums[3])

/*
jumbledNums‎ é uma matriz que contém elementos que são números. ‎
const lessThanTen =‎ declara uma nova variável que armazena o número de índice retornado da invocação . ‎.findIndex()
‎A função de retorno de chamada é uma função de seta que tem um único parâmetro, . Cada elemento na matriz será passado para esta função como um argumento. ‎numjumbledNums
num < 10;‎ é a condição que os elementos são verificados. retornará o índice do primeiro elemento que avalia para essa condição.‎.findIndex()true
*/