var numeroAleatorio = 1;
var tentativasMaximas = 10;
var tentativasFeitas = 0;

function atualizar() {
    numeroAleatorio = parseInt(Math.random() * 100);
    console.log(numeroAleatorio);
}

function verificarNumero() {
    var numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 1 || numero > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        return;
    }

    tentativasFeitas++;

    var acertou = false;
    var mensagem;

    for (var i = 0; i < tentativasMaximas; i++) {
        if (numero === numeroAleatorio) {
            acertou = true;
            mensagem = "Parabéns! Você acertou o número em " + tentativasFeitas + " tentativas!";
            break;
        } else if (tentativasFeitas === tentativasMaximas) {
            mensagem = "Você esgotou todas as suas tentativas. O número correto era " + numeroAleatorio + ".";
            break;
        } else {
            var dica = numero < numeroAleatorio ? "maior" : "menor";
            mensagem = "Errou! Tente um número " + dica + ". Você possui mais " + (tentativasMaximas - tentativasFeitas) + " tentativas.";
            break;
        }
    }

    alert(mensagem);

    if (acertou || tentativasFeitas === tentativasMaximas) {
        reiniciarJogo();
    }
}

atualizar();