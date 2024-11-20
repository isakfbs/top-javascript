//Constructor for making "Book" objects
const container = document.getElementById("book-container");
const modal = document.getElementById("modal");
const newBookBtn = document.getElementById("new-book-btn");
const closeModalBtn = document.getElementById("close-modal");
const newBookForm = document.getElementById("new-book-form");
const myLibrary = [];

function Book(title, author, pages, imagePath) {
  this.title = title;
  this.coverImage = imagePath;
  this.author = author;
  this.pages = pages;
  this.wasRead = false;
  this.info = () => {
    return `${title} by ${author}, ${pages} pages,
    ${this.wasRead ? "alredy read" : "not read yet"}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

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
const book4 = new Book(
  "The Return of the King",
  "J.R.R. Tolkien",
  "432",
  "https://m.media-amazon.com/images/I/51VYSm49SUL._SY445_SX342_.jpg"
);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

function displayBooks() {
  container.innerHTML = ""; // Clear the container before re-rendering
  // biome-ignore lint/complexity/noForEach: <explanation>
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "8px";
    card.style.padding = "1rem";
    card.style.width = "150px";
    card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    card.style.textAlign = "center";

    // Add book cover
    const img = document.createElement("img");
    img.src = book.coverImage;
    img.alt = book.title;
    img.style.width = "100%";
    img.style.borderRadius = "4px";
    card.appendChild(img);

    // Add book title
    const title = document.createElement("h3");
    title.textContent = book.title;
    title.style.fontSize = "1.1rem";
    title.style.margin = "0.5rem 0";
    card.appendChild(title);

    // Add book author
    const author = document.createElement("p");
    author.textContent = `by ${book.author}`;
    author.style.color = "#555";
    author.style.fontSize = "0.9rem";
    card.appendChild(author);

    container.appendChild(card);
  });
}

displayBooks();

//Show Modal
newBookBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Handle form submission

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent default form submission

  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  //Add the new book to the books array
  myLibrary.push(new Book(title, author, pages, image));

  // Hide the form
  modal.style.display = "none";

  //Reset the form
  newBookForm.reset();

  displayBooks();
});
