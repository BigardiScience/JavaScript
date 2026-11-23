//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".




alert('Olá, seja bem vindo! ')
let pergunta = prompt('Qual dia é hoje? ')

if (pergunta == 'Sábado') {
    alert('Bom Fim de Semana! ')
} else if (pergunta == 'Domingo') {
        alert('Bom Fim de Semana')
}
else {
    alert('Boa Semana')
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

alert('Seja Bem-Vindo! ')
let pergunta2 = prompt('Digite um número: ')

if (pergunta2 % 2 == 0) {
    alert(`${pergunta2}: Par`)
} else {
    alert(`${pergunta2}: Impar`)
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pergunta3 = prompt('Qual sua pontuação? ')
if (pergunta3 >= 100) {
    alert('Parabéns')
} else {
    alert('Se fodeu')
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let pergunta4 = prompt(int('Quanto depositou hoje?'))
let pergunta5 = prompt(int('E ontem?'))
soma = pergunta4 + pergunta5

alert(`Seu saldo atual é de R$${soma}.`)

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let pergunta6 = prompt('Qual seu nome? ')
alert(`Boas-vindas, ${pergunta6}`)