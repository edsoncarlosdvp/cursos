const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(word => {
    return word.length < 6;
});

console.log(words)
console.log(shortWords)

/*
words‎ é uma matriz que contém elementos de string. ‎
const shortWords =‎ declara uma nova variável que armazenará a matriz retornada da invocação . ‎.filter()
‎A função de retorno de chamada é uma função de seta tem um único parâmetro, . Cada elemento na matriz será passado para esta função como um argumento. ‎wordwords
word.length < 6;‎ é a condição na função de retorno de chamada. Qualquer um da matriz que tiver menos de caracteres será adicionado à matriz.‎wordwords6shortWords
*/