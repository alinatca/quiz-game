//Creating variables
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");


var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions 
  questionsEl.removeAttribute("class");

  // start the timer
  timerId = setInterval(clockTick, 1000);

  // show time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
  
    // update title with current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
  
    // clear out any old question choices
    choicesEl.innerHTML = "";
  
    // loop over choices
    currentQuestion.choices.forEach(function(choice, i) {
      // create new button for each choice
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
  
      choiceNode.textContent = i + 1 + ". " + choice;
  
      // attach click event listener to each choice
      choiceNode.onclick = questionClick;
  
      // display on the page
      choicesEl.appendChild(choiceNode);
    });
  }