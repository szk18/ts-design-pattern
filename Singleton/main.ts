import { Singleton } from "./singleton";

console.log("start");
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

if (obj1 == obj2) console.log("obj1 == obj2");
else console.log("obj1 != obj2");

console.log("end");
