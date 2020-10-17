// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [];

// set function to reload page
export function reloadPage() {
  localStorage.setItem('library', JSON.stringify(myLibrary));
  document.location.reload();
}

export function pageInit() { // eslint-disable-line no-unused-vars
  // Getting the stored Books
  if (localStorage.getItem('library')) {
    myLibrary = JSON.parse(localStorage.getItem('library'));
  } else {
    myLibrary = [];
  }
  return myLibrary;
}

// Function to get Book info from the form and create a new Book instance
export function addBookToLibrary() { // eslint-disable-line no-unused-vars
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const newBook = new Book(title, author, pages, read);
  if (title && author && pages) {
    myLibrary.push(newBook);
    reloadPage();
  }
}

export {
  Book,
};
