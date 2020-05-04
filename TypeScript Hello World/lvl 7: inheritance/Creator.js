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
var parent_1 = require("./parent");
var World_1 = require("./World");
var ThisIsMessage = /** @class */ (function (_super) {
    __extends(ThisIsMessage, _super);
    function ThisIsMessage(hello, _world) {
        var _this = _super.call(this, hello) || this;
        _this._world = _world;
        return _this;
    }
    ThisIsMessage.prototype.createMassege = function () {
        var newWorld = new World_1.ThisIsWorld(this._world);
        this.message = _super.prototype.getHello.call(this) + " " + newWorld.getWorld() + "!";
    };
    ThisIsMessage.prototype.getMessage = function () {
        this.createMassege();
        return this.message;
    };
    return ThisIsMessage;
}(parent_1.ThisIsHello));
exports.ThisIsMessage = ThisIsMessage;
