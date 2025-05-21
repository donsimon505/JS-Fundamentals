const {argv} = require('node:process');
let args = argv.slice(2);

function add(a, b){
    return a + b;
}

let arg1 = parseInt(args[0]);
let arg2 = parseInt(args[1]);

let result = arg1 + arg2;

console.log(result);