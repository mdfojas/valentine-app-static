const images = [
  './images/image1.png',
  './images/image2.png',
  './images/image3.png',
  './images/image4.png'
];

const plead = [
  'Are you sure?',
  'Please, accept it?',
  'You no, no wanna?',
  'C\'mon...',
  'Girl plsss',
  'I\'ll be very sad',
  'Don\'t you love me?',
  'I\'m begging you',
  'Ayaw mo na ba saken?',
  'Sayang naman code ko...',
]

document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const valentineContainer = document.getElementById("valentine-container");

  console.log(noBtn)
  function enlargeYesButton() {
    const currentWidth = parseFloat(window.getComputedStyle(yesBtn).getPropertyValue('width'));
    const currentHeight = parseFloat(window.getComputedStyle(yesBtn).getPropertyValue('height'));
    yesBtn.style.width = `${currentWidth * 1.25}px`;
    yesBtn.style.height = `${currentHeight * 1.25}px`;

    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (currentWidth >= screenWidth || currentHeight >= screenHeight) {
      const message = document.createElement('div');
      message.id = 'message';
      message.textContent = 'PRESS IT 🔫 🔫 🔫';
      message.style.position = 'absolute';
      message.style.top = '35%';
      valentineContainer.appendChild(message);
    }
  }

  noBtn.addEventListener("mouseover", function () {
    enlargeYesButton();
    const randomTop = Math.floor(Math.random() * 90);
    const randomLeft = Math.floor(Math.random() * 90);
    const randomIndex = Math.floor(Math.random() * plead.length);
    noBtn.textContent = plead[randomIndex]
    noBtn.style.top = `${randomTop}%`;
    noBtn.style.left = `${randomLeft}%`;
  });

  yesBtn.addEventListener("click", function () {
    valentineContainer.innerHTML = '';

    const picturesContainer = document.createElement('div');
    picturesContainer.id = 'pictures';

    images.forEach(function (src) {
      const img = document.createElement('img');
      img.src = src;
      img.classList.add('picture');
      picturesContainer.appendChild(img);
    });

    valentineContainer.appendChild(picturesContainer);

    const message = document.createElement('div');
    message.id = 'message';
    message.textContent = 'Thank you! I love you babe!';
    valentineContainer.appendChild(message);
  });
});
