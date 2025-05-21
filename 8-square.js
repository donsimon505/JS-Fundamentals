const {argv} = require('node:process');
let args = argv.slice(2);

let numArg = parseInt(args);

if (!isNaN(numArg)){

    for (let x = 0; x < numArg; x++){
        let row = '';
        for (let y = 0; y < numArg; y++){
            row += 'X';
        }
        console.log(row);
    }

} else {
    console.log('Missing size');
}
