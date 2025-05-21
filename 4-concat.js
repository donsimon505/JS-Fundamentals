const {argv} = require('node:process');
let args = argv.slice(2);

const firstArgument = args[0];
const secondArgument = args[1];

console.log(firstArgument + " is " + secondArgument);