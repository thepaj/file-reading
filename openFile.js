var fs = require('fs');

// GET ALL THE WORDS FROM THE FILE AND PUT THEM INTO AN ARRAY
var array = fs.readFileSync('my.txt').toString().split("\n");

// REMOVED WORDS STARTING WITH CAPITAL LETTERS
for (let i = 0; i < array.length; i++) {
    let letter = array[i].charAt(0);
    if(letter == letter.toUpperCase()) {
        array.splice(i, 1);
        i--
    }
}

let wordArray = [];

// CREATES AN ARRAY WITH ONLY 5 CHARACTER WORDS
for(let i = 0; i < array.length; i++) {
    if(array[i].length !== 5) {
        array.splice(i, 1);
        i--
    }
}

for(let i = 0; i < array.length; i++) {
    if(array[i].includes("'")) {
        array.splice(i, 1)
        i--
    }
}

console.log(array)
