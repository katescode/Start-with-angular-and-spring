import { ThisIsHello } from "./parent";
import { ThisIsWorld } from "./World";

export class ThisIsMessage extends ThisIsHello{
    private message: string;

    constructor(hello:string,private _world:string){
        super(hello);
    }

    protected createMassege(){
        let newWorld = new ThisIsWorld(this._world);
        this.message = `${super.getHello()} ${newWorld.getWorld()}!`;
    }

    getMessage(){
        this.createMassege();
        return this.message;
    }
}



