const helperfuncs = require('./Useful_JS_Functions.js')

function pigIt(str){
    let strary = str.split(" ");
    let newstr = [];
    let punctuations = ["?", "!", ".", ","]

    for (let i = 0; i < strary.length; i++){

        if (punctuations.includes(strary[i]) == false){
            let word = strary[i];
            let pigged = word.slice(1) + word[0] + "ay";
            newstr[i] = pigged;
        }
        else if (punctuations.includes(strary[i]) == true){
            newstr[i] = strary[i];
        }
    }

    return newstr.join(" ");
}

const a = new helperfuncs()
a.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay');
a. assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay');
console.log(pigIt("massive horse cock throbbing inside"));