const {argv} = require('node:process');
let args = argv.slice(2);

function factorial(n){

    if (isNaN(n) || n <= 0){
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }

}

const num = parseInt(args[0]);

const result = factorial(num);

console.log(result);