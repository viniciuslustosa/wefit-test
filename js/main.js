window.onload = function () {
    // 1. Alterar a ordem dos cards
    const cardsContainer = document.querySelectorAll('.row');
    const cards = document.querySelectorAll('.row .col-lg-3');
    const naturezaCard = cards[3];
    const animaisCard = cards[0];
    const pessoasCard = cards[2];
    const tecnologiaCard = cards[1];

    cardsContainer[3].style.display = 'flex';
    naturezaCard.style.order = '0';
    animaisCard.style.order = '1';
    pessoasCard.style.order = '2';
    tecnologiaCard.style.order = '3';

    // 2. Alterar a cor do botão do card Animais
    const animaisButton = animaisCard.querySelector('.btn');
    animaisButton.classList.remove('btn-primary');
    animaisButton.classList.add('btn-success');

    // 3. Alterar o fundo do header para cinza escuro
    const header = document.querySelector('.jumbotron');
    header.style.backgroundColor = '#6B757E';

    // 4. Alinhar os elementos do header para a direita
    header.style.textAlign = 'right';
    header.style.color = 'white';

    // 5. Alterar a cor do botão do header para verde
    const headerButton = header.querySelector('.btn');
    headerButton.classList.remove('btn-primary');
    headerButton.classList.add('btn-success');

    // 6. Adicionar "Quarto Item" e "Quinto Item" na Lista
    const primeiroItem = document.querySelector('.active');
    primeiroItem.classList.remove('active');

    const lista = document.querySelector('.list-group');
    const quartoItem = document.createElement('li');
    quartoItem.classList.add('list-group-item');
    quartoItem.classList.add('active')
    quartoItem.textContent = 'Quarto item';
    lista.appendChild(quartoItem);

    const quintoItem = document.createElement('li');
    quintoItem.classList.add('list-group-item');
    quintoItem.textContent = 'Quinto Item';
    lista.appendChild(quintoItem);

    // 7. Alterar o layout do menu para horizontal
    const menu = document.querySelector('.btn-group-vertical');
    menu.classList.remove('btn-group-vertical');
    menu.classList.add('btn-group-horizontal');
}