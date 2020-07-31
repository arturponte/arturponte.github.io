const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menuMobile');

hamburguer.addEventListener('click', () => {

    if(menu.classList.contains('open')) {

        menu.classList.remove('open');
        hamburguer.style.color = 'white';

    } else {

        menu.classList.add('open');
        hamburguer.style.color = '#ffcd76';

    }

});

