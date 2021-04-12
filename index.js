var readlineSync = require('readline-sync');

//To take User Name as Input.
var userName = readlineSync.question("Please tell us your name..");
console.log("Hi "+ userName.charAt(0).toUpperCase() + userName.slice(1) +", It's very nice to see you here. ");
console.log("");

// Adding the FUntion to check Answer
var score = 0;
var checkAnswer = function(question, answer){

  var userAnswer = readlineSync.question(question);
   if (userAnswer.toUpperCase() == answer){
     console.log("Correct! "+ answer + " is  the Right Answer.");
     score = score+1;
   }else
   {
      console.log("Wrong! "+ answer + " was the Right Answer.");
   }  
   console.log("your score is "+ score +".");
   console.log("*****************************************")
  }