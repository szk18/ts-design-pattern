import { Product } from "./framework/product";

export class IdCard extends Product {
  private owner: string;
  constructor(owner: string) {
    super();
    this.owner = owner;
    console.log(`${owner}のカードを作ります`);
  }
  use(): void {
    console.log(`${this.owner}のカードを使います`);
  }
  getOwner(): string {
    return this.owner;
  }
}
