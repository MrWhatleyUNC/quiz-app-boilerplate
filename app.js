/**
 * Example store structure
 */

'use strict';

const STORE = {
  // 5 or more questions are required
  questions: [{
      question: 'What is the capitol of Texas?',
      answers: [
        'Dallas',
        'Houston',
        'Austin',
      ],
      correctAnswer: 'Austin'
    },
    {
      question: 'What is the capital ofNorth Carolina?',
      answers: [
        'Fayetteville',
        'Charlotte',
        'Raleigh',
      ],
      correctAnswer: 'Raleigh'
    },
    {
      question: 'What is the capitol of Georgia?',
      answers: [
        'Augusta',
        'Atlanta',
        'Columbus',
      ],
      correctAnswer: 'Atlanta'
    },
    {
      question: 'What is the capitol of California?',
      answers: [
        'Los Angeles',
        'San Francisco',
        'Sacremento',
      ],
      correctAnswer: 'Sacremento'
    },
    {
      question: 'What is the capitol of Wisconsin?',
      answers: [
        'Madison',
        'Green Bay',
        'Milwaukee',
      ],
      correctAnswer: 'Madison'
    },
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

function generateStartPg(){
  let start = [];
  start.push(`
  <div class="container">
    <button class='start'>Get Started</button>
  </div>`)
  return start
}

// function generateQuestionsArray(){
//   let html =[];
//   for(let i=0; i<=STORE.questions.length; i++){
//     let questions = STORE.questions[i]
//     console.log(questions)
//     console.log((i+1))
//     html.push(`
//     <h1>Question ${(i+1)}</h1>
//     <div class="container">${questions['question']}</div>
//     <h2>Answers:</h2>
//     <form>
//       <input type="radio" id="${questions.answers[0]}" name='question${(i+1)}' value="${questions.answers[0]}">
//       <label for="${questions.answers[0]}">${questions.answers[0]}</label><br>
//       <input type="radio" id="${questions.answers[1]}" name='question${(i+1)}' value="${questions.answers[1]}">
//       <label for="${questions.answers[1]}">${questions.answers[1]}</label><br>
//       <input type="radio" id="${questions.answers[2]}" name='question${(i+1)}' value="${questions.answers[2]}">
//       <label for="${questions.answers[2]}">${questions.answers[2]}</label><br>
//       <button type="submit">Submit</button>
//     </form>
//     `)
//   }
// }

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderStartPg(){
  let html = generateStartPg()
  console.log(html)
  $('main').html(html)
}

function renderQuestions(){
  console.log('questions rendered')
  // let html = generateQuestionsArray()
  // console.log(html)
  // $('main').html(html)
}
/********** EVENT HANDLER FUNCTIONS **********/
$('main').on('click','button.start',renderQuestions)
// These functions handle events (submit, click, etc)

function main(){
  startQuiz()
}

function startQuiz(){
  generateStartPg()
  renderStartPg()
}

$(main)