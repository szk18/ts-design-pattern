import { Product } from "./product";

export class Manager {
  private showcase: { [key: string]: Product } = {};
  register(name: string, product: Product): void {
    this.showcase[name] = product;
  }
  create(protoname: string): Product {
    const p = this.showcase[protoname];
    return p.createClone();
  }
}
