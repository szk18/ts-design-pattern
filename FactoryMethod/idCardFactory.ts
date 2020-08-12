import { Factory } from "./framework/factory";
import { Product } from "./framework/product";
import { IdCard } from "./idCard";

export class IdCardFactory extends Factory {
  private owners: string[];

  constructor() {
    super();
    this.owners = [];
  }

  protected createProduct(owner: string): Product {
    console.log(`createProduct`);
    return new IdCard(owner);
  }
  protected registerProduct(product: Product): void {
    console.log(`registerProduct`);
    // ?
    const prod = product as IdCard;
    this.owners.push(prod.getOwner());
  }
  getOwners(): string[] {
    return this.owners;
  }
}
