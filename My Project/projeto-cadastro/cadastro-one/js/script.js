document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formCadastro");
    const sucesso = document.getElementById("sucesso");

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");
    const aceitar = document.getElementById("aceitar");

    const alerta = document.getElementById("alerta");
    const mensagemAlerta = document.getElementById("mensagemAlerta");

    function mostrarAlerta(texto, tipo = "erro") {

        mensagemAlerta.textContent = texto;

        alerta.style.display = "block";

        if (tipo === "sucesso") {
            alerta.style.background = "#22c55e";
        } else {
            alerta.style.background = "#ef4444";
        }

        clearTimeout(alerta.timeout);

        alerta.timeout = setTimeout(() => {
            alerta.style.display = "none";
        }, 4000);
    }

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const valorNome = nome.value.trim();
        const valorEmail = email.value.trim();
        const valorSenha = senha.value.trim();
        const valorConfirmar = confirmarSenha.value.trim();

        if (
            valorNome === "" ||
            valorEmail === "" ||
            valorSenha === "" ||
            valorConfirmar === ""
        ) {
            mostrarAlerta("Preencha todos os campos.");
            return;
        }

        const regexEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(valorEmail)) {
            mostrarAlerta("Digite um e-mail válido.");
            return;
        }

        if (valorSenha.length < 6) {
            mostrarAlerta("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (valorSenha !== valorConfirmar) {
            mostrarAlerta("As senhas não coincidem.");
            return;
        }

        if (!aceitar.checked) {
            mostrarAlerta("Você precisa aceitar os termos.");
            return;
        }

        const botao = document.getElementById("criarConta");

        botao.disabled = true;
        botao.textContent = "Criando conta...";

        setTimeout(() => {

            form.style.display = "none";

            sucesso.style.display = "block";

            mostrarAlerta(
                "Conta criada com sucesso!",
                "sucesso"
            );

            botao.disabled = false;
            botao.textContent = "Criar Conta";

        }, 1500);

    });

    const continuar = document.getElementById("continuar");

    continuar.addEventListener("click", () => {

        sucesso.style.display = "none";

        form.style.display = "flex";

        form.reset();

        mostrarAlerta(
            "Formulário reiniciado.",
            "sucesso"
        );

    });

});