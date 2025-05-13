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
    let palpite = document.getElementById('palpite').value;

    document.getElementById('spoiler').innerHTML = numeroSecreto;

    if (palpite < numeroSecreto) {
        document.getElementById('resultado').innerHTML = "Seu palpite é menor que o número secreto.";
    } else if (palpite > numeroSecreto) {
        document.getElementById('resultado').innerHTML = "Seu palpite é maior que o número secreto.";
    } else if (palpite == numeroSecreto) {
        document.getElementById('resultado').innerHTML = "Parabéns! Você acertou o número secreto: " + numeroSecreto;
        document.getElementById('pergunta').innerHTML = "Você deseja jogar novamente?";

        document.getElementById('opçoesJogo').innerHTML = `
        <button onclick="reiniciarJogo()">Sim</button>
        <button onclick="encerrarJogo()">Não</button> 
        `;
    }

}
    function reiniciarJogo() {
        location.reload();
    }

    function encerrarJogo() {
        window.location.href = "creditos.html";
    }
