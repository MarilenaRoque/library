let myLibrary = [];

//Getting the stored Books
if(localStorage.getItem('library')) {
    myLibrary = JSON.parse( localStorage.getItem('library') );
}

//Displaying Books
showBooks()


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
  localStorage.setItem('library', JSON.stringify(myLibrary));
  document.location.reload();
}

// Function to Display the Books
function showBooks() {
    myLibrary.forEach(displayBook);
}

// Function to create the table rows
function displayBook(book, index) {
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

    //Creating Remove button
    let removeTd = document.createElement('td');
    newTr.appendChild(removeTd);
    onclinkText = "removeBook(" + index + ")";
    createButton(onclinkText, removeTd)

    // Creating Change Status Button
    


    // IMPLEMENT BUTTON

}

// Function to create the row itens
function createTd(text, tr) {
     let newTd = document.createElement('td');
     newTd.textContent = text;
     tr.appendChild(newTd);
}


// Display and Hide 'New Book' Form
function displayForm() {
    const dform = document.getElementById('formBook');
    dform.classList.toggle("d-none");
}

// Function to Remove Book

function removeBook(index) {
    myLibrary.splice(index, 1);
    localStorage.setItem('library', JSON.stringify(myLibrary));
    document.location.reload();
}

//create Button
function createButton(onclickText, removeTd) {
    const newButton = document.createElement('button');
    newButton.textContent = "Remove";
    newButton.setAttribute('onclick', onclickText);
    removeTd.appendChild(newButton);
}

// Trigged when change status button on click

function changeReadStatus(index) {
   (myLibrary[index].read) ? myLibrary[index].read = false : myLibrary[index].read = true
   localStorage.setItem('library', JSON.stringify(myLibrary));
    document.location.reload();
}




