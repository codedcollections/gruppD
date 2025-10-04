const quizDataOne = [
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

const quizDataTwo = [
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

//Hämtar in quizContainer från HTML
const quizContainer = document.getElementById('quiz-container')

let currentQuestion = 0  //Skapar en variabel med värdet 0 (så att man börjar på första frågan)
let score = 0            //Skapar en räknare, räknar antal rätta svar


//Hämtar knappar för ämne 1 och 2 och lägger på eventlisteners
//när användaren klickar skickas rätt quizdata in i renderQuiz
const quizOneButton = document.getElementById('quiz-one')
quizOneButton.addEventListener('click', () => {
    currentQuestion = 0         //Vet inte om den här behövs här?
    renderQuiz(quizDataOne)    
})

const quizTwoButton = document.getElementById('quiz-two')
quizTwoButton.addEventListener('click', () => {
    currentQuestion = 0
    renderQuiz(quizDataTwo)
})


//Funktion renderQuiz - visar första frågan utifrån valt quiz (chosenArray)
function renderQuiz(chosenArray) {
    quizContainer.innerHTML = ""    //Rensar tidigare innehåll (så att bara EN fråga visas)

    let item = chosenArray[currentQuestion] //Hämtar item (objektet/frågan), med det index som currentQuestion har

    let questionContainer = document.createElement('div') //Skapar ett element, en div för frågorna
    let question = document.createElement('h2')  //h2 för frågans text
        question.innerText = item.question       //lägger in texten till frågan
        questionContainer.appendChild(question)      //lägger h2 i questionContainer
        quizContainer.appendChild(questionContainer) //och lägger questionContainer i quizContainer

    //Skapar svarsknappar och gör en loop genom item.options (item.options = array med svarsalternativen)
    item.options.forEach((option) => {
        let button = document.createElement('button')  //Skapar en knapp för varje alternativ
        button.textContent = option                  //Visar texten från option på knappen
    //Lägger till eventListener på varje knapp som kollar om svaret är rätt 
        button.addEventListener('click', () => {    
            if(option === item.answer) {    //Jämför knappens text med text för rätt svar
                alert("Rätt svar!")
                score++    //Om rätt svar läggs 1 poäng till i räknaren 
            } else {
                alert("Fel svar!")
            }
            
            currentQuestion++   //Räknar upp +1 så att nuvarande fråga går vidare till nästa fråga
            if(currentQuestion < chosenArray.length) {  //Om det finns fler frågor i arrayen
                renderQuiz(chosenArray)                 //Hämtas nästa fråga
            } else {
                alert("Quiz klart!")
                console.log(score) //Jag har kollat så att man ser poängen i konsolen, behöver skrivas ut till användaren
            }
        })
        quizContainer.appendChild(button) //Lägger alla knappar/svaralternativ i quizcontainer 
                                          //för att knapparna ska visas i HTML
    })
    }   

/* Behöver göras
- ändra alert och ge svar utan en popup ? 
- när quiz är slut - visa slutresultat
- knapp för att återgå till startsida? 
- CSS
*/