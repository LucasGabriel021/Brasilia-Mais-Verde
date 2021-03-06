// ============================ Botão toggle Hamburguer
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


// ============================ Botão Voltar
let btnSeta = document.querySelector('#btn-scroll');

btnSeta.addEventListener('click', () => {
     window.scrollTo(
          {
               top: 0,
               behavior: "smooth"
          }
     )
});

function decidirBotao() {
     if(window.scrollY == 0) {
          document.getElementById('btn-scroll').style.opacity = 0;
          document.querySelector('.navbar-header').style.backgroundColor = "#ffffff";
     } 
     else {    
          document.getElementById('btn-scroll').style.opacity = 1;
          document.querySelector('.navbar-header').style.backgroundColor = "#ffffffe6";
     }
}
window.addEventListener('scroll', decidirBotao);


// ============================ Slider Show
let totalSlides = document.querySelectorAll('.slider--item').length;
let slideAtual = 0;

document.querySelector('.carrossel-area').style.width = `calc(100% * ${totalSlides})`;

function goPrev() {
     slideAtual--;
     if(slideAtual < 0) {
          slideAtual = totalSlides - 1;
     }
     updateMargin();
}

function goNext() {
     slideAtual ++;
     if(slideAtual > (totalSlides - 1)) {
          slideAtual = 0;
     }
     updateMargin();
}

function updateMargin() {
     let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
     let newMargin = (slideAtual * sliderItemWidth);
     document.querySelector('.carrossel-area').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 8000);

let teste = document.getElementById("teste").clientWidth;
console.log(teste);


