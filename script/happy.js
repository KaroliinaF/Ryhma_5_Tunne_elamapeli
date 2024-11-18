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

// Alustetaan pelin kysymysten laskuri
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
    if (selectedImage.correct) {
        alert("Oikein, mahtavaa!");
    } else {
        alert("Väärin, parempi onni ensi kerralla.");
    }

    currentQuestionIndex++;

    // Jatketaanko vai pääteäänkö peli
    if (currentQuestionIndex < cardGameData.length) {
        loadQuestion();
    } else {
        showSummary();
    }
}

// Pelin yhteenveto näytölle
function showSummary() {
    const questionContainer = document.getElementById("questionContainer");
    const cards = document.getElementById("cards");

    // Kuvien ja kysymysten piilottaminen näytöltä
    questionContainer.style.display = "none";
    cards.style.display = "none";

    // Yhteenvedon luonti
    const summary = document.createElement("div");
    summary.innerHTML = `
        <h2>Hienoa! Pääsit pelin loppuun ja saat iloisen koiramerkin merkit sivulle.</h2>
        <p>Ilo on tärkeä tunne, joka auttaa meitä olemaan onnellisia ja vähentää stressiä. 
        Se tuo ihmisiä yhteen ja vahvistaa ystävyyksiä. Ilo myös auttaa meitä huomaamaan, mikä tekee elämästä erityistä ja arvokasta.</p>
    `;
    document.querySelector("article").appendChild(summary);
}
// Pelin lataus heti sivun avautuessa
document.addEventListener("DOMContentLoaded", loadQuestion);
