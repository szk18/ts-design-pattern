import { Iterator } from "./iterator";
import { BookShelf } from "./bookShelf";
import { Book } from "./book";

const bookShelf: BookShelf = new BookShelf(3);
bookShelf.appendBook(new Book("Around the world in 10 days"));
bookShelf.appendBook(new Book("Bible"));
bookShelf.appendBook(new Book("Cinderella"));
bookShelf.appendBook(new Book("Daddy-Long-Legs"));

const it: Iterator = bookShelf.iterator();

while (it.hasNext()) {
  const book = it.next();
  console.log(book.getName());
}
