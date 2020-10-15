let myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to get Book info from the form and create a new Book instance
function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages =document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  
  showBooks();
}

// Function to Display the Books
function showBooks() {
    console.log(myLibrary);
    myLibrary.forEach(displayBook);
}

function displayBook(book) {
    const table = document.getElementById('display-books') 
    let newTr = document.createElement('tr');
    table.appendChild(newTr);
    createTd(book.title, newTr)
    createTd(book.author, newTr)
    createTd(book.pages, newTr)
    let status = "";
    if (book.read === false) {
        status = "Not Read";
    } else {
        status = "Read";
    }
    createTd(status, newTr);
}
function createTd(text, tr) {
     let newTd = document.createElement('td');
     newTd.textContent = text;
     tr.appendChild(newTd);
}



