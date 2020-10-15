let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  title = document.getElementById('title').value;
  author = document.getElementById('author').value;
  pages =document.getElementById('pages').value;
  read = document.getElementById('read').checked;
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
