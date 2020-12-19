let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) //Aqui, this aponta para global

const obj = {}
comparaComThis = comparaComThis.bind(obj) //Fazendo this apontar para obj
comparaComThis(global) //This não aponta mais para global
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)