const quizData = [
    {
        num: 1,
        question: "Vilket är världens största land?",
        options: ["Kanada", "Ryssland", "Kina", "USA"],
        answer: "Ryssland"
    },
    {
        num: 2,
        question: "Vem målade 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        num: 3,
        question: "Vilket år landade människan första gången på månen?",
        options: ["1969", "1975", "1965", "1972"],
        answer: "1969"
    },
    {
        num: 4,
        question: "Vad heter Sveriges näst största stad?",
        options: ["Malmö", "Linköping", "Uppsala", "Göteborg"],
        answer: "Göteborg"
    },
    {
        num: 5,
        question: "Vilken är den största planeten i vårt solsystem?",
        options: ["Jupiter", "Mars", "Saturnus", "Neptunus"],
        answer: "Jupiter"
    }
]

const quizData2 = [
    {
        num: 1,
        question: "Vem spelar huvudrollen som Jack Dawson i filmen Titanic?",
        options: ["Leonardo diCaprio", "Brad Pitt", "Tom Cruise", "Johnny Depp"],
        answer: "Leonardo diCaprio"
    },
    {
        num: 2,
        question: "Vilket år släppte Spotify sin tjänst för allmänheten??",
        options: ["2005", "2006", "2008", "2010"],
        answer: "2008"
    },
    {
        num: 3,
        question: "Vilken tv-serie utspelar sig i den fiktiva staden Hawkins?",
        options: ["Stranger Things", "Riverdale", "Dark", "The OA"],
        answer: "Stranger Things"
    },
    {
        num: 4,
        question: "Vem sjunger låten 'Bad Guy' som blev en stor hit 2019?",
        options: ["Billie Eilish", "Ariana Grande", "Dua Lipa", "Taylor Swift"],
        answer: "Billie Eilish"
    },
    {
        num: 5,
        question: "Vilken av dessa superhjältar tillhör Marvel?",
        options: ["Batman", "Superman", "Spider-Man", "Wonder Woman"],
        answer: "Spider-Man"
    }
]

const introduction = document.getElementById('introduction');
const startQuizOneBtn = document.getElementById('start-quiz-one');
const startQuizTwoBtn = document.getElementById('start-quiz-two');
const quizSection = document.getElementById('quiz');
const resultSection = document.getElementById('result');
const questionsEl = document.getElementById('questions');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart');
const activateBtn = document.getElementById('activate-quiz')

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;


//starta rätt quiz
activateBtn.addEventListener('click', () => showQuizOptions())
startQuizOneBtn.addEventListener('click', () => startQuiz(quizData));
startQuizTwoBtn.addEventListener('click', () => startQuiz(quizData2));

function showQuizOptions(){
        startQuizOneBtn.classList.remove('hidden')
        startQuizTwoBtn.classList.remove('hidden')
        activateBtn.classList.add('hidden')
};


function startQuiz(selectedQuiz) {
    currentQuiz = selectedQuiz;
    currentQuestion = 0;
    score = 0;
    const allBtns = document.querySelectorAll('.start-quiz')
    allBtns.forEach(btn => btn.classList.add('hidden'));
    quizSection.classList.remove('hidden');
    introduction.classList.add('hidden')
    showQuestion();
}


//visa frågorna
function showQuestion() {
    const q = currentQuiz[currentQuestion];
    questionsEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(option));
        optionsEl.appendChild(btn);
    });
}


//kolla svar
function checkAnswer(selectedOption) {
    const q = currentQuiz[currentQuestion];
    if (selectedOption === q.answer) {
        score++;
    } 
    currentQuestion++;
    if (currentQuestion < currentQuiz.length) {
        showQuestion();
    } else {
      showResult();
    }
}


//visa resultat
function showResult() {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    scoreEl.textContent = `Du fick ${score} av ${currentQuiz.length} rätt!`;
}


//starta om
restartBtn.addEventListener('click', () => {
    resultSection.classList.add("hidden");
    introduction.classList.remove("hidden");
    startQuizOneBtn.classList.remove("hidden");
    startQuizTwoBtn.classList.remove("hidden");
});