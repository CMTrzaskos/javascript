function contar(){
    var ini =document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
 
    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!]')
    }else{
        res.innerHTML='Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p<=0){
            window.alert('passo inválido!')
        }
        if(i<f){

        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} 👉`
        }
        
    }else{
        for(var c =i; c>= f; c-=p){
            res.innerHTML +=`${c} 👉`
        }
    }res.innerHTML +=`🏴‍☠️`
}
}