// ==UserScript==
// @name         mos-ru-theme
// @namespace    http://tampermonkey.net/
// @version      2024-11-23
// @description  school.mos.ru
// @author       Diramix
// @match        https://school.mos.ru/*
// @match        https://uchebnik.mos.ru/*
// @icon         https://github.com/Diramix/mos-ru-theme/blob/main/src/icon.png?raw=true
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
}, 1000);

// Уроков нет
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/assets/images/62c5be8664724f76f324b47945ca9016.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/urokov-net.jpg?raw=true';
    }
  });
}, 1000);

// Здесь пока нет данных
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/uikit/assets/images/ad064cd33924e352a98e503230a7f66e.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/net-dannih.png?raw=true';
    }
  });
}, 1000);

// Не удалось загрузить
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/uikit/assets/images/44ae9ed513f79fcad9ab91f6041bd5c3.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/ne-udalos-zagruzit.gif?raw=true';
    }
  });
}, 1000);

// Что-то пошло не так
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/mfSchedule/assets/images/c257b09fba1ed91650680dbf2caacd1b.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/chto-to-poshlo-ne-tak.jpg?raw=true';
    }
  });
}, 1000);

// Домашнее задание не задано
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/mfLesson/assets/images/3bae4c02e3e2ce94f40528b02252c555.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/domashnee-zadanie-ne-zadano.png?raw=true';
    }
  });
}, 1000);

// unknown.fefad
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://uchebnik.mos.ru/exam/img/unknown.fefad.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/unknown.fefad.png?raw=true';
    }
  });
}, 1000);

// 404
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'https://school.mos.ru/diary/assets/images/a77cbf786a092a0b1057d2f5977d5ba6.png') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/404.png?raw=true';
    }
  });
}, 1000);

