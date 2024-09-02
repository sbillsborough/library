import { addBookToLibrary, displayModal } from "./library.js";
import { displayOnPage } from "./displayBooks.js";

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
