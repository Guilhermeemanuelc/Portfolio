function clickMenu() {
    if (items.style.display == 'block') {
        items.style.display = 'none'
        burguer.innerHTML = 'menu'
    } else {
        items.style.display = 'block'
        burguer.innerHTML = 'close'
    }

window.addEventListener("load", () => {
  const hash = window.location.hash;

  if (hash) {
    const el = document.querySelector(hash);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView();
      }, 200);
    }
  }
});
}