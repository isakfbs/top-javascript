import { showModal, closeModal } from "./modal.js";
import { renderBooks, clearBooks } from "./ui.js";
import { Book } from "./book.js";

const newBookForm = document.getElementById("new-book-form");
const newBookBtn = document.getElementById("new-book-btn");
const myLibrary = [];

newBookBtn.addEventListener("click", showModal);

// Handle form submission
newBookForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent default form submission

  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  //Add the new book to the books array
  myLibrary.push(new Book(title, author, pages, image));

  //Reset the form
  newBookForm.reset();
  clearBooks();
  renderBooks(myLibrary);
  closeModal();
});

const book1 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "322",
  "https://m.media-amazon.com/images/I/418jD+Rsd5L._SY445_SX342_.jpg"
);
const book2 = new Book(
  "The Fellowship of the Ring",
  "J.R.R. Tolkien",
  "544",
  "https://m.media-amazon.com/images/I/51HNV1J3UyL._SY445_SX342_.jpg"
);
const book3 = new Book(
  "The Two Towers",
  "J.R.R. Tolkien",
  "448",
  "https://m.media-amazon.com/images/I/41sMe18lj+L._SY445_SX342_.jpg"
);
book3.wasRead = true;
const book4 = new Book(
  "The Return of the King",
  "J.R.R. Tolkien",
  "432",
  "https://m.media-amazon.com/images/I/51VYSm49SUL._SY445_SX342_.jpg"
);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

renderBooks(myLibrary);
