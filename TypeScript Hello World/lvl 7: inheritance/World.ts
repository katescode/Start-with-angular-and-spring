export class ThisIsWorld{
    private world : string;
 
    constructor (newWorld: string){
        this.world = newWorld;
    }
 
    getWorld(){
        return this.world;
    }
 }