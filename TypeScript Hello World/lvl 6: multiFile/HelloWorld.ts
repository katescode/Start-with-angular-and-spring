import { ThisIsHello } from "./Hello";
import { ThisIsWorld } from "./World";

let hello = new ThisIsHello('Hello');
let world = new ThisIsWorld('world');

console.log(`${hello.getHello()} ${world.getWorld()}!`);
