class Message{
    private hello : string;
    private world : string;

    private myPassword: string;

    constructor(newHello: string, newWorld: string){
        this.hello = newHello;
        this.world = newWorld;
    }

    getHello(){
        return this.hello;
    }
    getWorld(){
        return this.world;
    }
}

let message = new Message("Hello","world");

console.log(`${message.getHello()} ${message.getWorld()}!`);
