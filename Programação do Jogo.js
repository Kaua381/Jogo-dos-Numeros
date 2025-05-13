let tentativas;

function iniciarJogo(dificuldade) {

    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log(numeroSecreto);

    if (dificuldade === 'facil') {
        tentativas = 10;
    } else if (dificuldade === 'normal') {
        tentativas = 5;
    }else if (dificuldade === 'dificil') {
        tentativas = 3;
    }

    document.getElementById('blocoJogo').classList.remove('bloqueado');
    console.log("Jogo iniciado em modo: " + dificuldade);
    
    document.getElementById("mensagemDificudade").innerHTML = "Você esta jogando no " + dificuldade;
    document.getElementById("mensagemTentativa").innerHTML = "Você tem " + tentativas + " tentativas para acertar o número secreto.";
}

function enviarPalpite() {
    let palpite = document.getElementById('palpite').value;
    document.getElementById('mensagem')

    if (palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
        return;
    }

}