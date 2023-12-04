var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
        console.log('Segunda')
        break
        console.log('Terça')
        break
        console.log('Quarta')
        break
        console.log('Quinta')
        break
        console.log('Sexta')
        break
        console.log('Sábado')
        break
        console.log('[ERRO] Dia inválido')
        break
}