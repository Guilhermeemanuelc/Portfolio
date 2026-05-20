const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('itens');
const icon = document.getElementById('burguer');

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        icon.textContent = 'close';
    } else {
        icon.textContent = 'menu';
    }
});

