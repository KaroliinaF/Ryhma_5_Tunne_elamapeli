// Pelin kuvat, kysymykset ja oikeat vastaukset
const cardGameData = [
    {
        question: "Kummassa kuvassa koira on iloinen?",
        images: [
            { src: "happy_animals1.png", correct: true },
            { src: "happy_animals2.png", correct: false },
        ]
    },
    {
        question: "Kummassa kuvassa koira leikkii?",
        images: [
            { src: "happy_animals3.png", correct: true },
            { src: "happy_animals4.png", correct: false },
        ]
    },
    {
        question: "Kummassa kuvassa koira hymyilee?",
        images: [
            { src: "happy_animals5.png", correct: true },
            { src: "happy_animals6.png", correct: false },
        ]
    },
    {
        question: "Kummassa kuvassa on iloinen tapahtuma?",
        images: [
            { src: "happy_animals7.png", correct: false },
            { src: "happy_animals8.png", correct: true },
        ]
    },
    {
        question: "Kumpi tapahtuma tuottaa iloa?",
        images: [
            { src: "happy_animals9.png", correct: false },
            { src: "happy_animals10.png", correct: true },
        ]
    },
];

let currentQuestionIndex = 0;

// Seuraavat kysymykset ja kuvat näytölle
function loadQuestion() {
    const questionData = cardGameData[currentQuestionIndex];

    const questionElement = document.getElementById("question");
    questionElement.textContent = questionData.question;

    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");

    card1.innerHTML = "";
    const img1 = document.createElement("img");
    img1.src = `../images/${questionData.images[0].src}`;
    img1.alt = "Kuva 1";
    card1.appendChild(img1);

    card2.innerHTML = "";
    const img2 = document.createElement("img");
    img2.src = `../images/${questionData.images[1].src}`;
    img2.alt = "Kuva 2";
    card2.appendChild(img2);

    card1.onclick = () => handleAnswer(questionData.images[0]);
    card2.onclick = () => handleAnswer(questionData.images[1]);
}

// Vastauksen käsittely
function handleAnswer(selectedImage) {
    // Nykyisten pisteiden haku localStoragesta
    let pointsJoy = parseInt(localStorage.getItem("points-joy")) || 0;

    const feedbackElement = document.getElementById("happyFeedback");

    if (selectedImage.correct) {
        pointsJoy += 2;
        if (pointsJoy > 10) pointsJoy = 10;
        feedbackElement.textContent = "Oikein, mahtavaa!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Väärin, parempi onni ensi kerralla.";
        feedbackElement.style.color = "black";
    }

    localStorage.setItem("points-joy", pointsJoy);

    currentQuestionIndex++;

    if (currentQuestionIndex >= cardGameData.length) {
        setTimeout(() => {
            feedbackElement.textContent = "";
            showSummary();
        }, 1000);
    } else {
        loadQuestion();
    }
}

// Pelin yhteenveto näytölle
function showSummary() {
    const questionContainer = document.getElementById("questionContainer");
    const cards = document.getElementById("cards");

    questionContainer.style.display = "none";
    cards.style.display = "none";

    // Happy pelin pisteiden haku
    const pointsJoy = parseInt(localStorage.getItem("points-joy")) || 0;

    // Estetään ettei yhteenveto tulostu näytölle montaa kertaa
    if (document.getElementById("summary")) return;

    // Yhteenveto
    const summary = document.createElement("div");
    summary.id = "summary";
    summary.innerHTML = `
        <h2>Hienoa! Pääsit pelin loppuun.</h2>
        <p>Ilo on tärkeä tunne, joka auttaa meitä olemaan onnellisia ja vähentää stressiä. 
        Se tuo ihmisiä yhteen ja vahvistaa ystävyyksiä. Ilo myös auttaa meitä huomaamaan, mikä tekee elämästä erityistä ja arvokasta.</p>
        <img src="../images/happy_dog.png" alt="Iloinen koira" style="width: 150px; margin-top: 10px;">
        <p>Pisteet: ${pointsJoy}/10</p> <!-- Tämä näyttää vain ilon pisteet -->
        <button id="playAgain" style="margin-top: 20px; padding: 10px; font-size: 1rem;">Pelaa uudelleen</button>
    `;
    document.querySelector("article").appendChild(summary);

    // Pelaa uudelleen-nappi
    document.getElementById("playAgain").onclick = () => {
        localStorage.setItem("points-joy", 0);
        currentQuestionIndex = 0;
        questionContainer.style.display = "block";
        cards.style.display = "flex";
        summary.remove();
        loadQuestion();
    };
}

// Pelin lataus heti sivun avautuessa
document.addEventListener("DOMContentLoaded", loadQuestion);
