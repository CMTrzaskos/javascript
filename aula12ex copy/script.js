function verificar(){
    var data= new Date()
    var  ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if(fano.value.lenght == 0 || fano.value > ano){
        alert('[ERRO] Verifique seus dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero= ''
        var img = document.createAttribute('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <13){
                //criança
                img.setAttribute('src', 'imagens/criança-m.jpg')
            } else if (idade <25){
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
            
        } else if (fsex[1].checked) {
            genero= 'Mulher'
            if (idade >=0 && idade <13){
                //criança
                img.setAttribute('src', 'imagens/criança-f.jpg')
            } else if (idade <25){
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}