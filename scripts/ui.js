const container = document.getElementById("book-container");

export function renderBooks(myLibrary) {
  myLibrary.forEach((book, index) => {
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
`;
    container.appendChild(card);
  });

  const toggleButtons = document.querySelectorAll(".toggle-read");
  console.log(toggleButtons);
  // biome-ignore lint/complexity/noForEach: <explanation>
  toggleButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const bookIndex = e.target.dataset.index;
      console.log(bookIndex);
      myLibrary[bookIndex].wasRead = !myLibrary[bookIndex].wasRead;
      clearBooks();
      renderBooks(myLibrary); // Re-render the updated book list
    });
  });
}

export function clearBooks() {
  container.innerHTML = "";
}
