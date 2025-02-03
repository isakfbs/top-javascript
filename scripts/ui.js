export class UI {
  constructor() {
    this.container = document.getElementById("book-container");
  }

  renderBooks(myLibrary) {
    console.log("Books array:", myLibrary); // Debugging: log the array

    if (!Array.isArray(myLibrary)) {
      console.error("Books is not an array or is undefined");
      return;
    }
    this.clearBooks();
    myLibrary.forEach((book, index) =>
      this.createBookCard(book, index, myLibrary)
    );
  }

  clearBooks() {
    this.container.innerHTML = "";
  }

  createBookCard(book, index, myLibrary) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = ` 
            <img class="card-image" src="${book.coverImage}" alt="${
      book.title
    }">
            <h3 class="card-title">${book.title}</h3>
            <p class="card-author">Author: ${book.author}</p>
            <p class="card-pages">Pages: ${book.pages}</p>
            <p class="card-read-status ${book.wasRead ? "read" : ""}">
                Status: ${book.wasRead ? "Read" : "Not Read"}
            </p>
        <button class="toggle-read" data-index="${index}">
            Mark as ${book.wasRead ? "Not Read" : "Read"}
        </button>
        <button class="delete-book" data-index="${index}">Delete</button>
  `;
    this.container.appendChild(card);
    this.attachCardEventListeners(card, index, myLibrary);
  }

  attachCardEventListeners(card, index, myLibrary) {
    const toggleButton = card.querySelector(".toggle-read");
    const deleteButton = card.querySelector(".delete-book");

    toggleButton.addEventListener("click", () =>
      this.toggleReadStatus(index, myLibrary)
    );
    deleteButton.addEventListener("click", () =>
      this.deleteBook(index, myLibrary)
    );
  }

  toggleReadStatus(index, myLibrary) {
    console.log(`Toggling read status for book at index: ${index}`);
    myLibrary[index].wasRead = !myLibrary[index].wasRead;
    this.renderBooks(myLibrary);
  }

  deleteBook(index, myLibrary) {
    myLibrary.splice(index, 1); // Remove the book at the given index
    this.renderBooks(myLibrary); // Re-render the books list
  }
}
