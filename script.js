const header = document.querySelector('.sliding-header');


window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled-header')
    }else{
        header.classList.remove('scrolled-header')
    }
})