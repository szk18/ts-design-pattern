import { Print } from "./print";
import { Banner } from "./banner";
export class PrintBanner extends Print {
  private banner: Banner;
  constructor(str: string) {
    super();
    this.banner = new Banner(str);
  }
  printWeak(): void {
    this.banner.showWithParen();
  }
  printStrong(): void {
    this.banner.showWithAster();
  }
}
