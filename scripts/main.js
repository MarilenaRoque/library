let myLibrary = [];

//Getting Buttons
const dFormBtn = document.getElementById('d-form')
const submitFormBtn = document.getElementById('submit-form')



//Event Listeners for the Buttons
dFormBtn.addEventListener('click', displayForm)
submitFormBtn.addEventListener('click', addBookToLibrary)

// Getting the stored Books
if (localStorage.getItem('library')) {
  myLibrary = JSON.parse(localStorage.getItem('library'));
}

// set function to reload page
function reloadPage() {
  localStorage.setItem('library', JSON.stringify(myLibrary));
  document.location.reload();
}
// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


// Function to get Book info from the form and create a new Book instance
function addBookToLibrary() { // eslint-disable-line no-unused-vars
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  reloadPage();
}


function readButtonText(index) {
  let text = '';
  text = (myLibrary[index].read) ? 'Set as Unread' : 'Set as Read';
  return text;
}
// Function to create the row itens
function createTd(text, tr) {
  const newTd = document.createElement('td');
  newTd.textContent = text;
  tr.appendChild(newTd);
}



// Display and Hide 'New Book' Form
function displayForm() { // eslint-disable-line no-unused-vars
  const dform = document.getElementById('formBook');
  dform.classList.toggle('d-none');
}

// Function to Remove Book

function removeBook(index) { // eslint-disable-line no-unused-vars
  myLibrary.splice(index, 1);
  reloadPage();
}

// create Button
function createButton(onclickText, removeTd, text = 'Remove') {
  const newButton = document.createElement('button');
  newButton.textContent = text;
  newButton.setAttribute('onclick', onclickText);
  removeTd.appendChild(newButton);
}

// Trigged when change status button on click

function changeReadStatus(index) { // eslint-disable-line no-unused-vars
  myLibrary[index].read = !(myLibrary[index].read);
  reloadPage();
}

// Function to create the table rows
function displayBook(book, index) {
  const table = document.getElementById('display-books');
  const newTr = document.createElement('tr');
  table.appendChild(newTr);
  createTd(book.title, newTr);
  createTd(book.author, newTr);
  createTd(book.pages, newTr);
  let status = '';
  if (book.read === false) {
    status = 'Not Read';
  } else {
    status = 'Read';
  }
  createTd(status, newTr);

  // Creating Remove button
  const removeTd = document.createElement('td');
  newTr.appendChild(removeTd);
  let onclinkText = `removeBook(${index})`;
  createButton(onclinkText, removeTd);

  // // Creating Change Status Button
  const statusTd = document.createElement('td');
  newTr.appendChild(statusTd);
  const textReadButton = readButtonText(index);
  onclinkText = `changeReadStatus(${index})`;
  createButton(onclinkText, statusTd, textReadButton);
}

// Function to Display the Books
function showBooks() {
  myLibrary.forEach(displayBook);
}


// Displaying Books
showBooks();
