import { AbstractDisplay } from "./abstractDisplay";

export class CharDisplay extends AbstractDisplay {
  private ch: string;
  constructor(ch: string) {
    super();
    this.ch = ch;
  }
  open(): void {
    process.stdout.write("<<");
  }
  print(): void {
    process.stdout.write(this.ch);
  }
  close(): void {
    console.log(">>");
  }
}
