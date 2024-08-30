import { myLibrary } from "./library.js"; // Import the library array
import { displayModal } from "./library.js"; // Import the modal display function

// Function to display books on the page
export function displayOnPage() {
  // Clear any existing content
  document.body.innerHTML = "";

  // Add the "Add Book" button back after clearing content
  const addBookButton = document.createElement("button");
  addBookButton.className = "add-book";
  addBookButton.innerText = "Add Book";
  addBookButton.addEventListener("click", displayModal);
  document.body.appendChild(addBookButton);

  // Add the modal back into the main content
  const modal = document.querySelector(".modal");
  if (modal) {
    document.body.appendChild(modal);
  }

  // Iterate through the library and display each book
  myLibrary.forEach((book) => {
    const bookInfo = document.createElement("p");
    bookInfo.innerText = `Title: ${book.title}, Author: ${book.author}, Status: ${book.read}`;
    document.body.appendChild(bookInfo);
  });
}
