/**
 * Example store structure
 */
'use strict';
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateQuestionPage(){
  //this should create the html for the question page
      $('main').html(` 
      <h1>Question ${STORE.questionNumber+1}</h1>
        <div class="container">${STORE.questions[STORE.questionNumber].question}</div>
        <h2>Answers:</h2>
        <form action="submit" class="answers">
          <input type="radio" id="ans1" name="answer" value="ans1">
          <label for="ans1">${STORE.questions[STORE.questionNumber].answers[0]}</label><br>
          <input type="radio" id="ans2" name="answer" value="ans2">
          <label for="ans2">${STORE.questions[STORE.questionNumber].answers[1]}</label><br>
          <input type="radio" id="ans3" name="answer" value="ans3">
          <label for="ans3">${STORE.questions[STORE.questionNumber].answers[2]}</label><br>
          <button type="submit">Submit</button>
        </form>`
  )};
generateQuestionPage();

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)