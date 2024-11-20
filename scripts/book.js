//Constructor for making "Book" objects
export function Book(title, author, pages, imagePath) {
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
