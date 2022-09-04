// открытие/закрытие попапа меню
const popup = document.querySelector('.header__popup');
const openButton = document.querySelector('.header__button');
const closeButton = document.querySelector('.header__close-button');

openButton.addEventListener('click', function (evt) {
    evt.preventDefault;
    popup.classList.add('header__popup_type_opened');
})

closeButton.addEventListener('click', function (evt) {
    evt.preventDefault;
    popup.classList.remove('header__popup_type_opened');
})

// перелистывание по якорю
const aboutButton = document.querySelector('.about');
const looksButton = document.querySelector('.look');
const footerButton = document.querySelector('.foot');
const headerButton = document.querySelector('.header__subscribe-button');

const aboutSection = document.getElementById('about');
const looksSection = document.getElementById('looks');
const footerSection = document.getElementById('footer');
const footerInput = document.getElementById('email');

scrollTo(aboutButton, aboutSection);
scrollTo(looksButton, looksSection);
scrollTo(footerButton, footerSection);

headerButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    footerInput.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    footerInput.select();
});

function scrollTo(button, section) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// смена картинок по таймеру в блоке looks 
const imageList = document.querySelector('.looks__images-list');
const images = imageList.querySelectorAll('.looks__image');

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};
function swapImages (firstIndex, secondIndex) {
    const firstSrc = images[firstIndex].src;
    const secondSrc = images[secondIndex].src;
    images[firstIndex].src = secondSrc;
    images[secondIndex].src = firstSrc;
};

window.setInterval(function () {
    let randomValueOfImages = randomInteger(1, 3);
    for (let i = 1; i <= randomValueOfImages; i++) {
        let firstImage =  Math.floor(Math.random()*images.length);
        let secondImage =  Math.floor(Math.random()*images.length);
        swapImages(firstImage, secondImage);
    }
}, 1000)
