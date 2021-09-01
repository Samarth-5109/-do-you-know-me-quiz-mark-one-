var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name?");
 var score = 0;
 console.log("Welcome! " + userName + " to, Do You Know Samarth quiz :-)");

 function playQuiz(question, answer){
    
    var userAnswer = readlineSync.question(question);

    if(userAnswer === answer){
      console.log("You are right");
      score = score+1;
    }else{
      console.log("You are wrong");
      score = score - 1;
    }
  console.log("Your current score is: " + score);  
 }

 var quizQuestions = [
   
   questionOne = {
     
     question: "Who is my favourite superhero?",
     answer:   "Batman"
   },

   questionTwo = {
     question : "What I like to eat the most?",
     answer : "Lays Magic Masala"
   },

   questionThree ={
     question : "Which 2 Wheeler I own?",
     answer : "Honda aviator"
   }
 ]

 var highScores = [

   score1 = {
     name : "Usha",
     highScore : "3"
   },

   score2 = {
     name : "Sarthak",
     highScore: "2"
   }
 ];

for(var i=0; i<quizQuestions.length; i++){
  
  
  playQuiz(quizQuestions[i].question, quizQuestions[i].answer);
  console.log("----------");
}

console.log( userName + ", your final score is: " + score);
console.log("High Scores are as follow: ")


for(var i=0; i<highScores.length; i++){
  console.log( highScores[i].name + ": " + highScores[i].highScore );
}
console.log("--------");


