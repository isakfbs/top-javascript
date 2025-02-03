import { Modal } from "./modal.js";
import { UI } from "./ui.js";
import { Book } from "./book.js";

export class App {
  constructor() {
    this.myLibrary = [];
    this.modal = new Modal();
    this.ui = new UI();

    this.newBookForm = document.getElementById("new-book-form");
    this.newBookBtn = document.getElementById("new-book-btn");

    this.newBookBtn.addEventListener("click", () => this.modal.showModal());

    this.newBookForm.addEventListener("submit", (e) =>
      this.handleFormSubmit(e)
    );

    this.initializeLibrary();
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    this.myLibrary.push(new Book(title, author, pages, image));

    this.newBookForm.reset();
    this.ui.renderBooks(this.myLibrary);
    this.modal.closeModal();
  }

  initializeLibrary() {
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

    this.myLibrary.push(book1, book2, book3, book4);
    this.ui.renderBooks(this.myLibrary);
  }
}

new App();
