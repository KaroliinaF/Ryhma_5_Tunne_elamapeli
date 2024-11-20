// Alustetaan modal piilotettuna sivun latauksen yhteydessä
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("fear-modal");
  modal.style.display = "none"; // Piilotetaan modal heti kun sivu ladataan

  // Lataa ensimmäinen kysymys
  loadNextQuestion();
});

let currentQuestionIndex = 0;

// Kysymysten tiedot
const questions = [
  {
    title: "Outoja ääniä",
    story: "Olen yksin kotona ensimmäistä kertaa ja kuulen erikoisia ääniä. Ihan kuin jokin koputtaisi ikkunaan. Jokin surisee...",
    image: "../images/frightened_squirrel_phone.png", 
    question: "Voinko soittaa vanhemmilleni?",
    correctFeedback: "Juuri näin! Yksin ollessa mielikuvitus voi olla vilkkaana. Pelko on normaalia, ja on hyvä soittaa vanhemmille, kun pelottaa.",
    wrongFeedback: "Ei aivan. On täysin hyväksyttävää pyytää vanhemmilta apua, kun pelottaa. Ehkä sinä oletkin super rohkea!"
  },
  {
    title: "Ovikello soi",
    story: "Olen yksin kotona, ja ovikello soi. En odota ketään vieraita.",
    image: "../images/", 
    question: "Pitäisikö minun avata ovi?",
    correctFeedback: "Mietitään uudestaan. Ovi kannattaa pitää kiinni, kun olet yksin.",
    wrongFeedback: "Mahtavaa! Älä avaa ovea, jos et tiedä, kuka siellä on. Odota aikuisen paluuta ja soita vaikka vanhemmillesi."
  },

  {
    title: "",
    story: "",
    image: "../images/", 
    question: "",
    correctFeedback: "",
    wrongFeedback: ""
  },

  {
    title: "",
    story: "",
    image: "../images/", 
    question: "",
    correctFeedback: "",
    wrongFeedback: ""
  },

  {
    title: "",
    story: "",
    image: "../images/", 
    question: "",
    correctFeedback: "",
    wrongFeedback: ""
  },

  {
    title: "",
    story: "",
    image: "../images/", 
    question: "",
    correctFeedback: "",
    wrongFeedback: ""
  },

  {
    title: "",
    story: "",
    image: "../images/", 
    question: "",
    correctFeedback: "",
    wrongFeedback: ""
  },

  {
    title: "",
    story: "",
    image: "../images/", 
    question: "",
    correctFeedback: "",
    wrongFeedback: ""
  },

  {
    title: "",
    story: "",
    image: "../images/", 
    question: "",
    correctFeedback: "",
    wrongFeedback: ""
  },

  {
    title: "",
    story: "",
    image: "../images/", 
    question: "",
    correctFeedback: "",
    wrongFeedback: ""
  },
  
];

// Käsittele käyttäjän valinta
function handleChoice(isCorrect) {
  const feedbackText = document.getElementById("fear-feedback-text");
  const feedbackImage = document.getElementById("fear-feedback-image");
  const nextButton = document.getElementById("fear-next-button");
  const modal = document.getElementById("fear-modal");

  if (isCorrect) {
    feedbackText.textContent = questions[currentQuestionIndex - 1].correctFeedback;
    feedbackImage.src = "../images/thumbs_up_squirrel.png";
    feedbackImage.alt = "Thumbs up squirrel";
    feedbackImage.style.display = "block";
    addPoints("points-fear", 1);
  } else {
    feedbackText.textContent = questions[currentQuestionIndex - 1].wrongFeedback;
    feedbackImage.style.display = "none";
  }

  nextButton.style.display = "inline-block"; // Näytetään "Seuraava kysymys" -painike
  modal.style.display = "flex"; // Näytetään modal
}

// Sulje modal
function closeModal() {
  const modal = document.getElementById("fear-modal");
  modal.style.display = "none"; // Piilotetaan modal
}

// Lataa seuraava kysymys
function loadNextQuestion() {
  const storyElement = document.getElementById("fear-story");
  const titleElement = document.getElementById("fear-title");
  const questionElement = document.getElementById("fear-question");
  const imageElement = document.getElementById("fear-story-image");

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];

    // Päivitä otsikko, tarina, kuva ja kysymys
    titleElement.textContent = currentQuestion.title;
    storyElement.textContent = currentQuestion.story;
    questionElement.textContent = currentQuestion.question; // Päivitä "Valinta"-teksti

    if (currentQuestion.image) {
      imageElement.src = currentQuestion.image;
      imageElement.alt = currentQuestion.title;
      imageElement.style.display = "block";
    } else {
      imageElement.style.display = "none";
    }

    currentQuestionIndex++;
  } else {
    alert("Olet suorittanut kaikki kysymykset!");
    window.location.href = "../token.html"; // Vie käyttäjä Merkit-sivulle
  }
}

// Lisää pisteitä LocalStorageen
function addPoints(pointKey, points) {
  let currentPoints = parseInt(localStorage.getItem(pointKey)) || 0;
  currentPoints += points;
  if (currentPoints > 10) currentPoints = 10; // Maksimipisteet 10
  localStorage.setItem(pointKey, currentPoints);
}
