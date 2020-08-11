import { Iterator } from "./Iterator";
import { BookShelf } from "./BookShelf";
import { Book } from "./Book";

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
