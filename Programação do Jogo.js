let tentativas;
let numeroSecreto;

function iniciarJogo(dificuldade) {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log("Número secreto:", numeroSecreto);

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

    document.getElementById('resultadoJogo').classList.remove('bloqueado');

    let palpite = document.getElementById('palpite').value;

    if (palpite < 1 || palpite > 100) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um número entre 1 e 100.";
        return;
    }

    if (palpite < numeroSecreto) {
        document.getElementById('resultado').innerHTML = "Seu palpite é menor que o número secreto.";
    } else if (palpite > numeroSecreto) {
        document.getElementById('resultado').innerHTML = "Seu palpite é maior que o número secreto.";
    } else if (palpite == numeroSecreto) {
        document.getElementById('resultado').innerHTML = "Parabéns! Você acertou o número secreto: " + numeroSecreto;
        document.getElementById('pergunta').innerHTML = "Você deseja jogar novamente?";

        document.getElementById('opçoesJogo').innerHTML = `
        <button onclick="reiniciarJogo()">Sim</button>
        <button onclick="encerrarJogo()">Não</button><br><br>
        <img src = "emojiMeme.jpg" alt = "emojiMeme" width="200" height="200">
        `;
    }

    tentativas--;
    document.getElementById('mensagemTentativa').innerHTML = "Você tem " + tentativas + " tentativas para acertar o número secreto.";
    if (tentativas <= 0) {
        document.getElementById('resultado').innerHTML = "Você perdeu! O número secreto era: " + numeroSecreto;
        document.getElementById('pergunta').innerHTML = "Você deseja jogar novamente?";

        document.getElementById('opçoesJogo').innerHTML = `
        <button onclick="reiniciarJogo()">Sim</button>
        <button onclick="encerrarJogo()">Não</button><br><br>
        <img src = "emojiMemeTriste.webp" alt = "emojiMeme" width="350" height="200">
        `;
    }

    document.getElementById('palpite').value = "";

}

function reiniciarJogo() {
    location.reload();
}

function encerrarJogo() {
    window.location.href = "creditos.html";
}
