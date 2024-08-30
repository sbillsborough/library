import { Book, addBookToLibrary, myLibrary, displayModal } from "./library.js";

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set up the "Add Book" button to open the modal
  const addBookButton = document.querySelector(".add-book");
  addBookButton.addEventListener("click", displayModal);

  // Handle form submission to add a new book
  const bookForm = document.querySelector(".bookForm");
  bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form input values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const read = document.getElementById("read").checked ? "Read" : "Not Read";

    // Add the new book to the library
    addBookToLibrary(title, author, read);

    // Update the display with the new book
    displayOnPage();

    // Hide the modal after adding the book
    const modal = document.querySelector(".modal");
    modal.style.display = "none";

    // Reset form fields
    bookForm.reset();
  });

  // Initial display of existing books
  displayOnPage();
});

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
    bookInfo.innerText = `Title: ${book.title}, Author: ${book.author}, Status: ${book.read}`;
    document.body.appendChild(bookInfo);
  }
}
