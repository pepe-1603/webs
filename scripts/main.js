document.querySelector('.menu-btn').addEventListener('click', () => {

document.querySelector('.nav-menu').classList.toggle('show');
console.log('Se esta ejecutando el menu');

})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.nuevas_cards', { delay: 500});
ScrollReveal().reveal('.new-cards', { delay: 500});
ScrollReveal().reveal('.cards-band2', { delay: 900});
console.log('se esjecuta bla animacion');