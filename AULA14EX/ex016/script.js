function calcular(){

    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('erro')
    }else{
        res.innerHTML = ('Contando...</br>')

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p == 0 ){
            window.alert('Passo invalido')
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c+= p){
                res.innerHTML += `${c} \u{27A1}`
            }
            
        }else{
            for (var c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{27A1}` 
            }
        }

        
    }
        
    
}