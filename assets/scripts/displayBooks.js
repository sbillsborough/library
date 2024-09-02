import { myLibrary } from "./library.js"; // Import the library array

// Function to display books on the page
export function displayOnPage() {
  // Clear any existing content but keep the modal intact
  const bookContainer = document.querySelector(".book-container");

  if (bookContainer) {
    // Clear existing content within the container
    bookContainer.innerHTML = "";
  } else {
    console.error("Book container not found!");
    return; // Exit the function if the container is not found
  }

  // Iterate through the library and display each book
  myLibrary.forEach((book) => {
    const bookInfo = document.createElement("p");
    bookInfo.innerText = `Title: ${book.title}, Author: ${book.author}, Status: ${book.read}`;
    bookContainer.appendChild(bookInfo);
  });
}
