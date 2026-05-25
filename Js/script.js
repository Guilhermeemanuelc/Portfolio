
// Abre e Fecha menu 
const burguer = document.getElementById('burguer')
const menu = document.getElementById('menu')
const close = document.getElementById('close')
const links = document.querySelectorAll('.link')

burguer.addEventListener('click', () => {
  menu.classList.add('active')
})

close.addEventListener('click', () => {
  menu.classList.remove('active')
})

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
  })
})


// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - -33;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});