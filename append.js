const fs = require('fs')
var content = " This message is added by you \n\n";

fs.appendFile('./files/append.txt', content, function(err){
    if (err) {
        console.log("error");
        console.log(err);
    } else {
        console.log("content was appended");
    }
});