const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.mobileMenu');
const main = document.querySelector('main');
const icon = document.querySelector('.hamburguer i');

hamburguer.addEventListener('click', () => {

    if(menu.classList.contains('open')) {

        menu.classList.remove('open');
        menu.style.visibility = 'hidden';

        main.style.opacity = '1';
        main.style.visibility = 'visible';

        //hamburguer.style.color = '#2eacb3';
        //hamburguer.style.backgroundColor = 'white';

        icon.setAttribute('class', 'fas fa-bars');

    } else {

        menu.classList.add('open');
        menu.style.visibility = 'visible';

        main.style.opacity = '0';
        main.style.visibility = 'hidden';

        //hamburguer.style.color = 'white';
        //hamburguer.style.backgroundColor = '#ff6c37';

        icon.setAttribute('class', 'fa fa-close');

    }

});

