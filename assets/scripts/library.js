// Exporting Book constructor function
export function Book(title, author, read) {
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
  modal.style.display = "block"; // Show the modal
}
