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
      question: 'What is the capital of North Carolina?',
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
      correctAnswer: 'Atlanta',
      
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
  questionIndex: 0,
  score: 0
};
let score = STORE.score

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
function generateStartPg() {
  return $('main').html(`
  <div class="container start">
    <button class='start'>Get Started</button>
  </div>`)
}

function generateQuestionPage() {
  //this should create the html for the question page
  return $('main').html(`
  <div class="box"> 
    <h2>Question ${STORE.questionIndex+1} of ${STORE.questions.length}</h2>
    <div class="container">${STORE.questions[STORE.questionIndex].question}</div>
    <h2>Answers:</h2>
    <div class="container">
    <form action="submit" class="answers">
      <label for="ans1">
      <input type="radio" id="ans1" name="answer" value="${STORE.questions[STORE.questionIndex].answers[0]}">
      ${STORE.questions[STORE.questionIndex].answers[0]}
      </label><br>
      <label for="ans2">
      <input type="radio" id="ans2" name="answer" value="${STORE.questions[STORE.questionIndex].answers[1]}">
      ${STORE.questions[STORE.questionIndex].answers[1]}
      </label><br>
      <label for="ans3">
      <input type="radio" id="ans3" name="answer" value="${STORE.questions[STORE.questionIndex].answers[2]}">
      ${STORE.questions[STORE.questionIndex].answers[2]}
      </label><br>
      <button class='submit' type="submit">Submit</button>
    </form>
    <div class='results'></div>
    <button class='next'>Next Question</button>
    </div>
  </div>
  `)
};

function generateResultsHTML(answer) {
  let correct = STORE.questions[STORE.questionIndex].correctAnswer
  let results = []

  if (answer === correct) {
    STORE.score++
    results.push(`
    <div class="result">
    Your answer is correct. Your current score is ${STORE.score} out of ${STORE.questions.length}.
    </div>
    `)
    return results
  } else {
    results.push(`
    <div class="result">
    Your answer is incorrect. The correct answer was ${correct}. Your current score is ${STORE.score} out of ${STORE.questions.length}.
    </div>
    `)
    return results
  }
}

function generateFinalPg() {
  return $('main').html(`
  <div class="box">
  <h1>Final Score</h1>
  <div class="container">
    <div class="box">${STORE.score} out of ${STORE.questions.length}</div>
    <button class='again'>Play Again</button>
  </div>
  </div>
  `)
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderStartPg() {
  generateStartPg()
}

function renderQuestions() {
  console.log(STORE.questionIndex)
  if (STORE.questionIndex < STORE.questions.length) {
    console.log(STORE.questionIndex)
    generateQuestionPage()
    console.log('questions rendered')
  } else {
    renderFinalPg()
  }
}

function renderResults(results) {
  console.log('results rendered')
  $('main').find('div.results').html(results)
}

function renderFinalPg() {
  console.log('final page rendered')
  generateFinalPg()
  console.log(STORE.score)
  console.log(STORE.questionIndex)
}
/********** EVENT HANDLER FUNCTIONS **********/
$('main').on('click', 'button.start', renderQuestions)
$('main').on('submit', submitAnswer)
$('main').on('click', 'button.next', renderQuestions)
$('main').on('click', 'button.again', startQuiz)
// These functions handle events (submit, click, etc)

function submitAnswer(e) {
  e.preventDefault();
  console.log('answer submitted')
  let answer = $('input:checked').val();
  console.log(answer)
  if(answer !== undefined){
    let results = generateResultsHTML(answer)
    renderResults(results)
    $('main').find('button.submit').remove()
    STORE.questionIndex++
    console.log(STORE.questionIndex)
    }
  else{
    alert('Please answer the question before submission.')
  }
}

function main() {
  startQuiz()
}

function startQuiz() {
  STORE.score=0
  STORE.questionIndex=0
  console.log(STORE)
  generateStartPg()
  renderStartPg()
}

$(main)