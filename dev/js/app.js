"use strict";

$(document).ready(function() {

  /*--- QUIZ OBJECT ---*/
  var Quiz = [
    {
      question: "'That chick Julie, she's truly dazzling...Yep, but she's not one of ours.'",
      choices: ["Valley Girl", "Weird Science", "Back To School", "Beetlejuice", "Big Trouble In Little China"],
      answer: "Valley Girl",
      fact: "something about Valley Girl"
    },

    {
      question: "'This is pure snow. It's everywhere! Do you have any idea what the street value of this mountain is?'",
      choices: ["Better Off Dead", "2", "3", "4", "5"],
      answer: "Better Off Dead",
      fact: "something about Better Off Dead"
    },

    {
      question: "'I got a question. If you guys know so much about women, how come you're here at like the Gas 'n' Sip on a Saturday night completely alone drinking beers with no women anywhere?'...'By choice!'",
      choices: ["Say Anything", "Fast Times At Ridgemont High", "Revenge Of The Nerds", "4", "5"],
      answer: "Say Anything",
      fact: "something about Say Anything"
    },

    {
      question: "'Sweep the leg.'",
      choices: ["Karate Kid", "2", "3", "4", "5"],
      answer: "Karate Kid",
      fact: "something about Karate Kid"
    },

    {
      question: "'What I wouldn't give to go ass-sliding with you right now.'",
      choices: ["Rad", "2", "3", "4", "5"],
      answer: "Rad",
      fact: "something about Rad"
    }
  ]

  /*--- GLOBALS ---*/
  var questionSetIndex = 0;
  var correctMsg = "Correct!";
  var correctCount = 0;
  var wrongMsg = "X";
  var endMsg = "You answered " + correctCount + " out of " + Quiz.length + " question correctly!";
  var next = "next question..."
  var msgDelay = 1000; // 1 second

  /*--- SELECTORS ---*/
  var label = $('label');
  var input = $('input, label');
  var choices = function() { return Quiz[questionSetIndex].choices; };
  var radios = $('input[type="radio"]');
  var questionDisplay = $('.js-question')
  var questions = function() { return Quiz[questionSetIndex].question; };
  var submit = $('.js-submit');
  var answer = function() { return Quiz[questionSetIndex].answer; };
  var fact = function() { return Quiz[questionSetIndex].fact; };
  var msgBox = $('.js-correct-ans');
  var questionForm = $('.js-qa-form')
  var gameOver = $('.game-over-container');
  var ending = $('.js-end-message > p');


  /*--- FUNCTIONS ---*/
  /* load questions */
  function addQuestion() {
    questionDisplay.html(questions).removeClass('display-msg');
  }

  /* load choices and input values */
  function addChoices() {
    input.removeClass('hidden');

    var c = choices();
    for (var index in c) {
      label[index].innerHTML = c[index];
      radios[index].value = c[index];
    }
  }

  /* display movie fact if wrong answer */
  function displayMovieFact() {
    // display and remove fun fact about correct answer
    questionDisplay.html(fact).addClass('display-msg');
  }

  /* hides form and displays 'correct' message*/
  function displayMsg(correct) {
    // hides form in order to display correct message
    input.addClass('hidden');

    if (correct) {
      // adds message of 'correct' in place of question
      questionDisplay.html(correctMsg).addClass('display-msg');
    }
    else {
      // add wrong message
      questionDisplay.html(wrongMsg).addClass('display-msg');
      // display and remove fun fact about correct answer
      displayMovieFact();
    }
  }

  /* display 'next question' message*/
  function nextMsg() {
    questionDisplay.html(next).addClass('display-msg');
  }

  /* compares the selected choice with the answer */
  function compareAnswer() {
    // access and gets value of selected choice
    var selectedChoice = $('input[name="choice"]:checked').val();
    // define correct boolean
    var correct;

    // compares the selected choice with the correct answer
    if (selectedChoice === answer()) {
      correct = true;
      return correct;
    }
    else {
      correct = false;
      return correct;
    }
  }


  /*--- FUNCTION CALLS ---*/
  /* initial load of questions and choices */
  addQuestion();
  addChoices();


  /*--- EVENTS ---*/
  /* prevents reloading when submiting input */
  $("form").submit(function(event) {
    event.preventDefault();
  });

  submit.click(function() {

    /* set time to equal msgDelay times 4 */
    var time = msgDelay * 2;

    /* compares whether user answer is correct and sets to userChoice */
    var userChoice = compareAnswer();

    /* displays appropriate message (whether correct or incorrect) passing in users choice */
    displayMsg(userChoice);

    /* increment question index */
    questionSetIndex++;

    /* set time delay for correct answer */
    if (userChoice === true) {
      time = msgDelay;
      correctCount++;
    }

    /* only display the amount of questions/choices in the object array */
    if (questionSetIndex < 5) {
      /* delay 'next question' message */
      setTimeout(function() {
        nextMsg();
      }, time);

      /* delay call on adding questions and choices */
      setTimeout(function() {
        addQuestion();
        addChoices();
      }, msgDelay * 3);
    }
    else {
      setTimeout(function() {
        questionForm.addClass('hidden');
        gameOver.removeClass('hidden');
        ending.html("You answered " + correctCount + " out of " + Quiz.length + " question correctly!");
      }, msgDelay * 2);
    }



  }); // end click event


}); // end document.ready