// 404
setInterval(function() {
  const images = document.querySelectorAll('img');

  images.forEach(function(img) {
    if (img.src === 'data:image/webp;base64,UklGRjZDAABXRUJQVlA4WAoAAAAQAAAAjwEAZwEAQUxQSFUWAAAB8Idt/yKn/f89ZnY3QgQLBLfgVtwJRWu4lBdaIEgNKG/cpRZaSKFY3XCoIS1WGtxarGmgKU4ITkMISUh2Z+4/5jm7s8+ZnZl9WyNiAuhf//+/lIWatdkxwYLlUL1VNEiQoYYOQYcBQYehQYeXTECb8TN7FLURhgW8yEQASCsWPBgP5urgwWUWmtgGfQJduEclweIlZDE8Wd86A514T6WrxaPQYsWKRIYIAgX+A6xbMVbPRD51k9GHgoeVd+biyCAKKoYUov/eGla5QnCh2GEp/88awYQfAOB83+CBcF6BrGlBA/EHBrCpdJCA4h+zkNImSEBNLrFwJjpIQBV3sVAvWEA0/4lCrmt1xm/9SXWK6RG73gbwkWhxXpbh5SCzQ1Rq9aG3SpLF/QzeLjI/lti7xf/ryodBh4+DDl8HBT71anVQYLlXnwUFmspePOwXFKB2ie+9l7hg+sQJr9ekf/0fZK7cKTq40CYLubtntXUFD1aAef/n1xo4ggLiOZby/o7JtUTbLw6+XlzTvY5g603wCYD75NJOLlupea/qAkfbtVDm7JzVMtQueioPnt8XdwrlxHlTK+WNTa/GCXbQO2BKfyztGctBQ/g767tR9QWbRzjDUuYdmdtK9NM4vwGQDpW0dyrD1/xfZnWM9sN+HoBF9k5/n5QPtk9sJmpTKIuPKfbOCk2Uj74Z3sjp29Pgs4WtI57UDIB0edertXyYx8fVcBtCqNlY5KVsjj+U8o3lvQt78Ssf28mGHAM83JIQx0Vf8HghWiXyMR8JdsReKOXLKwdX99tKLjzVVDqCz1o2RHgeQymnb+xT1i/XuEhzqXzAx1XBhngWPkpnF/YJ16o0uPySVE/y8THZkIt8UT45urhDtBZD+OijUlLmo6cdcVoLZd6hha2dvmzmwlNYZQi4dMfYEMXdWimzfhjZKNSLsCtcpJLqp3ycJhvyefhZTl8lqjQDl++riFf4WGJHrPAXgBdUXuOjm0ot8NnVhhD+4KCZyiYuHpdXeZkPd6wNUUn2330Xy5nBxQlRZRcfh8nEC7GNKoiG9Ar8v5fYTcBlErHDs/hING9C/S/vSXkfhBnRag7eUZnHR0+VePDZ1bS55t4BAE97A3JkcPCsyq9cuEupTOPjSZRJE+JPSWC+YkBPwf9ZYaxSD7k4Qqr7+ThA5rxI4iOwPc0M6HUO9hL7aXA5QyUyl48ppszZ9Deoyu+6DCiZg7Eqb/HRRqU9+GxgxsLfyoKqZ1wYGW/oQw7qqRzl4k60ykI+7rhMWKOfoX6gAxlxc/j/hpNVOIeLZEElmY+tZLpdY25C9e44JxnyGxx8R+ze4PItYhf5h4//Ml2lFkpgF3xZmQx6NwcjVFbx0UmlM7iUq5qt6n+CLe9rSkZdONd/cnlWyHku8iJU3uYjVTBXddumg321fzgZdjf4P01kNfBwsYfYwl98fEimuvB9Gcybk8LJwFdysInYg8DlBJXKMh9dzVXxHCizZxcmIxfOcTBUZR0XcguVBHCZW8lcCecA9+3pZcnYy8P/cn2WkMZFWojKD3wcF80VvQOklCCj78lBmotV2sPFTmKHnOfjbTLZNfIg9zO8jzn4mtijwOUMlcYePjqYrZCjwMVwo0vhYKDKZj7iVSaBy9wIs0WvAehjcOXc/isowRKvcpEVppLMx34y3RUygStFja0f/H+E2NXB5U/Ejs7lY675cvwAYJGxreHgfZVRfAxT6Qw+25kveg5Aeikjc6Vw8LzKDj5qqszj458iJkw4C2C+V0KJtjO/3LQkaXizcMEQ6rv9l1OW5brPRbpD5TAfO8iMvyMDt8uqiT2+v+cBM//Cti6iAYyB/38TWfXB5WZil8nmY5opqyEDWKDS8HsZ3v/SzqG77zlYRuyX+UhQ6Qo+a5sy5w8AbhRTiMPd8H1pjM5CszjoovIFHzVVFvJxWTRl9LwM4B0iEuZ4oOXZJvpqCv/LESxXOhc3HCq/87GazHnkPQC3YkgYBNW7a+dNWb43nYX7XQQ9jePgN2I3AZefETvCzcdQkxHVpmNVPmg5AIyjxo8Znr1dipMytMUqSYG87nrawMGbKpP5eF2lO7jMr2UuWpyVkT1F5CIuE8Dl6qehvNnLQerO1icUuFVdPyF/c9BJZR8fVVSW83FSNBW1sgDAM4EL4WsAOAvlrpLkffQiGQCORuimEfx/tRArIoeLCyLLcYqPpWQmXXvBzOvLA3VTMA8WJ5/nK+TFgl7GcfADsZuByxXEruXmo5OpaO5hITOGh7B0lUvlyXdhFQBkldHLLxy8qjKejx4qI8FlgctMFD4E9f/igb5iPexEWkYdBYD1Ln2E5HFQV+U7LuQyKpv5OEpmcjK8zCjOQxNJIU0nbVs/BJD9lD5awP+5TlZYJheXBZYjnY8ZZqLmLW/kJTwU2gXA87mgEa0AgHf18TYHO4ndGlxuJHZD8NnGRETugNe5z3FATe9Bmu0gres9ApDi0sWvHLyhMo+P4SpT+MiINBFt4OM+gQOKbF7ZSZoLBwF4WumhTBYHTVVOciHFquzh4zsyj+H7fMmuxIOfJwPA63p4Af6/4GKVcHNxhtils/kYZyJmwOefQ/QW6wawTA9vcbCW2M+CyyUq3cFnU/Pg3Ocbnteb8zyAYy4d7OVghMo8PjqoJPHxj8s8zJA0yO2oM9oN4GoR/sKzOKiqspeL3EIqx/jYQKaxeTa03K+3NQDuxPDXGf6/ILIicrg4SezoPD4GmIf50PRGrM7WAnhUnr/lHKwkdhdw+YlKb3DpjjMNdbO0wSc62w7gQWnuHCkcDFD5iI/+Kh/zcUwwC6G7obG7na7EkwBuluChcOvK3tTM95+7tspRLjzFWeJJPhaTWazyRCss01VkOoBDLg5CUuH5c2WHoqwE+P+0yCqdy8UJYlfK56ObaYjL12y5rlq7AXxJHFaUoXx08O1WDqLVHGwgdi9wOUnlWXD5pJhpiM3UbIGu3gGAUTzQZx6F8vb3Qy9x0E9lKR8dVJbzkUycV0hcMcSoaLak0dXSego9C6CgBhdUtu9n6Qw+pTIs4S8uHkSrXOJjEl/FJ98BMM+oCo/9I0/2SXq0tzHpOUECsE/gg4gcDSbuSeckRWCVdnPxq8CKk/loxVPFRbehzKpgUEQhrQaMGDXa+95VnKTnMukA5AHEdXSHt05JHCwg9vPg8l1ivw4ur4TyU3RaOth5xmW4xX4DgEMRfCnL9l91XvJTvEoSH+1VtvDxE/H7LdTXCCYpZjkAyO1Il87ar2/J8UNeBEs8ykW2iyXc5mMEP67HKqlLnGSKhSp/QrmJ9OtoMvdAtkYHiF3LzcVOYreQ+ajGUQoj881oMrVC08mT6jtJEBstfwjliWI6Upbr+3mGFh+oDAOXc1VmgMurIj80C0D6oNJkcvs9AJCdtvuyBOa1WDLAiq/8kOHLcyob+WijcpCPj4nnVqOfiyazG5YKHw9UI4OMbDd/b443c5q5GHe4yCjEiszjoz9XpjjW7V1OYhEy0qhuK/9ws4B76wfHiWVkLjYTuxf4LG81Ik97U7C2ORmus27/dbcYAPKO/wIux6ss5OMMWc4XHzLkvD+m1hLImB2N5iQ/VnDbQCWFj4+th7PWW8vmzxjXIVwgQw9rt/iMm5d8kVVO4qOT9QikZYZ9f13mIZnYPcGlFG3nKJ8avzfbb+NVvuRjD9nA4S+8ddzjlyYsIZWP6XaQslSfdTc0u+xklZX4aGEXEZFYe9R3jzRZTexe4PKeYCMpw+LfO5Tt03CVFXz8RDZ0bPcPr8he1VW5zMcQO0pZZ/iGK7JKwfGkF2KIakp8lLOriKhQ69lH3Arlg52T3wGXqWRzl+i65JRbwe8iu0tZfdi6TI4G2mHKGpN2ZvLhKWqXEVGJ55KOFfjvONnsJQavuSj55127jYhcjRO2/OOHp204pbP1wqNPtMmPtumISKj6wmdpsm/Hyd4Xqk/Y8cCHD20+paPZjIMFXhweXcv2IyKhSO9FZyQGIF9bMaKE3acUKg3acluhlE4mtnbZfUpXo7E78xTK1cEAZWTnpWdkhTs0SEBEQpm+X1x9vFgIHigdkfTfLGtVMTBX63I2TJ/c3LbGNUs+F2O/fAXsNSzHFaCa/TIdcBc2qmqAHG2/1ATQ26heAE6Q/eq6A3xoVCuAJTYMfQ2kGpRwHOhkxwwC5ErGFCfBU8yOiSoAXjWmHsAZsmOFA8CPxrQISLJlaA6QX8iIhGTgFXumDoAmRhR5B3IZeyY0G1hoRG2B26I9Q2uAk0Y0EfiGbNoRgCfWgLYBY+yaWDcw2ngi7gIN7BrxOLDReFoBd1x2Db0HXAsznDFAMtm2zwFyA8PZAsy1b6JygDlG40iB3MW+EbYB+40mzo18l31DrwHuYgbTHzhONm6cBLxoMJ8Cc+0c8SrwgbGIZ4Hn9SRYPloFXAwxlCoSPFX0EzNh6xshVq8X4Kmpt/DFX7Z3qPUEzgi6cW0HsNNp8Yq7gSl6Gw/Ip2bHsOYDX5NuW8kAsFC0dsJuYI/OHOehfPJFCyISTgCj9DMASrmBtaPJQE6Evp4GPI+hPDWuaPQNeCrop6pbgW8irF1TCeilr++Az0tMPgZl9nYZd0jH7zKye1i7qAzgTV1VyQVaEzlabcsF80s9Fb6mwM0YSyd8A6Q49JQIHCZm2UnnFUP0RN1kBcZYOhoK5FbSUdh54A0WUXjXA/knKunKuZOxy9qV9AAv6+h54F6kGhFFiaTv4k8Uc6wdHQS26EfYBnxMhjo5C/Lu8pw5BauRBDx06aamhIKqxkKVJw0rSXzHpbawGu1koKVuEoEDFOCFTahhNYrcAWboJfoi0D/QVZMKIqyG8CPwu6iTAcC1kED3MXaLVoMSgJzyOvkNmE0BPvohlpHlrCQBQ/RR34P8GoEuAXjeeggpwBf6WAp8TwE+JBWoaz1oOXDZoYeSt4BOga6RhJRIC9JDBmrrYSSQKga6JcDnZEFLZQLj9XAemEcBvsQdYIRWVRLNHP0K7BP5awJkVQp0o4Asl0bl03JEMzcWyC7J3xpgEwX4yN+Bn0jj1VhHZr6mDLzAXcXHkBoGumYSMEajDsDLpk68BSzibgZw0hnokgF3SW2KHkRmdVNH3wBnRM7E88BYCvAlsoATgjYDgYNk7gcCqKqB88UXRO06yLgbG+iSAIwmTSMuAa+bvLKPgDEajAUOttdsG/AFBfhq94DM0tpMA+6WNnl0FNiuwX4A0o9VtamRB6l2oFsA4DBpWvgKsJTM/nTgbnGfIjOgzF8Sp8VsIJkCfLFMAN20GS9Dam/6OgOI96ktcOtnALg7NcSnsOvAsEA3DUBOtCZR54CbTtMXeh+Y59N44Huh0wEASBvq8mEAcK1IgCtzH8Ac0rQrgA/J/G8Bjvn0PfAKUciAWwDkY/GCV8nAuxTgJwFwN9ZEOAZ4WlqAEQDK++C6C7k+EVH4zNsA5PVPeVFXglQjwBW9B+CAS5NmHuBvwQJUyQEG+9AYeOBSEJX7MAdA1uJKKknAPjHAzQeAsaSlMBPAQrKA4hngOx+GAMmkHrdTApA1u6iiyH2gFwX2cjcA5JTRJDwbQAsrQB8At0XvvgRmeUHUdL8E4HyCg2gYkBoW4N4EgPWk6VAAqVGWoCuAhl45U4DOXhENvwwApzqKqcB7FNjDrwMo6K7NTgBfkCUMfwjM9CouD7mFfKBiczMAFPwqIadWgJsJAH9HaxLvBvC0NaAdwD6v+gG/ke/FP8qBcj0F9pLXFEmCJnMB3Iq2CBOAgpLeJAHvakBU71tF6wD3LJQNScuIHACLySJWdwP9vUkDnteEKP4AvncENsd2xWlBk4EygOesQsh5YJkXoW4UVNeIqKxAgT30niJR1EJMBpAebhXoM+AvL+KBc6JmAb87lFnnVy/sHin60CQHwCqyjAMAdy21BcA3ZFbjGcxHx2b1LiN4MRUAXrAORXKBN9R2ASOMyVH9tbdK661othcA5Pzr2xPblnYSUaEbAG6FWAfhV+Bnlah7kKobj1i6xwfnAewXdSZOl71iZ/01/9mIjhKAVWQhpwN5Uax44IJoLIKr3uRD2WCe1Bu5Jku+AZAvpADAM1aiDoB41jjgRzJQZ4WEL69DNTO5Puk/7q3kf9w+sTNirER4JpDI2gJMMwohtNXc33PAlq5+3rMkGaNQpH63sYs2b0/LlH1YSpZyNXCWdR9obgSCq9rrP2eBLd/dklCFjFd0lm3dbcIXq3el/n4PgBxvLUYA7gqKCsCdYroTivZZmFoAtuf4e52jycgFUYzNBnA3xlrEFgBjFCOAHaRrIbTBrP05YMs3Nw4pSQGwJwB8RdZS+A3YqPgcWKAjIfalFVcksN173m0RRYFxnWKExaB3gUdhRKFpQLxOhEJNE0+4wZaufd67KAVMMQXAw2JW4zlAbkBU9QmeROpBLPf6dzegmrfljQYRFEirZAI4LlqNqGxgHtEA4CzxLkR3+OBPCWzPhcXPRFOgHQUAk8lybgaOEi0FlvHlqD5llxuq2WsTYigQv6N42nq8ChTE0DGgDz9i6cEfX4Rq/uG58S4K0IcB3C5hPSoWAMPCclBQjRNXs3kHZahmfjEgggJ3+C0ApwXrIVwBvuoM/O7iQKw44ut0qObtmd5YpIDeVgKQRPotvuh6am9TQh8BF98HVpO/XR3eOQlVOWN5vxAK+KMBoLNuopbdBpBZ1pT0ANxpwBC/iLXG/fIAbDnzx9fKC2QGvwOQ4dBL3ZNg9jIlxZ4AMlBTM7FUz6QLUM06sfAZB5nEmAsAdpI+W+2G6jhTQnsA4K6ojaPBlEOPwJbvrh9UhkxkfwBI0EX1ZU9gciYqdpDvYqURX98AW87cP6GdSObyJQCZcToQXsqFtyalngxgoi+u+Flnc6Ca8Wn3kgKZzuEAtoo6GOuG+RHTAbTwRqw2dt19qP6zc1wDgUxp1eN5x2JIh3/B+/HmhNYDD2NUojoknnsCtvTX8i7FBDKtZWuGkh7PmqL/AE/iiCis/qzkHLDljPVDSwtkQQd4zFC5AuC12AEr/5bAlna+3yyKrGrnY16NMyl0CHjgBlu+8km/YgJZ2jE3vBgbWFpuTUs71M1/QsVXNmdCNWfr2PrhZH2rfvFEZVRAaXcfytl+EaJavX9WAttzLqlLNFnllj+wugSS6HtgPu7kj4l58PK7MmSte50EcD0ikAyB6hI/FLkFZc7pBUeBY4LFIsfEoztbUiD9SO2kH8IOQMr4qF9RogTgcTmrFXhnq233A4V2qu8kZUUZeMnualygMt4fXjpOARvsLlrJOhPNBS0H7op2V5GV2YD7l1jisysg1bG7iGq8+J96InEa8w+kivYX32NOJFGQUaDgd4XuHWOCCWFJecDdyUGE6VA+qhM8+JuBpUGDWDfrUNBAyGBtCBrQRobUI3hQ9qxiKQURIyd8v7RfSDDh/w3b6PNkX/s77b2m9+Gz1N7WK5wFDRNtvVIeLQ6Itp5bi3NhwYZr0cGGm0WDDXdi/qfDg9hgw8MKwYbHdYINeY2DDQVtgw3ujnZerCaeLnZeSU3cney8sNNaXIqx82iQpMGbZOs7pufL3kpSwYX5hew9EtokjB49auSIIX2fb9+iSeO6helf///r/3/9/68CAQBWUDgguiwAAFCoAJ0BKpABaAE+GQyFQaEEnm8xBABhLG3fj5M1fMyaH03+ifrp40EguZf2P9cP7h/3v9N8w1R/oH3e/dL/J9PTOf+q+274DfGfyf+7f2L9q/73//Pjd/Tvyc+Uv5w/1PuAfxP+M/3f+8/27/Vf4n/+d6r+l+gL+e/yf/Uf1792fmW/rP9c/s3uF/U3/U/5n/VfIB/N/5x94P7//bZ/gPYK/r/+v9gH+J/0z/b/m58qP97/4/+G/43/2+hH9kv/J/pP9l/6voH/lP9G/4H7P//b/WfQB/zPUA/5XsI/wD91/bv6Q/w38Mv0m8j/7h+J/7T/3D2v8uvznuX+APIv2Ya23fvne/q+8vgBezvOEetdV6Av0D+teaR+T5l+IF/OP3Q9Yf+l4Kf3b/n+wB/Lv6//y/73/hveNzd/YXsCfyr+vf8H/Ee3P///cL+6f//9yX9Uf+kQBavSSawli+FVVVVVVVSzYGUMz6EpDTkNJWnRRavRmBhsnvE1BZJNXSpp01GRbVfbnP1kE6KLRtgY6KyfOff/Tvze8DmnCjkjedMvcnpVCOuoCVVVVVMtCqqqqqqqqqqlUpBPMpcAOypffE8R/EhYFoXv6DVyfPpUz6mjIUdLusJF0dCa8ChtBzu7u7uatGMVzkFfBX2pFn9GxG/+FF9mY77Rst2FLWfmhSgrqmu6kwOpYgghSabG6OkmcSOa6RbsB7vHZK1pFnoT/ll05L/rVxo0lacczhRrhSkhP2L0Ws1yfsSbJe/hWVSnW+62VLQVcKbkykZgtS6pP14Rnrcxt1MWl5P0QngQeV2ZEC4xFWQsQT2N92dg6B9ODiNQ5LM2jSTpKl+VpxM/9VJO59xL7TBlV1KcQRa6gN91vClGCkduc/4rjp1kfWMt3VcgACTyeShVxmMnJZfUXN3kX5z4U/GNDj+T/fj3rUmHtfhP9p0sz08+fAvjpBVB3AirX38bFtGknjCK1gSxIsEd9SvjcSKX48ZQuZcm7Jqen45kUYoy83OYdKL75VbtjYCT8WBriMlGI/3Y8RFav9JygRkb7bNP5ljnZDM+D6z4LV9kumu7gIRe42KhKwlXXd2O8QDE7Aq2etHwUKQskv1lAfi4qqN5wgK8UiICHLxn8aPYJ/hryYz74z7DimF7yjcSMAJfcGUFiAmN+3VoFuBfKg6IeD3BTtSwOwqYWyWDh1nd3d3d3d3S5frRckeHCvDukT7feKQNhHpeWkA9U8YgBsK3sk7u7nB3reo/D74NG4T6MlixedLl+u4dXejeacKOOB4UES5X/4LGxXIJFzEcJehEEKzVnIVZoNJWnRRavGRBmlQDhuHIBH/rdsUPnGhLud3znotLiuQ9ddtzOOpddt7oJ/2FP2ylNZ5xkoLij8V6STWDJeA89vvcqlHz7Ozn7bSF6ixDcFbspmNICF8SjTg4NjLlju1VCetias0b3UIbVNd/LTaNJWnKVg1n7q7V0JpP2ptgAG95cNU1Tl3bvBeeryziUWUOsifVJaE1C1HghqYTuGFcadzy6LNTfhW7u7u7uY1i7Vs1wFk4i38jqTeq6j8HyfEhiosPq/8RGXeih6l1a2zdm8w+cGFAzoYYfIGZYMhuCm3q42t8jzG05Q/VB/HZvIWx32/qyZzoivW8R/qX8hqNtDg6eRsHcN5rEC01atqVi+DLoB13BdkOb1ywNTL5Yf2MNl3El8H1SSawli+FVVVVVR9WAMltk+TdZbgoZPCKqqqqqqqqqqqqpCU+aCNKg+eM5qrcnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3cwAAP7/+UeAAIL3EKkota8y0o1nkYdDSehr+xOIbBosyaMUnqoMOGHq7ba21kHKmOtRmlWtRziOUhufYrHjKmhxCpuYMdxz1AeGCnF/nWJTEwZmDYeWwiFkfCg4gPXA4wJeki/UeCbkivDSy30gA1bpsOaMWW7blCS7tcEWfIkGqGYfvnsT84/ZjZ53WFQsQ8Kf07+7XklTx1/4aojn+DdC1HTJNgCu7ly5Fi2AvypR9gzenLiTRae9uqLrZKksFKu3u+TcFeO/XjzFTJhwywo3DQgAcfYeLRTgkbG2YMXzLrgURh0cF12CGFf8zS1MmjJlGXcbQKrB1dszUe13+KRA2Km/RzLO64saqwrmMCblL6B2cqpAniOhOeA/euQb97D6mbGlNLtL1eZOKawAV2dP+8n/5oiBhfAVmfVEVP0OMioWgytE6nIlyrlqhkzKJjz/S9fq7T/frjqvFYfmZto5aX/1o2tqvNghVRdgHRpIoiFj/oZ0gEAwLmeSeBC6EUPcwisb+Q1ob9jR2e+8DgvxBtePxdmfxM4QeIs80FYDNvHfCyOOQwBwjO95QWmPwX1fRTHoZYUucki+BlBq8iaNq0fHcm9TunIYlryz0KPV4N9hATV8Nqoog6nlLVR8zx9wy++CHlkmt9RSrG+m+37FogAB3WkX+WACNCUTI996Xbbqu8A1/VlXRhMkU8emst/2mfxx3DKnPPHpYwYnDhH99aWB9fSEpr64KpriIOrU8lPDI/vxleMKvZQJCI9RGwNDYp7KO7Ij8iELTS0B0r5eQXpQjJwKZhGZ9y3j+gDl4UM+hrxD6QpPH+cowqC3xi7k9kdMJj8x1ysR7PMjM9Yx8z74JKFDqsqyDBmvxDXlhbBUGqeXsQQAtltA+deBe1m93YQ5GBmBpUixrS/ykcPw/2RcgI36Wd/F9DhU2rVOaJUcDMszCq69YwjlhoeeLeElKl26b8enS9JygCFCGp7ffFl2SZbF88cuOb/9Rf5Hcfws/ZGOjlgusmOk+7/fWongWoe7bsI08ZyZxMCLBzQrDSkgED61+UEMYHVQyXO7RjM4RqbLxU9z50bsWKv6SSXVIk0KfDq04U1lMlJHFgiRsugSYwp6GBtbjuMPThkBXny5dr1LH3Sn9z7TxCGdbjoy4pZ3sscg35NKtdorI7X6wp2cMgD3s9q6ZVxwh0eeGj4M0DVgTRMSuQsMf3zYC/MPDljfOgNFW9TCFZ8u8TEz03zhn2GU1fJw8iPKXdvLWGneDTHL6/30y+6oPVMNkxGuHHedsAnx+iwz3vw1FxBzWpsEmmjoUsVpT2zQu/I3yLtbFiXuyZMnne0muzECaXb/ZnNhhoLPHi0CYpPbXn/m+/ib4Zi+EZoJdZPoyfrmmhoYzmwAXgAjrxu2HwDvmbCHeZloSF0nRo6ihUTHzONYgm2XM2fhNqoRNYVGCD2XkBeoUHdErPUx9TUyfvz5uMHdciyLRfw3giyIq5vuctw3bNzNCVIsrj9hKCFFWLrlV30K8ImjEtHjYk6usJRxX0irtiGd/sVYosPlt1FuANp8MPd09HP8H1DW0TWRQ4Uu24iqu/iNmcOBdPtxxrIVry958gNDxoGKIhh7mlWbQd9eyolno6w91oHhtarW2YoG66l76qi4Rci7VctTekLUcz0GL6M/8+DpWswgo1z8BF8UKoaVuMCp+TGZOz2HSY9k+Gcn81GcswGcTyjriJaLeJ0ZAQe9qaWsx3EoElobQbuucX36Vr0XZIaRCKM2+34kB7/6AnF2hI2sIbY3E5iRMtdkKlZu/7i9XVLjs9TIWfNujYpxDKR2pnz202iSFBTA10jD9EBJ0Gbk6My3GsCcblNKeq1AQ9TvaNQbS2yYlzlKgMI2EobArNSEfngLpWmxXrzx0ez7yU24rY7mv8H4BRMbT8Vavyiajw7kkJlqqpnbCE/s2SCfxvcCairM+22yckpyGATC5EXIgs6tw/cUPLVEQjKTLfKofWdB60BiAHFG20t77edKwqqLJoAEmrWs9eX0FOhwBV18elArtp/fIsX2YxPmgCg+ebYYT4IxlGsdel9nUVWYqSfJoW+cbdLgmHlMXa7BuEHNnURy7rKFVOExXqzBsU16ZkPmDiR66gpeU/h00/fYsJQ+onExa2UvVcH7Ajy9dstDMVNAIsHHOpTxFZEimMz0Ts+8iDl7obzUyv5b4s9wYZJJhhio6bxVxg5+k/e5CYn3Zqkxlvr6Uq4RffUbAAKVKKCJsmAiHOUdFMTlXWMrlNyMjSQMHzu9/wlRqkiYRrpraxahi/hCZWgBT+OTr+PMCYIfwTLjBqktY5jiMPrRdka9hmVvu8WVeQnAw+dfJf+QbYDcauimN1NN3gkCgMImPbFfy0J2l9PrtT+HYkHKjrL8Y2VR41+gKw0GHjh7FOJorZgwtCvZtwzxwJjq8t5MCTgsb4frfFpdFEosJY9iDE7On8fiL2wlENWABYBnu7my2wY6ydwcN2zQQ0Bg9e+n3XOUCzx1qdvQYikGd+AZTcs+64/iwINNQMbDXIyXlzGw2eMOEZ7N1+OjO4thy2tHGbKTsSKOOHex/XQyR84fDFn8orINY2wAai5FKitnvF9p2crwgsjrrx9YwtnSw+Fl/m3qzl6asvRVVTMkUfDAL1oOPTB/puhx0uHiRiem1wW1KAMjR7AVj3/lQc33l9RYsPKYRS04m3A5lXxly0DQtB5UOU5a63BvAM2+saLVM7WVwpkEe4fyNaf/ubBekIAPsCICPQ0fGlMfklPE6CeBCjIlOSeXQgLzDnuL8CVHK0huvwBYShvkrCrdttSqLT7/jVVNZwsLQS7k7UQO3YQV/mWinqCexbXD+6Lv7fjK4csuZzycLk3+cnzX1J8WLVgC6wGR/TUCqzGZxDYIff1Ac9Kb/ZvROxRWTZHjm9gCzNkf4+2iUepua4+v/7IgwE9i9Xh2+45mrQ9PXlBn5zcVopPV/s3GHMMCC2XlEflslj8fhW0ZOpVFYpX1qxSkaWK1QYsvZEVYKw/XCK03yJWY7pNUZgK9NtFOZku0mcTSNq61Vqfkb2kOSfjiBxFEj+KcBdXS/bhyDkgT8rI/8Msuaykqj+ly7qwtvJIHKYly31hBNyVBUKJsihAQfGd3TUL0id6ERS22/dcdLuitNOtRzmfFnO+hGBZdSZGHktpqbUFYTDF7dpZcxc1KrdGWAuE/sVUHY3bDvjGcG/XVeX1q1gJhrq7+4wwXyg/kV5FH7UNcPFL6n38QWsrXj21Yrg1Y5qQ5FBixWF7xUPzp2TH1TiKWLK5J6t/h7kPWjXkv1ZOOjqQmYo9x+WXloLrN3psyA7vpiIn1YD2cyz/Y1xjIANyFIt4xLMY9R6a2/N+HmHQkjpkhPOLDrxZevMC2weYHLYwHSfGH62ofxRf/Rni2zmhlbhW4N8+NWCMP77DfwEM7AtzoJqyl7tB6pMElrpNYpMC0Lxf1XC+TgALx59Tw8ACUVi2OUqQR+KlErShTe1AMpSehJW/67H4abnCBoxR9NZI6fUKWq33K90K35iKwIaERhe3CR/KZNkHYFGZKcAflmCGh3QDJa/tKfJkPEem6g45uMH3iG5+l08DZliq/iR06f1Nf9DFl4MBvlHQ6Z9GnjknwH/7JvsuuQBPMp8H4KBv27GBKR6nmd0Ss2nNOajv6Udb9y6dvIasGUi70Kk/f0HicEvUKbAG02G5U+AnezHD27xCOk3fNeovRP2J92U7TtXHgPK7yWTSHcV/ywE++XTX5pE/b1VuRBbN3iEIrs2XBRjol1pOEZO5XRDHiYPLKZwO83y33yFciF7fbHSsQUOEdgJILUYeCxmKIv+ni50DkyXwwHA/xzoU9E65+hcAI6+Bz43lQbYiTitxvxgbtHZ1Vwi/umQhGhk2LxAsYiahEKLaeir1psJJMgJX4oaUuB4KnKoPileyBOWy9SRAzyRqnJjwZ9vm1tqjORi+EhyxIsRrhnVcnJuRXh260fevxydt1ptwuKnyI/YC4FRthtAQtWXYdglJBlVWCNDszIehrPPWj9xpIUFx42bz1JEsyNfJ+dkQj2R5xzsbZDWV7v9rgPdLtiYXvW2YwjNN2gWC6FbkLjaFjLw9O9QF7dVgtEfFxEq82CUh9ynwpZKtR2U9Wy+F80lYtcXQXn9e3dLUDLBcoq/HmH2xCo4M4+IVir9S8wCCb1MypujCeTiMrBN13DOYp7GgZK7WpnQN24V5vE20UtbodIEdouD8gC2sCfXShx5THSMfwDBft1/Z6+lJs+dUF6JeRVZFIpIpS/v37fAte0vLsSawhFWWatClAOzwl/HChq5zlYIlSfw31u9f4qaSC4JwpztV/+GockM1H4HxrIcEMGteAjO2MgtXTnYwZ1YQu1tz91fy5Nc9vE7zM9ak5TPjOk6wIEoC4FvrHs65tsD/t2JwFQA6x452RDSqmWXlTIiNwqgvxC8jSSGtIPwWLV6bekzzDpu4x5ZKfmIhVSTSGdUKHWkXm/aeaG+QAT+pibOWUAe/khN6OjMkpJShkJWXtARwpKKLTXQ3Upkdfl1K79yyLoEKNrMcbDdH84RVZ/JGmg5VeJC/31QK4ZJpcuuGkdTerITbDgIESfsXaovPRoHeXeQvLrPRwcEErG4is+Jgz18cLdUGwGI+kRWN5mymX4Td+gIbxqLEg+PxIprUDURCzWfkdOD+KJWtida6ztyRv3BeSu8VbwK0q4wj5gpuin/zMtdSmTNbKlb4TseO7qOdD5TKsKozEFpfUzCEbq8zX++jI+FooYvex9TRvf4jGLMrf9RCJbyQNditRwMC2rTwgaHG9qOoeiWxx7XdbLZGo4feZi8G1ZyEDFyxlFQRow7mY2gmCVvluwMTZZifNb5aUeNEaWEhK4zPPadre5jyZcY88X51Xi0HckQQYTr9ohVbkNw/ZtZwWUrKSxOQYX3KYAd8Q3bRIvj+9y3B0lQBWF2co8Ve/gKLtWznOsVXmudCQaCNgh8hoRX24YWv5gIEUWUNrCv/5aMEF0juyZUb/pQYQwzoXpI+0DkomJXuO9V/UHC3FZHUHhMx0TSuwhv9mycJo476UJVxdc+8gF9gpkRkJ6I6uJxV/AfdOsU8hOjxXaQn+wB12O8JEbkqLRgljaZ1kh/EyedK3hPaYY6bEPK4DputyKmcEgjVRNta9V57OCyYeHd1+Oyd+Ue2sHuNOnwL8+IoypciK238+w+wE3NVobPF2Lemqj4GnJcmHpOEqLEnNyNhDOn43VUttAY2P/wPyaXJV2QFRSpCRueHGcZIa7Dxr6GoKdWYiClvJ9eP3ifYXLgLqZi3YiaH3kf0517K7pXNdfb7zn3HGyRT7Zs8fS6Z4LWpRxKOJy+vmEgO70ysQa+jk2RZDdB2RcHkiS5B7DZGwHMexcgO/6n2x23Y50w7aaDhGVhOVrvAhkcIeA8PcS95yOQRza4wQobw1tRtUpaZIMaFJaFzHrgSi9ReooYMzz28CVyGepA0qfSwno3WSfPO65VhFXoJAONUAsjSs55Ik6jwLGVXNSGnyzIAKbCgcsQ7SpjJwBOHfWlT85WVQYPlPvNdlf6+PBPHGRmc0kdwi/48X6wTbAqIj3B5Vwa7s83pCW2brkLaC3cVrsq2UpbqHqoZi6LO80zHMaAEMTcPCQpRMe9Gpep0OrQTIipB46Ol/baAlnD3lYuReh/ITzzqeQIC3drp134P6DfgxG9QQCMMZBp85oiK3+HwYim/P/7jXhHjl6++zzQPuWnrBHyU88l/oBWEjUCnNyDEWI/WhUpYyGMlnKcQK4+2bL/qjL9qeL7ssb3dehCWHiRU7IDF/gZfLm4ut69iW/YkBZbm5f+VPa4JWpIZ6oSlAYRW2Wca/V2/S8SjSFJrKG032RKeBm0tX89THBLhHvCmoWByoGSETAS/wiaE8cOV6FSHklWdrFMMWDk+RUbOjmbbrRM8ohH7l/W7r1gGzLxRTUM7ia/m4SRhVlphvRBgAWebHubonKqm9onOEPKpACs+G40/u2WPpxt2zF0I2tl+/usVfQvd+wpvtRi+1nP0SE+cy+On3BjUBVZn07t0YVlezc7i+Lmgu/Hsxlww+xKnmUa7WbqJMDJJUoJKiWx8XoyBNs0B48pSs1+3+XUJrMFQP4TYyUmM95OrZq74IL7qZaxVa40Ua2t887fMBovbImNN2zj/nUDhF6Xa7GGSHmAqtrQ2bfAl53i29Pmary5zK3c3+K9Ae2Ie3Ox6W6UI3Qxc6BB+vtkREDrT/tgL3coGQLIJTNr+e64MOKDyjFCmJPQqBXmMczTdqsy/rUOsC0mHHMl3OIMSg4KkuJIaJwPgWwQjFX//TrPYF5JsLEWckuAuN5e9OGhWwT5Tj8Rh89wCXukAg7oHFjE0BIB711u7ivgnBUmj16ChfJ17MvGmYjoqcVAmEvG+MTepp48Hz3a3bBM+B3FOU3z/gD9qGDPl8z4uf82RWBRDHAfFZbV875EJKoKVX/aNvkBMdF53gz7hr8CdKh/rjccBHQJfdxdzLoM88S02U2RUsk2+RDYdWzz0XFBwe+D8a2NgcJMjody+mqTIUnv3736TraabezDTkgsiYH4ns+gO0DaTFTEuUP3mWwKJZm1vlG8gZfYt0pgU5/SwriA637jAqGP16EVWpKW2o5uqgFkynOqIP5Xy2VJ92fljEYEeK/2hlQgb05X+sa3G/xSZT9xiK+TwUc0OfK7SXsPIpbHwdBXxpqBLvDnJ8WYn1cokp6BS29ul1eKYnZ0AHjITZO5b3uCrCe77Ct8or4le84WlmWeAen5DbAzX2GX+riA5oU5ePnYQF2pORxgJtpljoM0opSA7V0fDnxhV7Jjn7LZlmxaVKlT3vlvnUM4qH70jOXgEYmKYZRb8aegZurTHjET+FB6gmXWPl72BZntSnWP56lcHg9iLGeAGPrFNBhKp6HJhvmPy2PvhXHSgWFKsHi1bD09Pb66kp6GYj63F1JsSdbKFAh2A6y2muNjpHEpaCaD7xpm3juxh6YF9hV//K6S5khyQls5IM2/+LjjR4rVq7PSnfdt+rQRZNWT2soJ+P84R/R5InPivVpTbRrDIIl8TCzljE7XJ/3Xdem1LA2EXh6BIPQ5dai/WGtTgIKhjZMl+avsy5gzI2NSr7xygmHSr9eQVqeStqR2h8NLqQspzsm634u3jpbherPikdOb75K3MucmTy7sp4QG83HHYNCicnHoxVdecqvOXgPAbBmISWaQfN09OHbj7C4q+PUiEzQs/OpZKMdRjygUjrBv2a7g78jgeH8chlHSC64WAE2QGT79eMOQGJ3FamGUkAIUHdenaCxl8Av8yf7wDvq1be9hrh4qoPALdE0PHF96IeKcVCxaBPmU4JJKSSWVznuTV52iZAConvB9sLDKQ731VKADtM+u8MmmpZw5dAp+cn7DN7r9XSCqRrEC8B3d9r+zSyQ6/6F5mG3fAWJ03xVWhN4u712roL8fpqJw5yj8aGZucYMWfPZYhiKnfwPYmzW3glRUAMxd7H5yTdAHl8OIqgS7RN/cpaBuw74GikZvYIEl0Rnu3jDu8xS6I+PUxQAJC5bTLpzprDkqyeADC0sHaQQIzzHyv9UvOx7Z9GSyVHZfuWBWLIRdE9QWvZ6wmcbTbYp5DRR/9sOEPwVxnfF1vPIxDpC/Y+yesnwa7W0cWvHbwJ0jwmak7rGQ7VIRRHm8eZBf6OoDNRBiv4n0dmg7gs2GYi4JQLDXdeOL3pxY/z8sn8WX++llZ/wLA3NxrcjTHFZMNSOznlqNtYJG0hloL3FtBEVHNToyotQ2fjs0D3NFPwHv+fIkeJgz05RogCIWTWxAYHvPhw82ToOjOxgxLnF7dMezr3yDjx6kpLOFKspsu0yvXy0eGYZ1y0VoNY3xn9BMDBtukPMzJrAD3HJG1Si2NsQEIz0XNjH0ZV95xm0G8DJjFPcOtCbc5gvjOcs0t5/9fQIaQvcZAhFapA0wLI474+7X5HVLnt4Sl9c+j2/iwxMYLsv8i2NlyhNvdLJUpX+aT+p2U/n8cC1kL14irmL0HF7fZZ+QZk7JzS+DJxasqJCo3hjgy5PTfH30vVf8efChWBOk0+BYkrkDmWHwBuTUAHEGxpntrWrj/hjFjjNgnI7YFmPqKWP8m1fMgI1i1cqINqZIvPBuaD4iJ8R1HrwC6XA4+zuQLoorLwkRs4h8JSQdsb1F2yg5nrjprgBKDUdNQn6t+x3srbniabaghQ3962ODd9MM+RLgcnJW22YSErgIv5cmxSLBejF2fO9wPizBoJeayymSmlZaUpzBhonPk2IAw53/jhNp6jrAQcXhkYDh3YaP1GihjXO9SqtFtqDwl1Zw+brHA05QR7w5urshzCtbr2cpbnxQbludR4FUjOqR4aAgmaCRYrGIn5jbRxHQGEkrzY6S3+nTl1/L919s+3lnIes3SdO2Q/UgsOSZ0DPj5xBM7G3ocGbhi3OVEGoACmexKOdb1bL/t4KucK9ruekMxxQYvN1gt/pk5QY8OQoLtA0uwTYcVf0xofI8940dOzoA8WeOw5jrfBACsFeXVXeAF+7Oal54GFMNQaCb98OADpeWEdFgIeZXweeRZeBM8flGYngGaquiFfcIMKXU1JPBvnHNoUZxTp0hRoNCXLcvevwHqA+dhY3GeszFu+jirT7Vf8+2QTrAEmvq6qJnGUJjzoK32cl6GpMRPjIxrEc+TX5si0I6PEHxAmx/ZHTxz76YcXlvJAA+jlMx2yBIb9VEbUvEUslmRuPu+SY8pIU3L2dQiNjgM+NEWboGPjl/pWqGzykdMO8Wfv0cAur2jT5vR0naZNtx87TEr0dC6uguW77cZGMxfokohXTE9LPjcqpcS7TU4+UvJi1vCe+nzdcpE8jZhLRUTrFn3TsSmCziJlXrai21wlzkG4CDx3RcFkwuMUSRp2Y5sPsnVDaiYnRd4bk54iknF+aM81dopNlP+pImHB+vm5Fo8UwG0ufDfuwUBFjoQivP0dUwrzZ1Sr5znct8XwbK+TJ8FOIzS+KA1T9E4tMDfgeO4Q5YJiNzB5WNQMKYeGtFKuGaC+feNGPU1+e0sZ59UsvPPPiIWjaUnikIsu0dZy3boC3ZKqnuB9VmvKWwHzDt4QRHzFVXBZWI3uLZC4hYCSwWDkPbYpNLhEYbTfHI60sMUUhXTIpwFtFPaK2wCCHII5bDS4HVi0C3jX/vfaQ0QAPFc6JwvllYWB5kZIpMK/ElpvupU9+BC0mdL2q4NW/hyml9MzBRGaAKT8akdNp3X+U36+KYx3VFUHkn33RMTG9M+jZ8HktaRu3eUvS+FsXwFnlywlsBtOVwkPRcpvFiTGegwBd8lS0IVuuA4bWB9VmDpPT7uxVxszFNXHSQgeHsQvXqkZ48kGAgaVS/pHZYFqDu4L0fMWEe4MuSuFOFyiYuh+6CRH7AJj7HPiX+EC4eUD+DDWHOoKVcZzF7AmWCrzWfrKp77qafYfbzaFeLJ7W6vNsMwj+j0k00I8WAz+xzfbzMroHQoR4jNpUyqhE1j0SadfknHHL1BuRwTAqV49ysdkG18e5OGrhrE1+/IEBfR4pv01SHQaJvvllK/FA+9n3FRcj9x8e9P53K+rTu2Kx6e+CdTtfO0gtI6x59IgigNzmwH1w2iGzxDD41hOsyfgZgr0FZzmDeH/eXcfLYWhwWiK5Novzdg0g8hDRDIUG++niRcNjOULd/urkFc2ibd/iRDuYaXJkTa3XMsSZseHk/YKU7OLWKIFj3uqzvjlTiyMRiFwpn9jme4zYsZPrhjaM+cMnuONOaBAj9aFTb+oiCE0yyZ2u1ZBceuf/EOYB8y4tO5W3l3INmeTsNclzV8Ge/tlSJRB6xtFi55scGJs1dd7HdyNFCjv4X5F8kV6VX+Xx8HNwRkZ5pMCh4XkWGWnKYfoO8FPNmWx66Up4ZWTcocqJw+KZvPCDRvSuknxhkGwQmprSZ1S3voSIS5FppQJajoB5Ig74iieCiVMM+N5eToNrSGvVTYuBA2fYLGEq+WJI+bc3dLSO64nch7vFMFuksm9seRQQNboCz5tu6qTj7oPnUm3ZtqD2jVx2gyNfsa/sK4SJpx9+sNlgyMiaoOT2A5VSnYsFOibC/kzP3bfya4LYE6okjyu8DXoKuIIIacPrOZGmVI5GX+P1gcdp+s4g3ULvjFMLiT6/Ecs4zbniUpAw8d7WDAmNvW2pcvbC9iFQEup49Nu0wfsC2nPxEIZdN8ScWyxsoD7DDxz5GRijuU5jly/JkKjv+95DBhM+tj5kD4yF+JVBbrFiYSQh73ddHM/KMx/b2vfmY/Hn//uv6aKRM66GW0r7QT1eO/mRPaLLKdPFcAhIwRi0J1fXnGLv28YvFzOyzWyQtPjYoDjHVwHcRigkx6l9RhPNrHqpWAQYD8KazS51w+qzMgyAhjyGhRgOERM+DEnw8JJDDcZ2BctW3Y+Tno/ci48MO82tze49pbJHPR29bnoEr3kn02VOKTT4Ol0Ium7ig4clVBudVZxSpHX0o90iPC/hC6hGP3wCLJTV1ou50EppjJt/KeIdWPfry5nXqXwNX/Uylg0E12TcW/9KkX2xCDN7JQcWdXzyBrB4mOlD7Rt7UECh8ZJv8oV+XyLBJRmWZcTFlxieu1ef8vC7ejYsWEluoI4TxUZF1Sht0khCW0l4Is6duX9oYw4J/kQ2zsTnR/bJmmZhhk9h1EL98Z9ouKGXI0Opq1NIfBZ9wA9ABGkKaw4HcEP/4fIMOi/X9Pakh6y47+pWalU2FC6uGr+mN44fQC0lNT8NZ2EXD42hnYepJySPwWau/aIwRt3emWz9Qn/RbnD3UrZSrh0CbeGkfAohGws8ZeF134CJ4KBKfmlADP9FSUGSiCv/K1Vjm3708jbugdzE3bOFyLXOiULA7V2pF0wGHcw2m4VKP2/Oggca9P9hGoIfPeR+NcyIgk0jdWqPFIvswwS0fD76TzXnQ+lJPQXbjQeVa7NMpnwLwOrfuxgSkepwh1cA3MnMpiQbUKTQ6s+NTNeUkRPYSaQsVUR1Y0dPRPriMUIfVAoAXh62piuerto96rGeWmI/UO2sp1bC/5cvUA25A3FAm9rjOOb9JklFaTmvbEXiAUmR7Kc7RRwr1g3sDYePgs1efds0dM6oeHO7iZ3Fr9KomJ3hcEzt5oCGu2jX4iawescCptoP+C5CklTDtpZ2PZ62S++a3OJofVz4Gfx0RfmVm3VlNmm90BYmwFbK/CEH0+draaag9qnW+tjnTU0N03thsdd/thQuZOz0H2ck3lHek+X+gdd3+SzGAqVFWQiFJHqpBYQbuLHMNdOVuj6bMAQVAaiklATra+WKANOqthw3vprKj/H1HAL//qLtxpE8bh2XlbsUvQnugCUZnvm7wdaTNq+RDZNSUn52TwebDOZacXiAATJRi2+ub5UccGBCjcnRQGjuTIymfbdq16zS+asD5bVRzYsdm3eJkv+vCRoTyECP3PIyXH5GThFhuWdxFBswYN4pS2I0qA6jZUp9O0LTeNUrmKaQnxcjYSxK1DKcH7yMhWJwEhkF9joUC0VYTPajLYnVQ4GFywikXjABciCApQfd1vZZdwILuI3hThepjbKIr6ooLgsFgAQV4+doZiLfzOYy5j+pMxkSD1ET6LW12Kh1KOPLlidw25ZN1erl8/e148fq7aCk+3SmfHI4Tbtj7M6cKPNlRtUMLAeWjfi5QrJ+SejBJizZAiedBykf1z9Bu69t9PrYzzzR7fOd2sqXfPSyZYRWhLQzff3kYA2AAHESs7ctJRINjygQaDRelbb48k6y7MotyVaxnZ8pOtQCs/R9+n/QzeuUSb1ctfS91k96Mjwu3zig3vbcWWuMbwkmiYZlOewgW+nzcTXHI9Pi0+FtTco1f/aHl7jBGVpGmBVMoZ1AIvCSWyTusaLbW8jJVjF2Jptan3bcgzbb8+nPRQZoI7jVyWd4ycZd1OiavVwY/CWrq8z3XZ1SWINphKlwgir6w04vykytNaor1dBWez49pD0U1lY4cRm6J3UqVoz4xe+TuoLn1yqAelLTAmqGaYOHhUuyuN4FfXsC4kWtgie3nWquq/bvyLDFNqaofxDuiVBcoyys3Jw+UlgE4/bCEgBthmtLNKOQD3vV2jkADhPTok+y0nlLtsF/K9gAO6b//7YQ9p/b8WaKQg9FBifMl33tuPeswbb2tJGmAe03Hm+F9ml9UVldm9zh1Fw1l8RyWCvys3uQOsxmEBxt9jCEjSh+w9Ct+FzB488HCOmeHC2aDOtFP6HHvzyUMmQ6DnO7p7sIXj5E+M07PzayYwSWTj3ggo9X6R6mpuCXXbu6zJACORVpYxyTBmbgHIrwhZZ02Jofcx6X24cfUKlRQ52v7u9qfqZKUigvHyTfysVbc9OV1BFyH166EZQgNVcKm8yzx72pK/vUO5yPFDYUYDpjAUKudkRje1cWiFeGd9O7lDCSl82BfkBXpU2LOAeaNV9/cWXsp925Kt83d8aqKQWtT83nCutHOBLt1YYAhISmyNXYs7YXvS0seyKUljy5olCmX8sE5aB5GsMVmZLWb1AGyerCED2BjFsGptqQWLDIDYBjucYvHWmRKsXhZSTTWdcNiPbN4kRgJhPgG9GffW4v72hGcNaWbmwsjrYqupsq2FVDd9sALeZ2HnZ3durfM+C1n5IwG9oDTArBTLYuGhXw8Pg3WGZHx7wLtqvYVbNdZDsigiIodN6llwTvOs1+uAxxQkDx1izNvlLJOSlGpdNHy3jzaWykicwg7Yg+dD81j/+es1hCAr8cYAYqZmBzoo7wDO9xCnFKTs3Vf25K7VTQz4uWHwc+XcGsI+piUcNmhZzBbuNyMiCG7egFLfLTnUtbHtF2/A1+yD9rjDZaG4PWCHKKSgO6timeSxxaFPPW7weeJ00oarNpVmMNOu3FQEWh2hCapdwNLTyb9/p0DPPAXJPxDcGVrHoAFBBcEpr9oV/khZkYidE3ss9SGNCSSBVWjLUOQN6xmTmjRopbb8p9fQFFdPAFumIKeM70rrZ8TjVsnviivS5AMAMNUSo+N9jbw2VEjPq9L05hg32mFpgDiXUgunpZEAzDuOOwEiSrJWuvbBqmYAo9uUjyNwjw1gAxvv4BFYIc0iKsqd2RjmfgpFDLVFQCKnMsHNfGAuxOfudykXKx97uAAFVRSWTX8xM9YDPwsTlbF7TNThbuIOgHcz6WuY/PoMvhZHaBhIkDC1Ic7gfXaEJD0wXy1VRFhy35bPp/vq4HzH+XHnZHtiUxIMNHto6CDuvPs1uAF71F7ilM+93cfFlFjGTWNfYvBGPDPWqyuXtrRXFAwAM+0Zzew/gX3x8va2AbziYD92nmjh1TgXJceZdRSuw4A8z62XFbzN3ePkIuOl1aeBAx+POU7SCO19CXOwDzDTJ7qYQtFVwTZnNABNhgAAAAAAA') {
      img.src = 'https://github.com/Diramix/mos-ru-theme/blob/main/src/assets/urokov-i-miropriyatiy-net.png?raw=true';
    }
  });
}, 1000);

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
