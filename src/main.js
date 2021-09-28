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


const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
loadQuiz();

function loadQuiz(){
  const currentQuizData = quizData[currentQuestion];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  currentQuestion++;
}