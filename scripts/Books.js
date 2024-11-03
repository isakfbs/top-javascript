//Constructor for making "Book" objects

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.wasRead = true;
  this.info = () => {
    return `${title} by ${author}, ${pages} pages,
    ${this.wasRead ? "alredy read" : "not read yet"}`;
  };
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295");

console.log(book1.info());
