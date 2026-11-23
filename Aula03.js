alert("Boas Vindas ao Jogo do Número Secreto! ");
let numeroSecreto = 4;
let chute;
let tentativas = 1;

//Enquanto chute não foi igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt("Digite um número de 1 a 10: ");

    //se o chute for igual oa n.s
    if (chute == numeroSecreto) {
        alert(`Parabéns, Você acertou depois de ${tentativas} tentativas.`)
    } else {
        if (chute > numeroSecreto) {
            alert(`Dica: É menor que ${chute}`);
        } else {
                alert(`Dica: É maior que ${chute}`);
            }
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
