import { Book, addBookToLibrary, myLibrary } from "./library.js";

// Create initial book objects and add them to the library
const book1 = new Book("book1", "Scott");
const book2 = new Book("book2", "Steve");

// Add initial books to the library
myLibrary.push(book1, book2);

// Add another book to the library
addBookToLibrary("book3", "baz");

// Function to display books on the page
function displayOnPage() {
  // Clear any existing content
  document.body.innerHTML = "";

  // Iterate through the library and display each book
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookInfo = document.createElement("p");
    bookInfo.innerText = `Title: ${book.title}, Author: ${book.author}`;
    document.body.appendChild(bookInfo);
  }
}

displayOnPage();
