export abstract class SomeWord{
    theWord : string;

    constructor(theWord: string) {
        this.theWord = theWord;
    }

    abstract afterWord();


    seyTheWord(){
        return this.theWord;
    }
}