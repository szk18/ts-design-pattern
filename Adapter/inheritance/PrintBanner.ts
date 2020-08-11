import { Banner } from "./Banner";
import { Print } from "./Print";

export class PrintBanner extends Banner implements Print {
  constructor(str: string) {
    super(str);
  }
  printWeak(): void {
    this.showWithParen();
  }
  printStrong(): void {
    this.showWithAster();
  }
}
