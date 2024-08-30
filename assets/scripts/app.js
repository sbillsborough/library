import { Book, addBookToLibrary, myLibrary } from "./library.js";
import { displayModal } from "./modal.js";

// Function to display books on the page
function displayOnPage() {
  // Clear any existing content
  document.body.innerHTML = "";

  // Add the "Add Book" button back after clearing content
  const addBookButton = document.createElement("button");
  addBookButton.className = "add-book";
  addBookButton.innerText = "Add Book";
  addBookButton.addEventListener("click", displayModal);
  document.body.appendChild(addBookButton);

  // Iterate through the library and display each book
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookInfo = document.createElement("p");
    bookInfo.innerText = `Title: ${book.title}, Author: ${book.author}`;
    document.body.appendChild(bookInfo);
  }
}

displayOnPage();

const addBook = document.querySelector(".add-book");
addBook.addEventListener("click", displayModal);

// add a button that displays a form/modal to add a new book
// add new book on the form/modal creates/appends the new book to the html element
