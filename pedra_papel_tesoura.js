function obterEscolhaComputador(){
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    return opcoes[indiceAleatorio];
}

function determinarVencedor(escolhaJogador, escolhaComputador){
    if(escolhaJogador === escolhaComputador){
        return 'Empate!';
    }
    if((escolhaJogador === 'pedra' && escolhaComputador === 'tesoura')
    || (escolhaJogador === 'papel' && escolhaComputador === 'pedra')
    || (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')){
        return 'Jogador Vence!';
    }else{
        return 'Máquina Vence!';
    }
}

function jogar(escolhaJogador){
    const escolhaComputador = obterEscolhaComputador();
    const resultado = determinarVencedor(escolhaJogador, escolhaComputador);

    document.getElementById('Resultado').textContent = 
        `Você escolheu: ${escolhaJogador}. O computador escolheu: ${escolhaComputador}. ${resultado}`;

    alterarImagem(resultado);
}

function alterarImagem(resultado){
    const imgJogador = document.getElementById('humanWon');
    const imgRobo = document.getElementById('machineWon');

    if(resultado === "Jogador Vence!"){
        imgJogador.src = "images/human.png";
        imgRobo.src = "images/explosion.gif";

    } else if(resultado === "Máquina Vence!") {
        imgJogador.src = "images/explosion.gif";
        imgRobo.src = "images/machine.png" 
    } else {
        imgJogador.src = "images/human.png"; // imagem padrão ou empate
        imgRobo.src = "images/machine.png"
    }
}