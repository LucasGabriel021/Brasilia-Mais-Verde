// Efeito das palavras Parallax
let rellax = new Rellax('.parallax');

// Botão toggle Hamburguer
const HAMBURGUER_MENU = document.querySelector('.btn-hamburguer');

const MENU_ACTIVE = () => {
     HAMBURGUER_MENU.classList.toggle('active');
}

HAMBURGUER_MENU.addEventListener('click', MENU_ACTIVE);