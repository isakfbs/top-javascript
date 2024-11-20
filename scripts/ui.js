const container = document.getElementById("book-container");

export function renderBooks(myLibrary) {
  // biome-ignore lint/complexity/noForEach: <explanation>
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = ` 
            <img class="card-image" src="${book.coverImage}" alt="${book.title}">
            <h3 class="card-title">${book.title}</h3>
            <p class="card-author">Author: ${book.author}</p>
            <p class="card-pages">Pages: ${book.pages}</p>`;
    container.appendChild(card);
  });
}

export function clearBooks() {
  container.innerHTML = "";
}
