import { myLibrary } from "./library.js"; // Import the library array

// Function to display books on the page
export function displayOnPage() {
  const bookContainer = document.querySelector(".book-container");

  // Clears the book container HTML to prevent duplicate entries
  bookContainer.innerHTML = "";

  // Iterate through the library and display each book
  myLibrary.forEach((book, index) => {
    const bookInfo = document.createElement("p");
    bookInfo.innerText = `Title: ${book.title}, Author: ${book.author}, Status: ${book.read}`;

    // Append book information to the container
    bookContainer.appendChild(bookInfo);

    // Create a delete button for each book
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Book";

    // Add event listener for delete button to remove the book from the library
    deleteButton.addEventListener("click", () => {
      // Remove the book from the library array
      myLibrary.splice(index, 1);

      // Update the display to reflect the removal
      displayOnPage();
    });

    // Append the delete button to the book info element
    bookInfo.appendChild(deleteButton);
  });
}
