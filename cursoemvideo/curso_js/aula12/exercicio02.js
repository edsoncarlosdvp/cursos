var pegaHora = new Date()
var hora = pegaHora.getHours()
var min  = pegaHora.getMinutes()
console.log(`Agora são exatamente ${hora}h${min}m`)
if(hora < 12){
     console.log('Bom dia!')
} else if (hora <= 18){
     console.log('Boa tarde!')
}else{
     console.log('Boa noite!')
}