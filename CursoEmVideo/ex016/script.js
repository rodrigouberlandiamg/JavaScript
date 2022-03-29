function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passos = Number(document.getElementById('passos').value)
    if (inicio == 0){
        document.getElementById("resultado").innerHTML = 'Impossivel contar. Informe o valor de inicio.'
    } else if (fim == 0) {
        document.getElementById("resultado").innerHTML = 'Impossivel contar. Informe o valor de fim.'
    } else if (passos == 0) {
        document.getElementById("resultado").innerHTML = 'Impossivel contar. Informe a quantidade de passos.'
    } else {
        resp = ''
        for (i=inicio;i<=fim;i=i+passos){
            resp = resp + i + ' - '
        document.getElementById("resultado").innerHTML = resp
        }
    }
}
