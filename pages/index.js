// реализована прокрутка до footer__input по клику на header__subscribe-button

const headerButton = document.querySelector('.header__subscribe-button');
const footerInput = document.getElementById('email');

headerButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    footerInput.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    footerInput.select();
});

// смена картинок по таймеру в блоке looks 
let imgArray = ['looks-1.jpg', 'looks-2.jpg', 'looks-3.jpg', 'looks-4.jpg', 'looks-5.jpg', 'looks-6.jpg', 'looks-7.jpg', 'looks-8.jpg'];
const basePath = "./images/";
const imageList = document.querySelector('.looks__images-list');
const images = imageList.querySelectorAll('.looks__image');
let imagesArray = Array.from(images);


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

let randomArray = [];
window.setInterval(function () {
    let randomValueOfImages = randomInteger(1, 3);
    for (let i = 1; i <= randomValueOfImages; i++) {
        // let randomIndex = randomInteger(0, 7);
        let randomImage = imgArray[Math.floor(Math.random() * imgArray.length)]
        if (imagesArray.includes(randomImage) !== true) {
            randomArray.push(randomImage);
            randImg = images[Math.floor(Math.random() * images.length)]
            randImg.src = basePath + randomImage;
        } else {
            continue  // прописать условия неповторения картинок в массиве
        }
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
