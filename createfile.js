const fs = require('fs');

fs.writeFile('./files/message.txt', 'Hello Node.js', (err) =>{
    if (err) throw err; //shows error
    console.log('The file has been saved!');
});