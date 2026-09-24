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


// =========================================================
// TEMA BOTÃO ESCURO E CLARO
// =========================================================

const botaoTema = document.getElementById('theme-toggle');
const icone = botaoTema.querySelector('i');

// Carrega o tema salvo
const temaSalvo = localStorage.getItem('tema') || 'dark';

if (temaSalvo === 'light') {
    document.body.classList.add('light');
    icone.classList.replace('fa-moon', 'fa-sun');
} else {
    icone.classList.replace('fa-sun', 'fa-moon');
}

// Troca o tema
botaoTema.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');

    if (isLight) {
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('tema', 'light');
    } else {
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('tema', 'dark');
    }
});


// =========================================================
// SCROLL SUAVE PARA LINKS DE NAVEGAÇÃO
// =========================================================

const navLinks = document.querySelectorAll('#menu ul a.link');

navLinks.forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {

      const headerHeight = document.querySelector('header').offsetHeight;

      const targetPosition =
        target.offsetTop - headerHeight - -33;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

    }

  });

});


// =========================================================
// FILTROS + VER MAIS / MOSTRAR MENOS
// =========================================================

window.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll("#projetos .filtro button");
    const projetos = document.querySelectorAll("#projetos .card-projeto");
    const botaoVerMais = document.getElementById("verMaisProjetos");

    console.log("JS rodando");
    console.log("Botoes:", botoes.length);
    console.log("Cards:", projetos.length);


    if (botoes.length === 0 || projetos.length === 0) {

        console.log("ERRO: HTML não encontrado corretamente");

        return;

    }


    // =========================================================
    // CONFIGURAÇÕES
    // =========================================================

    const quantidadeInicial = 4;

    let mostrarTodos = false;

    let filtroAtual = "todos";


    // =========================================================
    // ATUALIZA OS PROJETOS
    // =========================================================

    function atualizarProjetos() {

        // Pega somente os projetos do filtro atual
        const projetosDoFiltro = Array.from(projetos).filter(projeto => {

            const categoria = projeto.dataset.filtro;

            return filtroAtual === "todos" || categoria === filtroAtual;

        });


        // Atualiza cada projeto
        projetos.forEach(projeto => {

            const categoria = projeto.dataset.filtro;

            const pertenceAoFiltro =
                filtroAtual === "todos" ||
                categoria === filtroAtual;


            // Limpa as classes
            projeto.classList.remove("hide");
            projeto.classList.remove("projeto-oculto");


            // Esconde os que não pertencem ao filtro
            if (!pertenceAoFiltro) {

                projeto.classList.add("hide");

            } else {

                const indice =
                    projetosDoFiltro.indexOf(projeto);


                // Se não estiver mostrando todos,
                // deixa somente os 4 primeiros
                if (!mostrarTodos && indice >= quantidadeInicial) {

                    projeto.classList.add("projeto-oculto");

                }

            }

        });


        // =====================================================
        // ATUALIZA O BOTÃO
        // =====================================================

        if (botaoVerMais) {

            // Se tiver 4 ou menos projetos,
            // o botão não aparece
            if (projetosDoFiltro.length <= quantidadeInicial) {

                botaoVerMais.style.display = "none";

            } else {

                botaoVerMais.style.display = "flex";


                // Mostrando todos
                if (mostrarTodos) {

                    botaoVerMais.innerHTML = `
                        <i class="fa-solid fa-minus"></i>
                        <span>Mostrar menos projetos</span>
                        <i class="fa-solid fa-chevron-up"></i>
                    `;

                }

                // Mostrando somente 4
                else {

                    botaoVerMais.innerHTML = `
                        <i class="fa-solid fa-plus"></i>
                        <span>Ver mais projetos</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    `;

                }

            }

        }

    }


    // =========================================================
    // FILTROS
    // =========================================================

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            filtroAtual = botao.dataset.filtro;

            // Sempre volta para somente 4
            // quando trocar de categoria
            mostrarTodos = false;


            // Remove botão ativo
            botoes.forEach(btn => {

                btn.classList.remove("filtro-ativo");

            });


            // Ativa o botão clicado
            botao.classList.add("filtro-ativo");


            // Atualiza os projetos
            atualizarProjetos();

        });

    });


    // =========================================================
    // VER MAIS / MOSTRAR MENOS
    // =========================================================

    if (botaoVerMais) {

        botaoVerMais.addEventListener("click", () => {


            // =================================================
            // MOSTRAR MENOS
            // =================================================

            if (mostrarTodos) {

                mostrarTodos = false;

                atualizarProjetos();


                // Volta para o começo da grade
                const gradeProjetos =
                    document.querySelector("#projetos .projetos");

                if (gradeProjetos) {

                    gradeProjetos.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }


            // =================================================
            // VER MAIS
            // =================================================

            else {

                mostrarTodos = true;

                atualizarProjetos();

            }

        });

    }


    // =========================================================
    // INICIALIZAÇÃO
    // =========================================================

    // Quando entrar no site,
    // mostra somente os 4 primeiros
    mostrarTodos = false;

    atualizarProjetos();

});