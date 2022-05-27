// Efeito das palavras Parallax
let rellax = new Rellax('.parallax');

// Botão toggle Hamburguer
const HAMBURGUER_MENU = document.querySelector('.btn-hamburguer');
let listMenu = document.querySelector('.menu');

const MENU_ACTIVE = () => {
     HAMBURGUER_MENU.classList.toggle('active');
     if(listMenu.classList.contains('show') == true) {
          listMenu.classList.remove('show');
     }
     else {
          listMenu.classList.add('show');
     }
}

HAMBURGUER_MENU.addEventListener('click', MENU_ACTIVE);
