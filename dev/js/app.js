"use strict";

$(document).ready(function() {

  /*--- QUIZ OBJECTS ---*/
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
  var wrongMsg = "Sorry, that is just wrong!";
  var endMsg = "You answered " + correctCount + " out of " + Quiz.length + " question correctly!";
  var nextMsg = "Get ready for next question."
  var correctCount = 0;

  /*--- SELECTORS ---*/
  var label = $('label');
  var input = $('input, label');
  var choices = Quiz[questionSetIndex].choices;
  var radios = $('input[type="radio"]');
  var questionDisplay = $('.js-question')
  var questions = Quiz[questionSetIndex].question;
  var submit = $('.js-submit');
  var answer = Quiz[questionSetIndex].answer;
  var fact = Quiz[questionSetIndex].fact;
  var msgBox = $('.js-correct-ans');


  /*--- FUNCTIONS ---*/
  /* load questions */
  function addQuestion() {
    questionDisplay.html(questions);
  }

  /* load choices and input values */
  function addChoices() {
    for (var index in choices) {
      label[index].innerHTML = choices[index]; //
      radios[index].value = choices[index];
    }

    /*for (var index = 0; index < choices.length; index++) {
      $($('label')[index]).html(choices[index]); // wrap label selector with jquery to grab object instead of literal element
    }*/
  }

  /* hides form and displays 'correct' message*/
  function displayCorrectMsg() {
    // hides form in order to display correct message
    input.addClass('hidden');
    // adds message of 'correct' in place of question
    questionDisplay.html(correctMsg).addClass('display-msg');
  }

  /* delays removal of 'correct' message */
  function removeCorrectMsg() {
    // removes 'correct' message after period of time
    setInterval(function () {
      input.removeClass('hidden');
      questionDisplay.html(questions).removeClass('display-msg');
    }, 1000);
  }

  /* hides form and displays 'wrong' message*/
  function displayWrongMsg() {
    // hides form in order to display wrong message
    input.addClass('hidden');
    // adds message of 'wrong' in place of question
    questionDisplay.html(wrongMsg).addClass('display-msg');

    // display and remove fun fact about correct answer
    msgBox.removeClass('hidden').html(fact);
//    setInterval(function () {
//      msgBox.addClass('hidden');
//    }, 2000);
  }

  /* delays removal of 'wrong' message */
  function removeWrongMsg() {
    // removes 'wrong' message after period of time
    setInterval(function () {
      input.removeClass('hidden');
      questionDisplay.html(questions).removeClass('display-msg');
    }, 3000);
  }

  /* compares the selected choice with the answer */
  function compareAnswer() {
    // access and gets value of selected choice
    var selectedChoice = $('input[name="choice"]:checked').val();

    // compares the selected choice with the correct answer
    if (selectedChoice === answer) {
      displayCorrectMsg();

      correctCount++;
    }
    else {
      displayWrongMsg();
    }

    questionSetIndex++; // should this be elsewhere
  }




  /*--- FUNCTION CALLS ---*/
  addQuestion();
  addChoices();



  /*--- EVENTS ---*/
  /* prevents reloading when submiting input */
  $("form").submit(function(event) {
    event.preventDefault();
  });

  submit.click(function() {
    compareAnswer();

  });


// .on("click(event)", "#selector", funcion() {...})
// fadeIn() / fadeOut();
// delay()


/*
  // enter key press triggers button click
  var enterKey = function (event) {
    if (event.which == 13) {
      $guessButton.click();
    }
  }

  // keyup event calls enterKey function
  $document.keyup(enterKey);

*/

  /*

  // global
  var correct = false
  // within compareAnswer()
  if selectedChoice === answer) {
    correct = true;
  }

  // within submit.click event() {
    // after compareAnswer() call
    if (correct) {
      call displayMsg(answer) // write function to accept param and create variable according to message
      call removeMsg
    }
  }

  */




}); // end document.ready
