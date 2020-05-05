"use strict";
exports.__esModule = true;
var Hello_1 = require("./Hello");
var World_1 = require("./World");
var hello = new Hello_1.Hello("Hello");
var world = new World_1.World("world");
//console.log(`${hello.seyTheWord()} ${world.seyTheWord()}!`);
console.log("" + hello.seyTheWord() + hello.afterWord() + world.seyTheWord() + world.afterWord());
