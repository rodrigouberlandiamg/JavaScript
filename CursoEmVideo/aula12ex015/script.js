function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtAno')
    var res = window.document.getElementById('resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]: Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('txtSexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade <= 10) {
                // Crianca
                img.setAttribute('src','crianca_homem.webp')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src','jovem_homem.jpeg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','adulto_homem.webp')
            } else {
                // Idoso
                img.setAttribute('src','idoso_homem.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade <= 10) {
                // Crianca
                img.setAttribute('src','crianca_mulher.webp')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src','jovem_mulher.jpeg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','adulta_mulher.jpeg')
            } else {
                // Idoso
                img.setAttribute('src','idosa_mulher.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade Calculada ${idade} e genero ${genero}`
        res.appendChild(img)
    }
}