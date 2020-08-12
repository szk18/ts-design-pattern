import { Factory } from "./framework/factory";
import { IdCardFactory } from "./idCardFactory";
import { Product } from "./framework/product";

const factory: Factory = new IdCardFactory();
const card1: Product = factory.create("yuki");
const card2: Product = factory.create("tomu");
const card3: Product = factory.create("sato");

card1.use();
card2.use();
card3.use();

// getOwnersってどう使うんだろ
// factoryをFactory型で宣言しちゃったら呼び出せない
// factory.getOwners().map((owner) => console.log(owner));
