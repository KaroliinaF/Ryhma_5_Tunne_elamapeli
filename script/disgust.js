const questions = [
    {
        question: "kys1",
        image: "question-image.jpg",
        answers: ["Itkeä", "Huutaa", "Maistaa"],
        correct: 2
    },
    {
        question: "kys 2",
        image: "question-image.jpg",
        answers: ["1", "2", "3"],
        correct: 1
    },
    {
        question: "kys 3",
        image: "question-image.jpg",
        answers: ["1", "V2", "3"],
        correct: 0
    },
    {
        question: "kys 4",
        image: "question-image.jpg",
        answers: ["1", "2", "3"],
        correct: 2
    },
    {
        question: "kys 5",
        image: "question-image.jpg",
        answers: ["1", "2", "3"],
        correct: 2
    }
];

const quizContainer = document.getElementById("quizContainer");
const resultContainer = document.getElementById("resultContainer");
let currentQuestionIndex = 0;
let score = 0;

// kysymykset, tähän kysytty tekoälyltä apua
function showQuestion(index) {
    quizContainer.innerHTML = ""; 

    const questionData = questions[index];
    const content = document.createElement("div");
    content.classList.add("content", "active");

    content.innerHTML = ` 
        <div class="image-box">
            <img src="/images/disgusted_turtle.png" alt="Tehtäväkuva">
        </div>
        <div class="answers">
            <h3>${questionData.question}</h3>
            ${questionData.answers.map((answer, i) => `
                <div class="answer" data-index="${i}">${answer}</div>
            `).join("")}
        </div>
    `;
    quizContainer.appendChild(content); 

    const answers = content.querySelectorAll(".answer");
    answers.forEach(answer => {
        answer.addEventListener("click", () => checkAnswer(index, parseInt(answer.dataset.index)));
    });
}

function checkAnswer(index, answerIndex) {
    if (answerIndex === questions[index].correct) {
        score += 2; 
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.innerHTML = ""; 
    resultContainer.textContent = `Sait ${score} pistettä 10:stä!`;
}

// aloitus
showQuestion(currentQuestionIndex);
