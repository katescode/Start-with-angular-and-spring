import {Hello} from './Hello';
import { World } from './World';

let hello = new Hello("Hello");
let world = new World("world");
console.log(`${hello.seyTheWord()}${hello.afterWord()}${world.seyTheWord()}${world.afterWord()}`);

