var Agora = new Date
var hora = Agora.getHours
console.log(`Agora são ${hora}`)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa Noite')
}