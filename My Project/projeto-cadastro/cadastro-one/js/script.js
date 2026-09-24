document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCadastro");

    const sucesso = document.getElementById("sucesso");

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");
    const aceitar = document.getElementById("aceitar");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Limpa mensagens anteriores
        sucesso.style.display = "none";

        // Validação do nome
        if (nome.value.trim().length < 3) {
            alert("Digite um nome válido.");
            nome.focus();
            return;
        }

        // Validação do e-mail
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email.value.trim())) {
            alert("Digite um e-mail válido.");
            email.focus();
            return;
        }

        // Validação da senha
        if (senha.value.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            senha.focus();
            return;
        }

        // Confirmação da senha
        if (senha.value !== confirmarSenha.value) {
            alert("As senhas não coincidem.");
            confirmarSenha.focus();
            return;
        }

        // Termos
        if (!aceitar.checked) {
            alert("Você precisa aceitar os termos.");
            aceitar.focus();
            return;
        }

        // Cadastro realizado
        sucesso.style.display = "block";

        // Limpa o formulário
        form.reset();
    });
});