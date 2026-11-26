# Praticando lógica de programação

Projetos do curso "Praticando lógica de programação" da Alura. O HTML e o CSS vieram prontos, o desafio era fazer a página funcionar com JavaScript.

**Sorteador de números**: o primeiro. Aprendi a pegar valores dos campos com `getElementById`, usar `Math.random` e impedir número repetido com `while` e `includes`. Também coloquei uma validação pra quando o "de" é maior que o "até", porque testando percebi que dava ruim.

**AluGames**: aqui apanhei um pouco. O botão não tinha `id`, então aprendi a usar o `querySelector` buscando dentro do elemento pai, e o `classList` pra trocar o estilo. Fui um pouco além do pedido e coloquei uma confirmação antes de devolver o jogo.

**Carrinho de compras**: o que mais me fez pensar. Precisei separar nome e preço do produto com `split`, converter texto em número com `parseInt` e `parseFloat`, e ir acumulando o total numa variável global.

Pra testar, abre o `index.html` de qualquer um no navegador.
