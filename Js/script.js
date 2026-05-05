let items = document.getElementById('items')
let burguer = document.getElementById('burguer')

function clickMenu() {
    if (items.style.display == 'block') {
        items.style.display = 'none'
        burguer.innerHTML = 'menu'
    } else {
        items.style.display = 'block'
        burguer.innerHTML = 'close'
    }
}

// FORA da função
function goToHash() {
    if (!window.location.hash) return;

    const el = document.querySelector(window.location.hash);
    if (!el) return;

    setTimeout(() => {
        el.scrollIntoView({ behavior: "auto" });
    }, 100);
}

document.addEventListener("DOMContentLoaded", goToHash);