// ==UserScript==
// @name         mos-ru-theme
// @namespace    http://tampermonkey.net/
// @version      2024-11-07
// @description  school.mos.ru crack
// @author       Diramix
// @match        https://school.mos.ru/*
// @match        https://uchebnik.mos.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mos.ru
// @grant        none
// ==/UserScript==

// Оптимизация под смартфон
function updateMarginTop() {
    var wrapperElement = document.querySelector('.diary-emotion-cache-zqw19v-wrapper');

    if (wrapperElement) {
        if (window.matchMedia("(min-width: 640px)").matches) {
            wrapperElement.style.marginTop = '63px';
        } else {
            wrapperElement.style.marginTop = '0px';
        }
    }
}

setInterval(updateMarginTop, 1000);

// ZOV
function replaceText() {
    function walk(node) {
        var child, next;

        switch (node.nodeType) {
            case 1:
            case 9:
            case 11:
                child = node.firstChild;
                while (child) {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
            case 3:
                if (node.nodeValue.match(/МЭШ/g)) {
                    node.nodeValue = node.nodeValue.replace(/МЭШ/g, 'ZOV');
                }
                break;
        }
    }

    walk(document.body);
}

setInterval(replaceText, 50);

// Замена текста "Дневник"
setInterval(() => {
  const elements = document.getElementsByClassName('diary-emotion-cache-1hn4v0k-title');

  Array.from(elements).forEach(element => {
    if (element.textContent === 'Дневник') {
      element.textContent = 'mos-ru-theme';
    }
  });
}, 0);

// Уроков нет
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/assets/images/62c5be8664724f76f324b47945ca9016.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/urokov-net.jpg?raw=true';
    }
  });
}, 0);

// Здесь пока нет данных
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/uikit/assets/images/ad064cd33924e352a98e503230a7f66e.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/net-dannih.png?raw=true';
    }
  });
}, 0);

// Не удалось загрузить
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/uikit/assets/images/44ae9ed513f79fcad9ab91f6041bd5c3.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/ne-udalos-zagruzit.gif?raw=true';
    }
  });
}, 0);

// Что-то пошло не так
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/mfSchedule/assets/images/c257b09fba1ed91650680dbf2caacd1b.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/chto-to-poshlo-ne-tak.jpg?raw=true';
    }
  });
}, 0);

// Домашнее задание не задано
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/mfLesson/assets/images/3bae4c02e3e2ce94f40528b02252c555.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/domashnee-zadanie-ne-zadano.png?raw=true';
    }
  });
}, 0);

// unknown.fefad
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://uchebnik.mos.ru/exam/img/unknown.fefad.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/unknown.fefad.png?raw=true';
    }
  });
}, 0);

// Фон ошибки Лайта Ягами
setInterval(() => {
    const element = document.querySelector('.css-1m9z75n');
    if (element) {
        element.textContent = "Произошла ошибка,\nно мы уже записали вас!";
    }

    const element2 = document.querySelector('.css-1d4xwuv');
    if (element2) {
        element2.textContent = "\nПриносим извинения за неудобства! Попробуйте\nобновить страницу или подождите немного.\n\nВ человеческом обществе лишь немногие люди заслуживают того,\nчтобы им полностью доверяли. - © Лайт Ягами";
    }
}, 1000);

// ColapseButton
setInterval(() => {
    const containerElement = document.querySelector("html body div#root div.diary-emotion-cache-1uyqs5e-wrapper main div.diary-emotion-cache-1avfqwp-root section.diary-emotion-cache-zqw19v-wrapper div.MuiGrid-root.MuiGrid-container.diary-emotion-cache-oavk2q-container div.MuiGrid-root.MuiGrid-container.diary-emotion-cache-1we2gtg-root div.diary-emotion-cache-ys16np-wrapper div.MuiGrid-root.MuiGrid-container.diary-emotion-cache-g87qjg-header div.diary-emotion-cache-1ichvsz-subHeader div.diary-emotion-cache-ypebyi-timeScale");

    if (containerElement && !document.querySelector(".CollapseBtn")) {
        const toggleButton = document.createElement("button");
        toggleButton.classList.add("CollapseBtn");
        toggleButton.innerText = "Свернуть";
        let isHidden = false;

        toggleButton.addEventListener("click", () => {
            const itemsToToggle = document.querySelectorAll(".diary-emotion-cache-fr9wdn-scheduleBlockInfoBadges, .diary-emotion-cache-1f6hwic-wrapper");
            isHidden = !isHidden;

            itemsToToggle.forEach(item => {
                item.style.display = isHidden ? "none" : "";
            });

            toggleButton.innerText = isHidden ? "Развернуть" : "Свернуть";
        });

        setInterval(() => {
            const itemsToToggle = document.querySelectorAll(".diary-emotion-cache-fr9wdn-scheduleBlockInfoBadges, .diary-emotion-cache-1f6hwic-wrapper");
            const isCorrectState = Array.from(itemsToToggle).every(item => item.style.display === (isHidden ? "none" : ""));

            if (!isCorrectState) {
                itemsToToggle.forEach(item => {
                    item.style.display = isHidden ? "none" : "";
                });
            }
        }, 500);

        containerElement.appendChild(toggleButton);
    }
}, 1000);
