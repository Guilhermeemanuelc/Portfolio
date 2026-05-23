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

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('.menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - -32;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});