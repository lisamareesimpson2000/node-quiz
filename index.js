// console.log("Hello");

// var name="Yoobee";
// console.log("Hello " + "Yoobee");
//ES5 and ES6. let and const are in here. Read w3schools JS versions, it woll help with using react
//ES5, ES6 - template string {} 

//process.stdout.write("Hello Yoobee\n\n");

//process.stdout.write("What is your name?\n\n");
/* process.stdin.on('data', function(data){
    process.stdout.write(`Hello {$data}`);
    process.exit(); //stop running the data listener
}); */
//console.log (__dirname); //to display the folder /directory name
//console.log(__filename); //to display the file name
const fs = require('fs');

var request = [
    'Enter your name:',
    'Enter your favourite place:',
    'Enter your birthday month:'
]; //This is the array of questions I want to ask
var response = [];//I am going to collect the user response here

function myRequest(i){
    process.stdout.write(`\n\n  ${request[i]} \n\n`) //this is a function to write the question I want to ask
    //process.exit();
}

//read input
process.stdin.on('data', function(data){
    response.push(data.toString().trim()); //making the response from the user into a string and trim the space off it
    if (response.length < request.length){
    myRequest(response.length);
    } else {
        process.exit();
    }
    }); 




process.on('exit', function(){
    var sentence = (`\n\n Hi ${response[0]}, Plan to visit ${response[1]}, in the month of ${response[2]}  \n\n `); //backtick, template string
    process.stdout.write(sentence);
    
//by putting this at the top const fs = require('fs'); it will display the sentence from request and response in the message.txt file.
//if not it will throw error
    fs.appendFileSync('./files/message.txt', sentence, (err) => { 
        if (err) throw err;
            console.log('The file has been created!');
      });

    // process.stdout.write(`\n\n Hi ${response[0]}, Plan to visit ${response[1]}, in the month of ${response[2]}  \n\n `)
});
myRequest(0);