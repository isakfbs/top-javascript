const container = document.getElementById("book-container");

export function renderBooks(myLibrary) {
  console.log("Books array:", myLibrary); // Debugging: log the array

  if (!Array.isArray(myLibrary)) {
    console.error("Books is not an array or is undefined");
    return;
  }
  clearBooks();
  myLibrary.forEach((book, index) => createBookCard(book, index, myLibrary));
}

export function clearBooks() {
  container.innerHTML = "";
}

function createBookCard(book, index, myLibrary) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = ` 
          <img class="card-image" src="${book.coverImage}" alt="${book.title}">
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
  container.appendChild(card);
  attachCardEventListeners(card, index, myLibrary);
}

function attachCardEventListeners(card, index, myLibrary) {
  const toggleButton = card.querySelector(".toggle-read");
  const deleteButton = card.querySelector(".delete-book");

  toggleButton.addEventListener("click", () =>
    toggleReadStatus(index, myLibrary)
  );
  deleteButton.addEventListener("click", () => deleteBook(index, myLibrary));
}

function toggleReadStatus(index, myLibrary) {
  console.log(`Toggling read status for book at index: ${index}`);
  myLibrary[index].wasRead = !myLibrary[index].wasRead;
  renderBooks(myLibrary);
}

function deleteBook(index, myLibrary) {
  myLibrary.splice(index, 1); // Remove the book at the given index
  renderBooks(myLibrary); // Re-render the books list
}
