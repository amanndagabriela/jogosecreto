//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo da sorte';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 0 a 10';
let listaDeNumerosSecretos = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirTextoInicial(){
    exibirTextoNaTela('h1', 'Descubra o número!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 20.');
}

exibirTextoInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        //let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        //let mensagemTentativas = 'Você descobriu o número com' ${tentativas};
        exibirTextoNaTela('p', 'Parabéns, jogue novamente!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++ 
        limparCampo();
    }
    
    console.log(chute == numeroSecreto);
}
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt (Math.random() * 20 + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSecretos.length;

   if (quantidadeDeElementosNaLista == 19) {
    listaDeNumerosSecretos = []
   }

   if (listaDeNumerosSecretos.includes(numeroEscolhido)) {
       return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSecretos.push(numeroEscolhido);
        console.log(listaDeNumerosSecretos);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tantativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}