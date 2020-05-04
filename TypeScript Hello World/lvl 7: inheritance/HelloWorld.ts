import {ThisIsMessage} from "./Creator";

let theMessage = new ThisIsMessage('Hello', 'world');

console.log(`${theMessage.getMessage()}`);