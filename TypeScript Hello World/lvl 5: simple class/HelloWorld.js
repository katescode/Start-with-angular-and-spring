var Message = /** @class */ (function () {
    function Message(newHello, newWorld) {
        this.hello = newHello;
        this.world = newWorld;
    }
    Message.prototype.getHello = function () {
        return this.hello;
    };
    Message.prototype.getWorld = function () {
        return this.world;
    };
    return Message;
}());
var message = new Message("Hello", "world");
console.log(message.getHello() + " " + message.getWorld() + "!");
