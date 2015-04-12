"use strict";

$(document).ready(function() {

  /*--- GLOBALS ---*/
  var questionIndex = 0;
  var correctMsg = "Correct!";
  var incorrectMsg = "Sorry, that is just wrong.";


  /*--- QUIZ OBJECTS ---*/
  var Quiz = [
    {
      question: "'That chick Julie, she's truly dazzling...Yep, but she's not one of ours.'",
      choices: ["Valley Girl", "Weird Science", "Back To School", "Beetlejuice", "Big Trouble In Little China"],
      answer: "Valley Girl",
      correct: false
    },

    {
      question: "'This is pure snow. It's everywhere! Do you have any idea what the street value of this mountain is?'",
      choices: ["Better Off Dead", "2", "3", "4", "5"],
      answer: "Better Off Dead",
      correct: false
    },

    {
      question: "'I got a question. If you guys know so much about women, how come you're here at like the Gas 'n' Sip on a Saturday night completely alone drinking beers with no women anywhere?'...'By choice!'",
      choices: ["Say Anything", "Fast Times At Ridgemont High", "Revenge Of The Nerds", "4", "5"],
      answer: "Say Anything",
      correct: false
    },

    {
      question: "'Sweep the leg.'",
      choices: ["Karate Kid", "2", "3", "4", "5"],
      answer: "Karate Kid",
      correct: false
    },

    {
      question: "'What I wouldn't give to go ass sliding with you right now.'",
      choices: ["Rad", "2", "3", "4", "5"],
      answer: "Rad",
      correct: false
    }
  ]

  /*--- FUNCTIONS ---*/

  // load questions
  function addQuestion() {
    $('.js-question').html(Quiz[questionIndex].question);
  }






    var labelText = $('.js-choices').siblings("label").html();
    var label = $('.js-choices').siblings("label");
    var choices = Quiz[questionIndex].choices;
    var inputName = $('.js-choices').attr("name").each();
    var radios = $('.js-choices');





  /*--- FUNCTION CALLS ---*/
  addQuestion();
//  addChoices();




  /*--- EVENTS ---*/
//  $('.js-question').click(function() {
    // load new question
    // load new choices
    // compare answer with selected choice
    // $('input:selected').siblings('label')
    // display message
    // .on("click(event)", "#selector", funcion() {...})

//  });


//    for (var index = 0; index < choices.length; index++) {
//      $('label').each(function() {
//        $('label').html(choices[index]);
//      });
//    }



}); // end document.ready
