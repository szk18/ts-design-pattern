import { Print } from "./Print";
import { Banner } from "./Banner";
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
