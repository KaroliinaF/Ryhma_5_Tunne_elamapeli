const questions = [
    {
        question: "Mikä näistä voi aiheuttaa inhoa?",
        answers: ["aurinko", "ruusun terälehti", "kärpänen ruoassa"],
        correct: 2
    },
    {
        question: "Mikä näistä hajuista on inhottava?",
        answers: ["saippua", "oksennus", "glögi"],
        correct: 1
    },
    {
        question: "Mitä teet kun näet inhottavan ötökän?",
        answers: ["kohtaat sen rauhallisesti", "kiljut", "sekoat"],
        correct: 0
    },
    {
        question: "Mikä näistä ei tunnu inhottavalta?",
        answers: ["märät sukat kylmällä ilmalla", "hiuskarva ruoan seassa", "jäätelö kuumana päivänä"],
        correct: 2
    },
    {
        question: "Mikä näistä kuulostaa inhokkiruoalta?",
        answers: [" tuore makaronilaatikko", "burgeriateria", "kylmä kaurapuuro"],
        correct: 2
    },
    {
        question: "Mikä näistä voi aiheuttaa inhoa?",
        answers: ["aurinko", "ruusun terälehti", "kärpänen ruoassa"],
        correct: 2
    },
    {
        question: "Mikä näistä hajuista on inhottava?",
        answers: ["saippua", "oksennus", "glögi"],
        correct: 1
    },
    {
        question: "Mitä teet kun näet inhottavan ötökän?",
        answers: ["kohtaat sen rauhallisesti", "kiljut", "sekoat"],
        correct: 0
    },
    {
        question: "Mikä näistä ei tunnu inhottavalta?",
        answers: ["märät sukat kylmällä ilmalla", "hiuskarva ruoan seassa", "jäätelö kuumana päivänä"],
        correct: 2
    },
    {
        question: "Mikä näistä kuulostaa inhokkiruoalta?",
        answers: [" tuore makaronilaatikko", "burgeriateria", "kylmä kaurapuuro"],
        correct: 2
    }
]

const quizContainer = document.getElementById("disgustquizContainer")
const resultContainer = document.getElementById("disgustresultContainer")

let currentQuestionIndex = 0
let score = 0

// kysymykset, tähän funktioon kysytty tekoälyltä apua, jotta näkyy vain yksi kysymys kerrallaan
function showQuestion(index) {
    quizContainer.innerHTML = ""

    const questionData = questions[index]
    const content = document.createElement("div")
    content.classList.add("disgustcontent", "active")

    content.innerHTML = ` 
        <div class="disgustimage-box">
            <img src="../images/disgusted_turtle.png" alt="kilpikonna, joka kokee inhoa">
        </div>
        <div class="disgustanswers">
            <h3>${questionData.question}</h3>
            ${questionData.answers.map((answer, i) => `
                <div class="disgustanswer" data-index="${i}">${answer}</div>
            `).join("")}
        </div>
    `
    quizContainer.appendChild(content)

    const answers = content.querySelectorAll(".disgustanswer")
    answers.forEach(answer => {
        answer.addEventListener("click", () => checkAnswer(index, parseInt(answer.dataset.index)));
    });
}
//tarkistaa vastauksen, lisää pienen viiveen ja värikoodaa
function checkAnswer(index, answerIndex) {
    const answers = document.querySelectorAll(".disgustanswer")
    answers.forEach((answer, i) => {
        if (i === questions[index].correct) {
            answer.classList.add("disgustcorrect")
        } else if (i === answerIndex) {
            answer.classList.add("disgustwrong")
        }
        answer.style.pointerEvents = "none"
    })

    if (answerIndex === questions[index].correct) {
        score += 1
    }
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showResults()
        }
    }, 1000)
}

//lopputulokset ja kommentti pisteistä, pisteiden tallennus
function showResults() { //kysytty tekoälyltä apua siihen, että lopussa näkyy vain pisteet ja napit
    document.getElementById("disgustquizContainer").style.display = "none"

    const resultContainer = document.getElementById("disgustresultContainer")
    resultContainer.style.display = "block"

    if (score == 10) {
        document.getElementById("finalScore").textContent =` Sait ${score} pistettä 10:stä! Hyvä sinä, tiesit kaikki vastaukset! JEE`
     }
        else {
            if (score>=6) {
                document.getElementById("finalScore").textContent =` Sait ${score} pistettä 10:stä! Hyvä sinä, tiesit vastauksia tosi hyvin! Katso onnistutko saamaan täydet pisteet :)`
            }
            else { 
                document.getElementById("finalScore").textContent =` Sait ${score} pistettä 10:stä! Höh, harjoittele vielä taitojasi uudestaan!`
            }}
    document.getElementById("disgustviewMarksButton").addEventListener("click", () => {
        window.location.href = "../token.html"
    })
    document.getElementById("disgustplayAgainButton").addEventListener("click", () => {
        score=0
        window.location.reload()
    })
    
    localStorage.setItem('points-disgust', score)
    
}

// aloitus
showQuestion(currentQuestionIndex);
