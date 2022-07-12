let userLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = false
}

Book.prototype.info = function() {
    readString = "You have not read this book."
    if (this.readstatus != false){readString = "You have read this book."}
    return `${this.title} is by ${this.author}, and is ${this.pages} pages long. ${readString}`
}

function addToLibrary(book) {
    userLibrary.push(book)
}

const newBook = new Book("The Hobbit", "J.R.R. Tolkein", 295)
const newBook1 = new Book("The Lord of the Rings", "J.R.R. Tolkein", 395)
const newBook2 = new Book("The Fellowship of the Ring", "J.R.R. Tolkein", 290)


addToLibrary(newBook);
addToLibrary(newBook1);
addToLibrary(newBook2);

const bookButton = document.getElementById('add_book')

bookButton.addEventListener('click', ()=>{
    document.getElementById('form').style.display = "block"
})

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let addTitle = document.getElementById("title").value
    let addAuthor = document.getElementById("author").value
    let addPages = document.getElementById("pages").value
    let addReadStatus = document.getElementById("read").value

    const addNewBook = new Book(addTitle, addAuthor, addPages)
    addToLibrary(addNewBook);
    console.log(userLibrary)
    
    const bookCard = document.createElement('div')
    bookCard.innerHTML= `
    <div>
        <p>${addNewBook.title}</p>
        <p>${addNewBook.author}</p>
        <p>${addNewBook.pages}</p>
        <p>${addNewBook.info()}</p>
    </div>
    `
    document.body.append(bookCard)
    form.reset();
})

userLibrary.forEach((book)=>{
});

