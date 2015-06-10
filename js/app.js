"use strict";

$(document).ready(function() {

  /*--- QUIZ OBJECT ---*/
  var Quiz = [
    {
      question: "'That chick Julie, she's truly dazzling...Yep, but she's not one of ours.'",
      choices: ["Beetlejuice", "The Princess Bride", "Back To School", "Valley Girl", "Big Trouble In Little China"],
      answer: "Valley Girl",
    },

    {
      question: "'This is pure snow. It's everywhere! Do you have any idea what the street value of this mountain is?'",
      choices: ["Back to the Future", "Vacation", "Weird Science", "Better Off Dead", "Bill and Ted's Excellent Adventure"],
      answer: "Better Off Dead",
    },

    {
      question: "'I got a question. If you guys know so much about women, how come you're here at like the Gas 'n' Sip on a Saturday night completely alone drinking beers with no women anywhere?'...'By choice!'",
      choices: ["Say Anything", "Fast Times At Ridgemont High", "Revenge Of The Nerds", "Ferris Bueller's Day Off", "Sixteen Candles"],
      answer: "Say Anything",
    },

    {
      question: "'Sweep the leg.'",
      choices: ["Empire Strikes Back", "The Lost Boys", "Big", "Beverly Hills Cop", "Karate Kid"],
      answer: "Karate Kid",
    },

    {
      question: "'What I wouldn't give to go ass-sliding with you right now.'",
      choices: ["The Breakfast Club", "Top Gun", "Pretty in Pink", "Rad", "The Goonies"],
      answer: "Rad",
    }
  ];


  /*--- GLOBALS ---*/

  var questionSetIndex;
  var correctCount;
  var correctMsg = "Correct!";
  var wrongMsg = "X";
  var endMsg = function() { return "You answered " + correctCount + " out of " + Quiz.length + " question correctly!"; };
  var next = "next question...";
  var msgDelay = 1000; // 1 second


  /*--- SELECTORS ---*/

  var $label = $('label');
  var $input = $('input, label');
  var $choices = function() { return Quiz[questionSetIndex].choices; };
  var $radios = $('input[type="radio"]');
  var $questionDisplay = $('.js-question');
  var $questions = function() { return Quiz[questionSetIndex].question; };
  var $submit = $('.js-submit');
  var $answer = function() { return Quiz[questionSetIndex].answer; };
  var $questionForm = $('.js-qa-form');
  var $gameOver = $('.game-over-container');
  var $ending = $('.js-end-message > p');
  var $again = $('.js-play-again > button');


  /*--- FUNCTIONS ---*/

  /* initial load of questions, choices and hidden elements */
  function quizSetup() {
    /* set global counts to 0 */
    questionSetIndex = 0;
    correctCount = 0;

    /* hide game over form */
    $gameOver.css('display', 'none');
    /* unhide q&a form */
    $questionForm.removeClass('hidden');

    /* add initial q&a to screen */
    addQuestion();
    addChoices();
  }

  /* load questions */
  function addQuestion() {
    $questionDisplay.html($questions).removeClass('display-msg');
  }

  /* load choices and input values */
  function addChoices() {
    // show container for inputs
    $input.removeClass('hidden');

    // disable property of radio buttons to not be checked
    $radios.prop('checked', false);

    /* iterates through choices object and populates choices */
    var c = $choices(); // calls choices function to store in variable
    for (var index in c) {
      $label[index].innerHTML = c[index];
      $radios[index].value = c[index];
    }
  }

  /* hides form and displays 'correct' message*/
  function displayMsg(correct) {
    // hides form in order to display correct message
    $input.addClass('hidden');

    if (correct) {
      // adds message of 'correct' in place of question
      $questionDisplay.html(correctMsg).addClass('display-msg')
    }
    else {
      // add wrong message
      $questionDisplay.html(wrongMsg).addClass('display-msg lg-x');
    }
  }

  /* display 'next question' message*/
  function nextMsg() {
    $questionDisplay.html(next).addClass('display-msg');
  }

  /* compares the selected choice with the answer */
  function compareAnswer() {
    // access and gets value of selected choice
    var selectedChoice = $('input[name="choice"]:checked').val();
    // define correct boolean
    var correct;

    // compares the selected choice with the correct answer
    if (selectedChoice === $answer()) {
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
  quizSetup();


  /*--- EVENTS ---*/

  /* prevents reloading when submiting input */
  $("form").submit(function(event) {
    event.preventDefault();
  });

  $submit.click(function() {

    /* set time to equal msgDelay times 4 */
    var time = msgDelay * 4;

    /* compares whether user answer is correct and sets to userChoice */
    var userChoice = compareAnswer();

    /* displays appropriate message (whether correct or incorrect) passing in users choice */
    displayMsg(userChoice);

    /* increment question index */
    questionSetIndex++;

    /* increment counter for correct answers */
    if (userChoice === true) {
      correctCount++;
    }

    /* only display the amount of questions/choices in the object array */
    if (questionSetIndex < 5) {
      /* delay 'next question' message */
      setTimeout(function() {
        nextMsg();
      }, msgDelay);

      /* delay call on adding questions and choices */
      setTimeout(function() {
        addQuestion();
        addChoices();
      }, msgDelay * 2);
    }
    /* end of questions */
    else {
      /* displays end of game elements */
      setTimeout(function() {
        $questionForm.addClass('hidden');
        $gameOver.css('display', 'initial');
        $ending.html(endMsg());
      }, msgDelay);
    }

  }); // end submit click event

  /* clicking again? button */
  $again.click(function() {
    /* restarts quiz */
    quizSetup();
  }); // end again? click event


}); // end document.ready
