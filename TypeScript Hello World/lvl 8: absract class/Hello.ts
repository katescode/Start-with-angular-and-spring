import {SomeWord} from './Abstract word';

export class Hello extends SomeWord{
    
    constructor(theWord:string)
    {
        super(theWord);
    }
    afterWord(){return " "}

}