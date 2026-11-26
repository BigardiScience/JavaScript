function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let botao = jogo.querySelector('.dashboard__item__button');
    let img = jogo.querySelector('.dashboard__item__img')

    if (botao.classList.contains('dashboard__item__button--return') && img.classList.contains('dashboard__item__img--rented')) {
    confirmacao = prompt('Tem certeza que deseja devolver o jogo? ')
    if (confirmacao == 'sim') {
        botao.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
        botao.innerHTML = 'Alugar';
    } else {
        stop;
    }
} else {
    botao.classList.add('dashboard__item__button--return');
    img.classList.add('dashboard__item__img--rented');
    botao.innerHTML = 'Devolver';
};
};

