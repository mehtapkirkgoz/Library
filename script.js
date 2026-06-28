const header = document.querySelector('.sliding-header');
const year = document.querySelector('.year');
const sideBar = document.querySelector('.sidebar');
const section = document.querySelector('.section-place');
const title = document.querySelector(".main-title");
const mainPlace = document.querySelector('.main-box');
const menuIconButton = document.querySelector('.menu-icon-btn');

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled-header');
    }else{
        header.classList.remove('scrolled-header');
    }
});

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
    showBooksGrid();
}

addBook(1, "Suç ve Ceza", "Dostoyevski", 688, "images/suc-ve-ceza.jpg");
addBook(2, "Sefiller", "Victor Hugo", 1232, "images/sefiller.jpg");
addBook(3, "1984", "George Orwell", 328, "images/1984.jpg");
addBook(4, "Dönüşüm", "Franz Kafka", 104, "images/dönüşüm.jpg");
addBook(5, "Anna Karenina", "Lev Tolstoy", 953, "images/anna-karenina.jpg");
addBook(6, "Madame Bovary", "Gustave Flaubert", 376, "images/madame-bovary.jpg");
addBook(7, "Aşk ve Gurur", "Jane Austen", 392, "images/aşk-ve-gurur.jpg");
addBook(8, "Notre Dame'ın Kamburu", "Victor Hugo", 452, "images/notre-dome-kamburu.jpg");
addBook(9, "Satranç", "Stefan Zweig", 192, "images/satranc.jpg");
addBook(10, "Don Kişot", "Miguel de Cervantes", 922, "images/don-kisot.jpg");

function createButtonsToSideBar(){
    sideBar.innerHTML = "";

    books.forEach((book) => {
        const newButton = document.createElement("button");

        newButton.textContent = book.name;
        newButton.id = book.id;
        newButton.classList.add("side-buttons");

        newButton.addEventListener("click", () => {
            showBookDetail(book);
        });

        sideBar.append(newButton);
    });
}

function showBookDetail(book){
    section.innerHTML = "";

    section.classList.remove("books-grid");
    section.classList.add("book-detail");

    const backButton = document.createElement("button");
    backButton.textContent = "← Back";
    backButton.classList.add("back-button");

    backButton.addEventListener("click",  () => {
    title.classList.remove('hidden');
    showBooksGrid();
    })

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
    bookImage.src = book.bookImage;
    bookImage.alt = book.name;

    section.append(backButton);
    section.append(bookName, bookAuthor, bookPageNumber, bookImage);
}

function showBooksGrid(){
    section.innerHTML = "";
    sideBar.classList.add('hidden');

    mainPlace.classList.add('main-started');
    section.classList.remove("book-detail");
    section.classList.add("books-grid-started");

    books.forEach((book) => {
        const imageButton = document.createElement("button");
        imageButton.classList.add("book-image-button");

        const image = document.createElement("img");
        image.classList.add("section-images");
        image.src = book.bookImage;
        image.alt = book.name;
        image.title = `${book.name} / ${book.author}`;

        imageButton.append(image);

        imageButton.addEventListener("click", () => {
            sideBar.classList.remove('hidden');
            title.classList.add('hidden');
            mainPlace.classList.remove('main-started');
            section.classList.remove("books-grid-started");
            showBookDetail(book);
        });

        section.append(imageButton);
    });
}

menuIconButton.addEventListener("click", () =>{
    sideBar.classList.toggle('hidden');
    sideBar.classList.add('sidebar-button-active');
    mainPlace.classList.add('main');
    section.classList.toggle('books-grid');
})

year.textContent = new Date().getFullYear();