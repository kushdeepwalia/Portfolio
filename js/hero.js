const line = document.getElementById('line1');
const cursor = document.querySelector('.cursor');

const textArray = Array("Open Source Contributor.","Web Developer.","C/C++ Coder.");
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        if(!cursor.classList.contains('typing')) cursor.classList.add('typing');
        line1.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursor.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        if(!cursor.classList.contains('typing')) cursor.classList.add('typing');
        line1.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursor.classList.remove('typing');
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex = 0;
        setTimeout(type, newTextDelay);
    }
}

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(type, 0);
});