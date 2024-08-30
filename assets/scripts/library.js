// Exporting Book constructor function
export function Book(title, author) {
  this.title = title;
  this.author = author;
  this.read = read;
}

// The library array to store books
export const myLibrary = [];

// Function to add a new book to the library
export function addBookToLibrary(title, author, read) {
  const newBook = new Book(title, author, read);
  myLibrary.push(newBook);
}

// Function to display the modal for adding a new book
export function displayModal() {
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.style.display = "block"; // Show the modal
  } else {
    console.error("Modal element not found");
  }
}
