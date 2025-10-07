/*
2 arrays med information om frågor och svar till quiz
rätt svar sparas som "answer"
*/
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

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;


//starta rätt quiz
startQuizOneBtn.addEventListener('click', () => startQuiz(quizData));
startQuizTwoBtn.addEventListener('click', () => startQuiz(quizData2));

function startQuiz(selectedQuiz) {
    currentQuiz = selectedQuiz;
    currentQuestion = 0;
    score = 0;
    document.querySelectorAll('button[id^="start-quiz"]').forEach(btn => btn.classList.add('hidden'));
    quizSection.classList.remove('hidden');
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



    /*
    Ovanför har vi skapat strukturen:
    <div>
    <h2>Hur stor är månen?</h2>
    <button>Jättestor</button>
    <button>GIGA STOR</button>
    <button>Pytteliten</button>
    <button>Minimal</button>

</div>

Och","Fel svar","Fortfarande fel","Inte helt rätt"]
const optionsContainer = document.getElementById("options")
/* const newButton = document.createElement("button")
newButton.textContent = answerArray[0]
optionsContainer.appendChild(newButton) */

/* myArray.forEach(function(item) {
	console.log(item)
}) */


/* använder foreach för att gå igenom array
 answerArray.forEach(function(item){
    const newButton = document.createElement("button")
    newButton.textContent = item
    optionsContainer.appendChild(newButton)
}) */

/* answerArray.forEach(i) = 0; i < answerArray.length; i++) {

} */

/*
TODO

lägg till knapp
hårdkoda rätt svar
kolla att om du klickar på rätt knapp
är svaret rätt?
isåfall: jippi
 */

/*
Hämta frågor ur vår array
Kolla att svar är rätt eller fel
Visa resultat 

### **1. Strukturera projektet**

Ni ska bygga en quizapplikation som innehåller följande delar, där allt hanteras på **samma HTML-sida**:

1. **Startsida:**
    - Börja med en välkomnande startsida där användaren får en introduktion till quizen.
    - Här kan ni lägga till information om ämnet, hur många frågor som ingår och en "Starta Quiz"-knapp.
    - Det måste finnas minst två tillgängliga ämnen/kategorier.
2. **Quizdel:**
    - När användaren klickar på "Starta Quiz"-knappen ska frågorna visas **dynamiskt på samma sida**.
    - Frågorna ska visas en i taget, med flervalsalternativ där användaren kan välja sitt svar.
    - Nästa fråga ska visas när användaren har valt ett svar.
    - Minst 5 frågor per ämne/kategori.
3. **Resultatdel:**
    - När alla frågor är besvarade ska resultatet visas på samma sida. Här kan ni visa:
        - Hur många rätt användaren fick.
        - Rätt svar på varje fråga (valfritt).

> Notera: Alla dessa delar (introduktion, frågor och resultat) ska hanteras genom att uppdatera och ändra
 innehållet på samma HTML-sida med hjälp av JavaScript.
> 

---

### **2. Dynamiskt flöde med JavaScript**

För att få quizen att fungera dynamiskt ska ni använda JavaScript för att:

1. **Visa och byta innehåll:**
    - Byt mellan introduktionen, frågorna och resultatdelen genom att uppdatera innehållet i en `<div>` eller
     liknande element.
2. **Hantera frågor:**
    - Spara alla frågor och svar i en JavaScript-array.
    - Visa en fråga i taget och låt användaren välja ett svar innan nästa fråga visas.
3. **Räkna poäng:**
    - Håll reda på användarens poäng genom att spara hur många rätt svar de har under quizens gång.
4. **Visa resultat:**
    - När alla frågor är besvarade ska resultatet visas dynamiskt utan att ladda om sidan.

---

### **3. Designa med CSS**

- **Enhetlig design:** Använd CSS för att skapa en snygg och tydlig design. Centrera quizens innehåll och använd
 färger och typsnitt som gör applikationen tilltalande.
- **Responsiv design:** Gör quizen användarvänlig även på mindre skärmar, t.ex. mobiler.
- **Interaktiva effekter:** Lägg till visuella effekter som gör det roligare att använda quizen, t.ex. 
hover-effekter på knappar.

*/



/*
ÖVRIGA TEST DELAR FÖR ATT SE HUR JAVASCRIPT FUNGERAR

Test på hur det går att hämta information från array:

console.log("hej")

console.log(quizData[0].num)

console.log(quizData[0].options)
quizData[0].options.forEach(item => console.log(item));
console.log(quizData[0].question) */

/*Få en fråga att visas med alternativ 
pekar på div som ska innehålla frågor
skapar element
appendchild skapade element till hämtad div
*/

//const questionContainer = document.getElementById("questions")


//Ashurs kod som förklarar hur appendChild fungerar 

// const newDiv = document.createElement('div')

// newDiv.className = "my-new-div"
// newDiv.id = "my-single-div"
// newDiv.textContent = "my div content"

// const newP = document.createElement('p')
// newP.textContent = "my inner ptag"

// newDiv.appendChild(newP)

// document.body.appendChild(newDiv)
