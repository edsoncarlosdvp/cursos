// Clousure é o escopo criando quando uma função é declarada
// Esse escopo permite a função acessar e manipular variávveis externas à função

// Contexto Lexo em ação

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao());