let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let text = document.getElementById('text');
let firstsection = document.getElementById('section-first');
let textbox = document.getElementById('text-box');
let textbox2 = document.getElementById('text-box2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value < 2000) {
        firstsection.style.top = value  + 'px';
    }
    if (value > 0 && value < 200) {
        textbox.style.opacity = value * 0.005;
        img1.style.transform = 'scale(1.2)';
        img1.style.transform += 'translate(70px, 0px)';
        img2.style.zIndex = 1;
        firstsection.style.top = value  + 'px';
    }

    else if (value > 199 && value < 400) {
        textbox.style.opacity = (400 - value) / 100;
        firstsection.style.top = value  + 'px';

    }
    else if (value > 499 && value < 700) {
        textbox2.style.opacity = (value - 500) * 0.005;
        img2.style.transform = 'scale(1.2)';
        img2.style.transform += 'translate(-70px, 0px)';
        textbox.style.opacity = 0;
        img1.style.transform = 'scale(1)';
        img1.style.transform = 'translate(0)';
        img2.style.zIndex = 4;
        firstsection.style.top = value  + 'px';
    }
    else if (value > 699 && value < 900) {
        textbox2.style.opacity = (900 - value) / 100;
        textbox.style.opacity = 0;
        firstsection.style.top = value  + 'px';
        
    }
    else if (value > 900 && value < 2000) {
        img2.style.transform = 'scale(1)';
        img2.style.transform = 'translate(0)';
        firstsection.style.top = value  + 'px';
    }

    else {
        textbox.style.opacity = 0;
        textbox2.style.opacity = 0;
        img1.style.transform = 'scale(1)';
        img1.style.transform = 'translate(0)';
        img2.style.zIndex = 4;
        img2.style.transform = 'scale(1)';
        img2.style.transform = 'translate(0)';
    }

});