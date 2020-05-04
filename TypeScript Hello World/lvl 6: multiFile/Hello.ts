export class ThisIsHello{
   private hello : string;

   constructor (newHello: string){
       this.hello = newHello;
   }

   getHello(){
       return this.hello;
   }
}