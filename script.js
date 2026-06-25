const header = document.querySelector('.sliding-header');
const year = document.querySelector('.year');
const sideBar = document.querySelector('.sidebar');
const section = document.querySelector('.section-place');

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled-header')
    }else{
        header.classList.remove('scrolled-header')
    }
})


const books = [];

function addBook(id, name, author, pageNumber, bookImage){
    books.push({
        id,
        name,
        author,
        pageNumber,
        bookImage
    });

    createButtonsToSideBar();
}

addBook(1, "Suç ve Ceza", "Dostoyevski", 688, "images/suc-ve-ceza.jpg");
addBook(2, "Sefiller", "Victor Hugo", 1232, "images/sefiller.jpg");
addBook(3, "1984", "George Orwell", 328, "images/1984.jpg");

function createButtonsToSideBar(){
    sideBar.innerHTML = "";

    books.forEach((book) => {
        const newButton = document.createElement("button");

        newButton.textContent = book.name;
        newButton.id = book.id;
        newButton.classList.add("side-buttons");

        newButton.addEventListener("click", () => {
            addBooksIngredientsToMain(book);
        })

        sideBar.append(newButton);
    });
}

function addBooksIngredientsToMain(book){
    section.innerHTML = "";

    const bookName = document.createElement("p");
    bookName.classList.add('book-name-section');
    bookName.textContent = book.name;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add('book-author-section');
    bookAuthor.textContent = book.author;

    const bookPageNumber = document.createElement("p");
    bookPageNumber.classList.add('book-page-number-section');
    bookPageNumber.textContent = `${book.pageNumber} sayfa`;

    const bookImage = document.createElement("img");
    bookImage.classList.add('book-image-section');
    bookImage.setAttribute('src' , book.bookImage);
    bookImage.alt = book.name;

    section.append(bookName, bookAuthor, bookPageNumber, bookImage);
}

createButtonsToSideBar();

year.textContent = new Date().getFullYear();
let isMouseDown = false;
let currentMode = "paint";
let gridSize = Number(slider.value);
let gridVisible = true;