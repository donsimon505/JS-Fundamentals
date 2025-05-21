const {argv} = require('node:process');
let args = argv.slice(2);

let numArg = parseInt(args);

if (isNaN(numArg)){
    console.log('Not a number')
} else{
    console.log('My number : ' + numArg);
}