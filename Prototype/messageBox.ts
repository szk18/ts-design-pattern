import { Product } from "./product";

export class MessageBox implements Product {
  private decochar: string;
  constructor(decochar: string) {
    this.decochar = decochar;
  }
  use(s: string): void {
    const length = Buffer.byteLength(s);
    let ast: string = "";
    for (let i = 0; i < length; i++) {
      ast += this.decochar;
    }
    console.log(ast);
    console.log(`${this.decochar} ${s} ${this.decochar}`);
    console.log(ast);
  }
  createClone(): Product {
    const p: Product = null;
    try {
      // p = (Product)clone()
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
    return p;
  }
}
