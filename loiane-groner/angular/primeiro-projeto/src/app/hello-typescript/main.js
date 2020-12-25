var minhaVar = 'Minha variável';
function minhaFunc(x, y) {
    return x + y;
}
// ES 6 ou ECMAScript 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES 2015 ARROW FUNCTION
var matematica = /** @class */ (function () {
    function matematica() {
    }
    matematica.prototype.soma = function (a, b) {
        return a + b;
    };
    return matematica;
}());
// TIPAGEM DE VARIÁVEIS
var n1 = "uma string";
n1 = "dois";
