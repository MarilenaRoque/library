// eslint-disable-next-line import/extensions
import * as logic from './logic.js';

import {
  addBookToLibrary,
  // eslint-disable-next-line import/extensions
} from './logic.js';

let myLibrary = [];
myLibrary = logic.pageInit();

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
  logic.reloadPage();
}

// create Button
function createButton(idText, removeTd, text = 'Remove') {
  const newButton = document.createElement('button');
  newButton.textContent = text;
  newButton.setAttribute('id', idText);
  removeTd.appendChild(newButton);
}

// Trigged when change status button on click

function changeReadStatus(index) { // eslint-disable-line no-unused-vars
  myLibrary[index].read = !(myLibrary[index].read);
  logic.reloadPage();
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
  let idText = `remove${index}`;
  createButton(idText, removeTd);

  // // Creating Change Status Button
  const statusTd = document.createElement('td');
  newTr.appendChild(statusTd);
  const textReadButton = readButtonText(index);
  idText = `changeStatus${index}`;
  createButton(idText, statusTd, textReadButton);
}

// Function to Display the Books
function showBooks() {
  myLibrary.forEach(displayBook);
}


// Displaying Books
showBooks();

// Set Event Listeners to different buttons
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'd-form') {
    displayForm();
  } else if (e.target && e.target.id === 'submit-form') {
    addBookToLibrary();
  } else if (e.target && (e.target.id).includes('remove')) {
    const buttonIndex = (e.target.id).substr(e.target.id.length - 1);
    removeBook(buttonIndex);
  } else if (e.target && (e.target.id).includes('changeStatus')) {
    const buttonIndex = (e.target.id).substr(e.target.id.length - 1);
    changeReadStatus(buttonIndex);
  }
});
