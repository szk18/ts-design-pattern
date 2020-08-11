import { Print } from "./print";
import { PrintBanner } from "./printBanner";

const p: Print = new PrintBanner("hello");
p.printWeak();
p.printStrong();
