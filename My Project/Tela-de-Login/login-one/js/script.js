document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('loginform');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const loginBtn = document.querySelector('.login-btn');

    // Mostrar/Ocultar senha
    togglePassword.addEventListener('click', () => {
        const type =
            passwordInput.getAttribute('type') === 'password'
                ? 'text'
                : 'password';

        passwordInput.setAttribute('type', type);

        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            showMessage('Preencha todos os campos.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            showMessage('Digite um e-mail válido.');
            return;
        }

        if (password.length < 6) {
            showMessage('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        loginBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Entrando...';

        loginBtn.disabled = true;

        setTimeout(() => {
            loginBtn.innerHTML =
                '<i class="fas fa-check"></i> Sucesso';

            loginBtn.style.background =
                'linear-gradient(to right, #4ade80, #22c55e)';

            showMessage('Login realizado com sucesso!', 'success');

            setTimeout(() => {
                loginBtn.innerHTML =
                    '<i class="fas fa-sign-in-alt"></i> Entrar';

                loginBtn.disabled = false;

                loginBtn.style.background = '';
            }, 2500);

        }, 1800);
    });

    // Mensagem flutuante
    function showMessage(text, type = 'error') {

        let toast = document.querySelector('.toast');

        if (!toast) {
            toast = document.createElement('div');
            toast.classList.add('toast');
            document.body.appendChild(toast);
        }

        toast.textContent = text;

        toast.style.background =
            type === 'success'
                ? '#22c55e'
                : '#ef4444';

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
});