const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Não há caractere para ser exibido nesta posição
console.log(escola.charCodeAt(3)) // Código unicode do caractere na posição 3
console.log(escola.indexOf('3')) // Exibe o caractere da posição correspondente

console.log(escola.substring(1)) // Ignora a posição deste caratere, imprimindo os restantes
console.log(escola.substring(0, 3)) // Imprime os caracteres com base na posição inicial e final
console.log('Escola'.concat(escola).concat("!")) // Concatena os caracteres
console.log('Escola' + escola + "!") // Outra e melhor maneira de concatenar, os caracteres
console.log(escola.replace(3, 'e')) // Substitui o caractere da posição correspondente
console.log('Ana,Maria,Pedro'.split(',')) // Transforma as strings em um array