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
let summaryShown = false;

function startGame() {
    localStorage.setItem("points-joy", 0); 
    currentQuestionIndex = 0; 
    summaryShown = false;

    document.getElementById("HappyDogStartGame").style.display = "none"; 
    document.getElementById("questionContainer").style.display = "block"; 
    document.getElementById("happyDogCards").style.display = "flex"; 

    document.getElementById("happyDog").style.display = "none";

    loadQuestion();
}

function loadQuestion() {
    const questionData = cardGameData[currentQuestionIndex];

    const questionElement = document.getElementById("question");
    questionElement.textContent = questionData.question;

    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");

    // Poista vanhat tapahtumakuuntelijat
    card1.replaceWith(card1.cloneNode(true));
    card2.replaceWith(card2.cloneNode(true));

    const newCard1 = document.getElementById("card1");
    const newCard2 = document.getElementById("card2");

    newCard1.innerHTML = "";
    const img1 = document.createElement("img");
    img1.src = `../images/${questionData.images[0].src}`;
    img1.alt = "Kuva 1";
    newCard1.appendChild(img1);

    newCard2.innerHTML = "";
    const img2 = document.createElement("img");
    img2.src = `../images/${questionData.images[1].src}`;
    img2.alt = "Kuva 2";
    newCard2.appendChild(img2);

    newCard1.onclick = () => handleAnswer(questionData.images[0]);
    newCard2.onclick = () => handleAnswer(questionData.images[1]);
}

function handleAnswer(selectedImage) {
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
            if (!summaryShown) {
                showSummary();
            }
        }, 1000);
    } else {
        loadQuestion();
    }
}

function showSummary() {
    if (summaryShown) return;
    summaryShown = true;

    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("happyDogCards").style.display = "none";

    const feedbackElement = document.getElementById("happyFeedback");
    feedbackElement.innerHTML = "";

    const pointsJoy = parseInt(localStorage.getItem("points-joy")) || 0;

    // Yhteenvedon luonti
    const summary = document.createElement("div");
    summary.id = "summary";
    summary.innerHTML = `
      <h2>Hienoa! Pääsit pelin loppuun.</h2>
      <p>Ilo on tärkeä tunne, joka auttaa meitä olemaan onnellisia ja vähentää stressiä. 
      Se tuo ihmisiä yhteen ja vahvistaa ystävyyksiä. Ilo myös auttaa meitä huomaamaan, mikä tekee elämästä erityistä ja arvokasta.</p>
      <img src="../images/happy_dog.png" alt="Iloinen koira" style="width: 150px; margin-top: 10px; ${
        pointsJoy < 10 ? "filter: grayscale(100%);" : "filter: none;"
      }">
      <p>Pisteet: ${pointsJoy}/10</p>
    `;

    const playAgainButton = document.createElement("button");
    playAgainButton.id = "happyDogPlayAgain";
    playAgainButton.textContent = "Pelaa uudelleen";
    playAgainButton.addEventListener("click", () => {
        localStorage.setItem("points-joy", 0);
        currentQuestionIndex = 0;
        summaryShown = false;
        document.getElementById("questionContainer").style.display = "block";
        document.getElementById("happyDogCards").style.display = "flex";

        summary.remove();

        loadQuestion();
    });

    summary.appendChild(playAgainButton);
    document.querySelector("article").appendChild(summary);
}

function resetGameView() {
    const pointsJoy = parseInt(localStorage.getItem("points-joy")) || 0;

    if (pointsJoy === 10) {
        document.getElementById("HappyDogStartGame").style.display = "none";
        document.getElementById("happyDog").style.display = "none";
        const feedbackElement = document.getElementById("happyFeedback");
        feedbackElement.innerHTML = `
            <p style="color: green; font-size: 1.2rem;">Olet jo saavuttanut täydet pisteet!</p>
            <img src="../images/happy_dog.png" alt="Iloinen koira" style="width: 150px; margin-top: 10px;">
            <button id="happyDogPlayAgain" style="margin-top: 20px; padding: 20px; font-size: 1rem;">Pelaa uudelleen</button>
        `;

        const playAgainButton = document.getElementById("happyDogPlayAgain");
        playAgainButton.addEventListener("click", () => {
            localStorage.setItem("points-joy", 0);
            currentQuestionIndex = 0;
            document.getElementById("happyFeedback").innerHTML = "";
            document.getElementById("questionContainer").style.display = "none";
            document.getElementById("happyDogCards").style.display = "none";
            document.getElementById("HappyDogStartGame").style.display = "block";
            document.getElementById("happyDog").style.display = "block";
        });
    } else {
        document.getElementById("HappyDogStartGame").style.display = "block";
        document.getElementById("happyDog").style.display = "block";
        document.getElementById("questionContainer").style.display = "none";
        document.getElementById("happyDogCards").style.display = "none";
        document.getElementById("happyFeedback").innerHTML = "";
    }
}

// Lisätään tapahtumakuuntelija pelin käynnistämispainikkeelle
document.getElementById("HappyDogStartGame").addEventListener("click", startGame);
