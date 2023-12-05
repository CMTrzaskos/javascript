function carregar(){
    var data = new Date()
    var hora = 19//data.getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas.`

    if( hora >= 0 && hora < 12){
        img.src='imagens/pexels-ravi-kant-14888670.jpg'
        
    } else if(hora >=12 && hora <=18){
        img.src = 'imagens/pexels-george-desipris-858241.jpg'
        document.body.style.background ='orange'
    } else {
        img.src = 'imagens/pexels-piccinng-3052361.jpg'
        document.body.style.background ='gray'
    }
}