const {argv} = require('node:process');

argv.forEach((val, index) => {
    switch (index) {
        case 2:
            console.log("Argument found");
            break;

        case 3:
            console.log("Arguments found");
            break;

    
        default:
            console.log("No Argument");
            break;
    }
    
});