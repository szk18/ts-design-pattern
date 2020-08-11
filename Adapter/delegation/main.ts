import { Print } from "./Print";
import { PrintBanner } from "./PrintBanner";

const p: Print = new PrintBanner("hello");
p.printWeak();
p.printStrong();
