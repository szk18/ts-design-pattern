import { AbstractDisplay } from "./abstractDisplay";
export class StringDisplay extends AbstractDisplay {
  private str: string;
  private width: number;

  constructor(str: string) {
    super();
    this.str = str;
    this.width = Buffer.byteLength(str);
  }
  open(): void {
    this.printLine();
  }
  print(): void {
    console.log(`|${this.str}|`);
  }
  close(): void {
    this.printLine();
  }
  private printLine(): void {
    let line = "+";
    for (let i = 0; i < this.width; i++) {
      line += "-";
    }
    line += "+";
    console.log(line);
  }
}
