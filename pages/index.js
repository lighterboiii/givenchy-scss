const headerButton = document.querySelector('.header__subscribe-button');
const footerInput = document.getElementById('email');

headerButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    footerInput.scrollIntoView({
        behavior: 'smooth'
    });
    footerInput.select();
});

// реализована прокрутка до footer__input по клику на header__subscribe-button