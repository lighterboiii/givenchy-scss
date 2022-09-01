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
let imgArray = ['looks-1.jpg', 'looks-2.jpg', 'looks-3.jpg', 'looks-4.jpg', 'looks-5.jpg', 'looks-6.jpg', 'looks-7.jpg', 'looks-8.jpg', 'looks-9.jpeg', 'looks-10.jpeg', 'looks-11.jpeg', 'looks-12.jpeg', 'looks-13.jpeg', 'looks-14.jpeg','looks-15.jpeg'];
const basePath = "./images/";
const imageList = document.querySelector('.looks__images-list');
const images = imageList.querySelectorAll('.looks__image');
const imagesArray = Array.from(images);


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};
window.setInterval(function () {
    let randomValueOfImages = randomInteger(1, 3);
    for (let i = 1; i <= randomValueOfImages; i++) {
        const randomImage = imgArray[Math.floor(Math.random() * imgArray.length)]
            randImg = images[Math.floor(Math.random() * images.length)]
            randImg.src = basePath + randomImage;
    }
}, 1000)



    // swapImage();

// function swapImage () {
//     window.setInterval(function () {
//         for (let i = 0; i < imgArray.length; i++) {
//             let randomImage = imgArray[Math.floor(Math.random() * imgArray.length)]
//             randImg = images[Math.floor(Math.random() * images.length)]
//             randImg.src = basePath + randomImage;

//             if (randomImage.value === images[i].src) {
//                 continue
//             }
//         }
//     }, 1000) 
// }