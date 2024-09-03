import { myLibrary } from "./library.js"; // Import the library array

// Function to display books on the page
export function displayOnPage() {
  const bookContainer = document.querySelector(".book-container");

  // Clears the book container HTML to prevent duplicate entries
  bookContainer.innerHTML = "";

  // Iterate through the library and display each book
  myLibrary.forEach((book) => {
    const bookInfo = document.createElement("p");
    bookInfo.innerText = `Title: ${book.title}, Author: ${book.author}, Status: ${book.read}`;
    bookContainer.appendChild(bookInfo);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Book";
    bookInfo.appendChild(deleteButton);
  });
}
