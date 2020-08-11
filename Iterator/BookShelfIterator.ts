import { Iterator } from "./iterator";
import { BookShelf } from "./bookShelf";
import { Book } from "./book";

export class BookShelfIterator implements Iterator {
  private index: number;
  private bookShelf: BookShelf;

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }
  hasNext(): boolean {
    return this.index < this.bookShelf.getLength() ? true : false;
  }
  next() {
    const book: Book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
