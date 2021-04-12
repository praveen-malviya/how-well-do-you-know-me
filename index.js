var readlineSync = require('readline-sync');

//To take User Name as Input.
var userName = readlineSync.question("Please tell us your name..");
console.log("Hi "+ userName.charAt(0).toUpperCase() + userName.slice(1) +", It's very nice to see you here. ");