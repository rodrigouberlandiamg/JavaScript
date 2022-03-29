function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 16
    if (hora < 12) {
        msg.innerHTML = `Agora são ${hora} hora(s). Bom dia`
        foto.src = 'manha.jpeg'
        document.body.style.background = 'yellow'
    } else if (hora <= 18) {
        msg.innerHTML = `Agora são ${hora} hora(s). Boa Tarde.`
        foto.src = 'tarde.jpeg'
        document.body.style.background = 'green'
    } else {
        msg.innerHTML = `Agora são ${hora} hora(s). Boa noite.`
        foto.src = 'noite.jpeg'
        document.body.style.background = 'black'
    }
    //msg.innerHTML = `Agora são ${hora} hora(s).`
}
