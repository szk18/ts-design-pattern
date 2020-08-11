import { Aggregate } from "./aggregate";
import { Iterator } from "./iterator";
import { Book } from "./book";
import { BookShelfIterator } from "./bookShelfIterator";

export class BookShelf implements Aggregate {
  private books: Book[];
  private last: number = 0;

  constructor(maxsize: number) {
    this.books = new Array(maxsize);
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }
  appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }
  getLength(): number {
    return this.last;
  }
  iterator(): Iterator {
    return new BookShelfIterator(this);
  }
}
