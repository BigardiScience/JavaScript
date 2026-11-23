//1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Seja Bem-Vindo');

//2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = "Calica";

console.log(`Olá, ${nome}. Seja Bem-Vindo.`);
//3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome = 'Calica';
alert(`Olá, ${nome}. Seja Bem-Vindo. `);

//4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let pergunta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(pergunta);

//5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let numero = Number(prompt('Digite um número: '));
let numero2 = Number(prompt('Digite outro: '));
let soma = numero + numero2;

alert(`A soma de ${numero} + ${numero2} é ${soma}.`);

//6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let numero = Number(prompt('Digite um número: '));
let numero2 = Number(prompt('Digite outro número: '));
let resultado = numero - numero2;

alert(`${numero} - ${numero2} = ${resultado}.`)

//7 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = Number(prompt('Digite sua idade: '))

let verificadordeIdade = idade >= 18 ? 'Maior de Idade' : 'Menor de Idade';
alert(verificadordeIdade);

//8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = Number(prompt('Digite um número: '));

if (numero > 0) {
    alert('Posítivo.')
} else if (numero < 0) {
    alert('Negativo.')
} else {
    alert('Zero.')
};

//9 - Use um loop while para imprimir os números de 1 a 10 no console.

contador = 0;

while (contador < 10) {
    contador ++
    console.log(contador)
};

//10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = Number(prompt('Qual sua nota final?'));
verificarNota = nota >= 7? 'Aprovado' : 'Reprovado';
console.log(verificarNota);

//11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numero = Math.random();
console.log(numero);

//12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numero = parseInt(Math.random() * 10) +1;
console.log(numero);

//13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numero = parseInt(Math.random() * 1000) +1;
console.log(numero);