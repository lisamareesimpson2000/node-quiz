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

var request = [
    'Enter your name:',
    'Enter your favourite place:',
    'Enter your birthday month:'
];
var response = [];

function myRequest(i){
    process.stdout.write(`\n\n  ${request[i]} \n\n`)
    //process.exit();
}

//read input
process.stdin.on('data', function(data){
    response.push(data.toString().trim());
    if (response.length < request.length){
    myRequest(response.length);
    } else {
        process.exit();
    }
    }); 

process.on('exit', function(){
    process.stdout.write(`\n\n Hi ${response[0]}, Plan to visit ${response[1]}, in the month of ${response[2]}  \n\n `)
});
myRequest(0);