const book1 = {
  title: "book1",
  author: "Scott",
};

const book2 = {
  title: "book2",
  author: "Steve",
};

const myLibrary = [book1, book2];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  const newBook = new Book(title, author);
  myLibrary.push(newBook);
}

function displayOnPage() {
  // Clear any existing content
  document.body.innerHTML = "";

  // Iterate through the library and display each book
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookInfo = document.createElement("p");
    bookInfo.innerText = `Title: ${book.title}, Author: ${book.author}`;
    document.body.appendChild(bookInfo);
  }
}

displayOnPage();
