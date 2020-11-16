function carregar(){
   var header = document.getElementById('header');
   var msg = document.getElementById('msg');
   var img = document.getElementById('imagem');
   var data = new Date();
   var hora = data.getHours();
   msg.innerHTML = `Agora são ${hora} horas.`
   if(hora >= 0 && hora < 12){
      //Bom Dia
      header.innerHTML = 'Bom Dia!'
      img.src = 'img/manha.jpg'
      document.body.style.background = '#e2cd9f'
   }else if (hora >= 12 && data < 18){
      //Boa Tarde
      header.innerHTML = 'Boa Tarde!'
      img.src = 'img/tarde.jpg'
      document.body.style.background = '#b9846f'
   }else{
      // Boa Noite
      header.innerHTML = 'Boa Noite!'
      img.src = 'img/noite.jpg'
      document.body.style.background = '#515154'
   }
}