"use strict";
exports.__esModule = true;
var SomeWord = /** @class */ (function () {
    function SomeWord(theWord) {
        this.theWord = theWord;
    }
    //abstract addWord();
    /* setTheWord(_newWord:string){
        this.theWord = _newWord;
     }*/
    SomeWord.prototype.seyTheWord = function () {
        return this.theWord;
    };
    return SomeWord;
}());
exports.SomeWord = SomeWord;
