const quizData =  [
  {
    question: "Capital of Moldova?",
    a: "Chisinau",
    b: "Bogota",
    c: "Madrid",
    d: "Istanbul",
    correct: "a"
  },

  {
    question: "Capital of Colombia",
    a: "Chisinau",
    b: "Bogota",
    c: "Madrid",
    d: "Istanbul",
    correct: "b"
  },
  {
    question: "How many continents are?",
    a: "2",
    b: "4",
    c: "7",
    d: "8",
    correct: "c"
  },
  {
    question: "Whats my name?",
    a: "Juan",
    b: "Stela",
    c: "Elena",
    d: "Auristela",
    correct: "b"
  },
  {
    question: "Latin language?",
    a: "Romanian",
    b: "Russian",
    c: "Slovachian",
    d: "Ukrainian",
    correct: "a"
  },
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer")

const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let answer = undefined;
loadQuiz();

function loadQuiz(){
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;


  function getSelected() {
    const answer = undefined;

    answerEls.forEach((answerEl) => {
      if(answerEl.checked){
        answer = answerEl.id
      }
    });
    return answer;
  }


  function deselectAnswer(){
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    })
  }

  submitBtn.addEventListner('click', () => {
    // currentQuiz++;

    const answer = getSelected();

     if (answer) {
       if (answer === quizData[currentQuiz].correct) {
         score++;
       }

       currentQuiz++
       if (currentQuiz < quizData.length){
         loadQuiz();

       }else {
         quiz.innerHTML = `
         <h2> Correct at ${score}/${quizData.length} question.</h2>


         <button onclick = "location.reload()">Reload</buttobn>
         `
       }
     }
})
 
}

