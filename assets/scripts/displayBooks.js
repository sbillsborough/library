import { myLibrary } from "./library.js"; // Import the library array

// Function to display books on the page
export function displayOnPage() {
  // Clear any existing content but keep the modal intact
  const bookContainer = document.querySelector("p");
  if (bookContainer) {
    bookContainer.innerHTML = "";
  }
  // Add the modal back into the main content
  const modal = document.querySelector(".modal");
  document.body.appendChild(modal);

  // Iterate through the library and display each book
  myLibrary.forEach((book) => {
    const bookInfo = document.createElement("p");
    bookInfo.innerText = `Title: ${book.title}, Author: ${book.author}, Status: ${book.read}`;
    document.body.appendChild(bookInfo);
  });
}
