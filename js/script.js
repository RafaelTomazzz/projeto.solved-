function calcular(){
    var valora = Number(document.getElementById('valora').value);
    var valorb = Number(document.getElementById('valorb').value);
    var valorc = Number(document.getElementById('valorc').value);
    var delta = Math.pow(valorb,2) - 4 * valora *valorc

    if( delta > 0){
        var x1 = (((-1*valorb) + Math.sqrt(delta)) / 2*valora).toFixed(3)
        var x2 = (((-1*valorb) - Math.sqrt(delta)) / 2*valora).toFixed(3)
    }
    else if( delta === 0){
        var x1 = ((-valorb + Math.sqrt(delta))/2*valora).toFixed(3)
        var x2 = ((-valorb) + Math.sqrt(delta)/2*valora).toFixed(3)
    }
    else if( delta < 0){
        alert('Delta < 0. não existem raízes no conjunto dos numeros reais.')
        x1 = "erro"
        x2 = "erro"
    }

    document.getElementById('valorx1').innerHTML = x1
    document.getElementById('valorx2').innerHTML = x2
    //(document.getElementById('valorx1').innerHTML).value = x1
    //(document.getElementById('valorx2').innerHTML).value = x2

}

var btncalculadora1 = document.getElementById('btncalculadora1')

btncalculadora1.addEventListener("click", function(){
    var calculadora1 = document.getElementById("div-card-calculadora")
    calculadora1.style.visibility = "visible"
})

var btnexplicacao2 = document.getElementById('btnexplicacao2')

btnexplicacao2.addEventListener("click", function(){
    
    var explicacao2 = document.getElementById("div-card-calculadora")
    explicacao2.style.visibility = "hidden"
})
