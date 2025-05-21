const {argv} = require('node:process');
let args = argv.slice(2);

let numArg = parseInt(args);

for (let x = 0; x < numArg; x++){

    if (!isNaN(numArg)){
        console.log('C is fun');
    } else {
        console.log('Missing number of occurences');
    }

}
