let numeroSecreto = gerarNumeroAleatorio();
console.log(`Número secreto: ${numeroSecreto}`)

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

//qual será a função do "verificarChute"? Verificar chute! (kk)
function verificarChute() {
    console.log('O botão foi clicado');
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}