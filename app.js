var readlineSync = require("readline-sync");
var score=0
var userName = readlineSync.question("Enter your name: ")
console.log("Hey! "+userName +" are you ready to play DO YOU KNOW Maahi?")
console.log("-------------------------")

  console.log("You Entered the game")

var questions =[{
  question: "What is Maahi's real name ? ",
  answer:"Mohini"
},{
question: "How old she is? ",
answer:"20"

},
{
  question:"What is her favourite color ? ",
  answer:"Black"
}
]

  function playQuiz(question,answer){
    var userAnswer= readlineSync.question(question);
    if (userAnswer.toUpperCase() ===answer.toUpperCase() ){
    console.log("Your answer is " +userAnswer +" and you are right !")
    score= score+1;
    
    }
    else{
      console.log("Your answer is " + userAnswer+ " and you are wrong !")
      score =score-1;
      
    }
 console.log("Total Score: "+ score)
   console.log("--------------------")

  }



for(var i=0;i<questions.length;i++){
  currentQuestion =questions[i]
  playQuiz(currentQuestion.question,currentQuestion.answer)
}
