const {argv} = require('node:process');
let args = argv.slice(2)

if(args.length === 0){
    console.log("No Argument");
}else if(args.length === 1){
    console.log("Argument found");
}else{
    console.log("Arguments found");
}
