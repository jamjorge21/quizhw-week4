var begin= document.querySelector (".start-btn");
var question= document.querySelector ("#questions");
var answers= document.querySelector ("#answers");
var choiceA= document.querySelector (".a");
var choiceB= document.querySelector (".b");
var choiceC= document.querySelector (".c");
var choiceD= document.querySelector (".d");
var timer= document.querySelector ("#timer");
var score= document.querySelector ("#score");
var finishBtn= document.querySelector (".finish-btn");


let questions = [
    {
    question:"What does HTML stand for?",
    choiceA:"A) Helix Time Module language",
    choiceB:"B) Helping Text Manual Language",
    choiceC:"C) Hyper Text Markup Language",
    choiceD:"D) Honer Type Madeup Language",
    correctAnsw:"c"

},{
    question:"What does Javascript stand for?",
    choiceA:"A)  is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system",
    choiceB:"B)  is a computer language for laying out and structuring web pages",
    choiceC:"C) is the set of markup symbols or codes inserted into a file intended for display on the Internet.;",
    choiceD:"D) an object-oriented computer programming language commonly used to create interactive effects within web browsers",
    correctAnsw:"d"

    
},{
    question:"What does CSS stand for?",
    choiceA:"A) Cant Stand Success",
    choiceB:"B) Cascading Style Sheets",
    choiceC:"C) Cast Structure Syntax",
    choiceD:"D) Cool Style Script",
    correctAnsw:"b"

},{
    question:"What is SQL?",
    choiceA: "A) is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.  ",
    choiceB: "B) is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser. ",
    choiceC: "C) It is designed for building web applications and APIs. It has been called the de facto standard server framework ",
    choiceD: "D) is a subsidiary of GitHub, an American multinational corporation that provides hosting for software development and version control with the usage of Git. ",
    correctAnsw:"b"
}
];

var lastQuestion = questions.length;
var runQuestion=0;
var count = 0;
var questionTimmer = 120;
var time;
var score=0;
var correct;

function displayQuestion(){
    var q=questions[runQuestion];
    question.textContent = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
}

function counter(){
    if (count<=questionTimmer){
        timer.textContent = "Time: " +count;
        count++
        
    }else{
        count=0;
       
        if(runQuestion < lastQuestion){
            runQuestion++;
            displayQuestion();
        }else{
            clearInterval(time);
            
        }
    }
}

function checkAnswer(event){
    answer = event.target.getAttribute('data-value');
    correct = questions[runQuestion].correctAnsw;

    if (answer === correct && runQuestion !== lastQuestion){
        score++;
        alert("That Is Correct!");
        runQuestion++;
        displayQuestion();
        //display in the results div that the answer is correct.
    }else if (answer !== correct && runQuestion !== lastQuestion){
        alert("That Is Incorrect.")
        runQuestion++;
        displayQuestion();
        //display in the results div that the answer is wrong.
    }
}

function finish(){
    var x = score;
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  score.textContent ="Score: " + score;
console.log(score);

function startQuiz(){
    begin.getElementsByClassName.display ="none";
    displayQuestion();
    answers.getElementsByClassName.display="block";
    counter();
    time = setInterval(counter,1000);
    
}
choiceA.addEventListener("click",checkAnswer);
choiceB.addEventListener("click",checkAnswer);
choiceC.addEventListener("click",checkAnswer);
choiceD.addEventListener("click",checkAnswer);
begin.addEventListener("click", startQuiz);
finishBtn.addEventListener("click", finish);                                                                                                       