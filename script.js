const header = document.querySelector('.sliding-header');
const year = document.querySelector('.year');
const sideBar = document.querySelector('.sidebar');

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled-header')
    }else{
        header.classList.remove('scrolled-header')
    }
})


const books = [
    {
        id: 1,
        name: "Suç ve Ceza",
        author: "Dostoyevski",
        pageNumber: 300
    }
]


function createButtonsToSideBar(){
    sideBar.innerHTML = "";

    books.forEach((book) => {
        const newButton = document.createElement("button");

        newButton.textContent = book.name;
        newButton.id = book.id;
        newButton.classList.add("side-buttons");

        sideBar.append(newButton);
    });
}

createButtonsToSideBar();

year.textContent = new Date().getFullYear();
let isMouseDown = false;
let currentMode = "paint";
let gridSize = Number(slider.value);
let gridVisible = true;