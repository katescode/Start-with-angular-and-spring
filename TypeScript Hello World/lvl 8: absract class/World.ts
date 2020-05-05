import {SomeWord} from './Abstract word';

export class World extends SomeWord{
    
    constructor(theWord:string)
    {
        super(theWord);
    }
    afterWord(){return "!"}

}