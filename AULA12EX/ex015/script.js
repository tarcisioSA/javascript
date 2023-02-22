function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('ERRO')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src' , 'bebe_masc.png')
            }else if(idade < 20){
                img.setAttribute('src', 'jovem_masc.png')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src', 'adulto_masc.png')
                //adulto
            }else{
                img.setAttribute('src' , 'idoso_masc.png')
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src' , 'bebe_fem.png')
                //criança
            }else if(idade < 20){
                img.setAttribute('src' , 'jovem_fem.png')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src' , 'adulto_fem.png')
                //adulto
            }else{
                img.setAttribute('src', 'idoso_fem.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos.</br>`
        res.appendChild(img)

    }
}