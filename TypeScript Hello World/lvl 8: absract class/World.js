"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Abstract_word_1 = require("./Abstract word");
var World = /** @class */ (function (_super) {
    __extends(World, _super);
    function World(theWord) {
        return _super.call(this, theWord) || this;
    }
    World.prototype.afterWord = function () { return "!"; };
    return World;
}(Abstract_word_1.SomeWord));
exports.World = World;
