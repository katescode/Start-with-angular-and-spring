export class ThisIsHello{
    private hello : string;
 
    constructor (newHello: string){
        this.hello = newHello;
    }
 
    protected getHello(){
        return this.hello;
    }
 }