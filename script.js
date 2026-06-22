const header = document.querySelector('.sliding-header');
const year = document.querySelector('.year');

year.textContent = new Date().getFullYear();
let isMouseDown = false;
let currentMode = "paint";
let gridSize = Number(slider.value);
let gridVisible = true;


window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled-header')
    }else{
        header.classList.remove('scrolled-header')
    }
})