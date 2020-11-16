const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaços
console.log(prod1)

const prod2 = {
   nome: 'Camisa Polo',
   preco: 79.90
}

const prod3 = {
   nome: 'Camiseta',
   preco: 21.50,
   obj: {
      propriedade1: 1,
      obj: {
         propriedade2: 2,
         obj: {
            propriedade3: 3
         }
      }
   }
} // Objetos aninhados. Onde cada objeto possui um nome único pra cada

console.log(prod3)