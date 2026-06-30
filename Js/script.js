
// Abre e Fecha menu 
const burguer = document.getElementById('burguer')
const menu = document.getElementById('menu')
const close = document.getElementById('close')
const links = document.querySelectorAll('.link')
const overlay = document.getElementById('overlay')

burguer.addEventListener('click', () => {
  menu.classList.add('active')
  overlay.classList.add('active')
})

close.addEventListener('click', () => {
  menu.classList.remove('active')
  overlay.classList.remove('active')
})

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
    overlay.classList.remove('active')
  })

overlay.addEventListener('click', () => {
  menu.classList.remove('active')
  overlay.classList.remove('active')
})
})

                    // tema botao escuro e claro 

const botaoTema = document.getElementById('theme-toggle');
const icone = botaoTema.querySelector('i');
const themeColor = document.querySelector('meta[name="theme-color"]');

function atualizarTema() {
    if (document.body.classList.contains('light')) {
        themeColor.setAttribute('content', '#4b6d94');
    } else {
        themeColor.setAttribute('content', '#111520');
    }
}

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'light') {
    document.body.classList.add('light');
    icone.classList.replace('fa-moon', 'fa-sun');
}

atualizarTema(); // Atualiza quando a página abre

botaoTema.addEventListener('click', () => {

    document.body.classList.toggle('light');

    if (document.body.classList.contains('light')) {
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('tema', 'light');
    } else {
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('tema', 'dark');
    }

    atualizarTema(); // Atualiza a cor da barra
});



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

window.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".filtro button");
    const projetos = document.querySelectorAll(".card-projeto");

    console.log("JS rodando");
    console.log("Botoes:", botoes.length);
    console.log("Cards:", projetos.length);

    if (botoes.length === 0 || projetos.length === 0) {
        console.log("ERRO: HTML não encontrado corretamente");
        return;
    }

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const filtro = botao.dataset.filtro;

            botoes.forEach(b => b.classList.remove("filtro-ativo"));
            botao.classList.add("filtro-ativo");

            projetos.forEach(projeto => {

                const categoria = projeto.dataset.filtro;

                if (filtro === "todos" || filtro === categoria) {
                    projeto.classList.remove("hide");
                } else {
                    projeto.classList.add("hide");
                }

            });

        });

    });

});