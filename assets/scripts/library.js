// Exporting Book constructor function
export function Book(title, author) {
  this.title = title;
  this.author = author;
}

// The library array to store books
export const myLibrary = [];

// Function to add a new book to the library
export function addBookToLibrary(title, author) {
  const newBook = new Book(title, author);
  myLibrary.push(newBook);
}
