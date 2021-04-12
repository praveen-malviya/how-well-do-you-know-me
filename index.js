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

  //Question bank for the Function
  var questionOne = {
    question : "Where do i live? ", 
    answer : "BHOPAL"
  }
  var questionTwo = {
    question : "Which Is My Favourite Animation Movie? ", 
    answer : "KUNG FU PANDA"
  }
  var questionThree = {
    question : "Which Is My Favourite TV Series? ", 
    answer : "HOW I MET YOUR MOTHER"
  }
   var questionFour = {
    question : "Who is my Favourite SuperHero? ", 
    answer : "IRON MAN"
  }

  var questionFive = {
    question : "What is my Favourite Dish? ", 
    answer : "ALOO PARATHA"
  }

  var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

  //Adding HighScore Array
  var highScores = [
    {
      name : "Shreya",
      score : "5"
    },
    {
      name : "Sumit",
      score : "4"
    }
  ];

  //Creating function to Automatically play Questions from QuestionBank.
  if(readlineSync.keyInYN("Would you like to play a little game called HOW WELL DO YOU KNOW ME ? ")){
    for(i=0; i<questions.length; i++){
      checkAnswer(questions[i].question , questions[i].answer);
    }
    console.log("your Final score is ", score, ".");
    console.log("Highscores:-");
    for (i=0; i<highScores.length; i++){
      console.log(highScores[i].name + " : " + highScores[i].score)
    }
  console.log("*****************************************")
    console.log("Thanks for playing. if you crossed any of the high-Scores please send screenshot will update here");
  
  }else{
    console.log("No Problem see you soon! ");
  }


  var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
