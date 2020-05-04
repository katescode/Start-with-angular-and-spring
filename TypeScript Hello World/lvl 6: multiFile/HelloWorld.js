"use strict";
exports.__esModule = true;
var Hello_1 = require("./Hello");
var World_1 = require("./World");
var hello = new Hello_1.ThisIsHello('Hello');
var world = new World_1.ThisIsWorld('world');
console.log(hello.getHello() + " " + world.getWorld() + "!");
