const questions = [
  {
    title: "Rikkoutunut lelu",
    situation: "Kaverisi rikkoi lelusi vahingossa, ja sinua suututtaa. Mitä teet?",
    answers: [
      { text: "Sanon vihaisesti, etten lainaa enää mitään.", points: 0 },
      { text: "Kysyn, voimmeko korjata lelun yhdessä.", points: 2 },
      { text: "Pyydän häntä auttamaan uuden lelun hankkimisessa.", points: 1 },
      { text: "Itken ja syytän häntä.", points: 0 },
    ],
  },
  {
    title: "Vanhempien pelisäännöt",
    situation: "Vanhempasi eivät antaneet sinun pelata videopelejä pidempään. Mitä teet?",
    answers: [
      { text: "Menet omaan huoneeseesi murjottamaan.", points: 0 },
      { text: "Sovit heidän kanssaan uuden peliajan.", points: 1 },
      { text: "Puhut vanhemmille, että olisit halunnut pelata pidempään.", points: 2 },
      { text: "Huudan ja paiskaan ohjaimen maahan.", points: 0 },
    ],
  },
  {
    title: "Epäreilu joukkuejako",
    situation: "Luokkakaverisi ei valinnut sinua joukkueeseensa, ja se suututtaa sinua. Mitä teet?",
    answers: [
      { text: "Kysyn opettajalta tai valmentajalta, voisimmeko jakaa joukkueet uudelleen.", points: 1 },
      { text: "Ehdotan, että voisin liittyä seuraavassa pelissä toiseen joukkueeseen.", points: 2 },
      { text: "Sanon vihaisesti, että joukkue on epäreilu ja kieltäydyn pelaamasta.", points: 0 },
      { text: "Jään kentän laidalle mököttämään ja syytän muita.", points: 0 },
    ],
  },
  {
    title: "Kiistely pelivuorosta",
    situation: "Sinun ja sisaruksesi vuoroista pelikonsolilla syntyy riita. Olet turhautunut. Mitä teet?",
    answers: [
      { text: "Ehdotan, että jaamme peliajan tasapuolisesti.", points: 2 },
      { text: "Pyydän vanhemmilta apua ratkaisemaan vuorottelun.", points: 1 },
      { text: "Riitelen äänekkäästi ja sanon, ettei hän saa enää pelata ollenkaan.", points: 0 },
      { text: "Sammutan pelikonsolin ja lähden vihaisena pois.", points: 0 },
    ],
  },
  {
    title: "Odottaminen lelukaupassa",
    situation: "Joudut odottamaan kaupassa pitkään, vaikka haluaisit jo leikkiä uudella lelullasi. Se turhauttaa sinua. Mitä teet?",
    answers: [
      { text: "Alan kiukutella ja vaadin vanhempiani kiirehtimään.", points: 0 },
      { text: "Pyydän vanhemmilta, voinko katsoa muita leluja odottaessani.", points: 2 },
      { text: "Yritän hengittää syvään ja miettiä, mitä kaikkea kivaa voin tehdä leluilla myöhemmin.", points: 1 },
      { text: "Istun lattialle ja mökötän.", points: 0 },
    ],
  }
];

let currentQuestionIndex = 0;
let totalPoints = 0;

// Function to start the game
function startGame() {
  document.getElementById("anger-startScreen").style.display = "none";
  document.getElementById("anger-gameContainer").style.display = "block";
  document.getElementById("anger-progress").style.display = "block";
  displayQuestion();
}

// Function to display the current question and answers
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  const titleElement = document.getElementById("anger-title");
  const situationElement = document.getElementById("anger-situation");
  const answersElement = document.getElementById("anger-answers");
  const feedbackContainer = document.getElementById("anger-feedbackContainer");
  const feedbackElement = document.getElementById("anger-feedback");
  const feedbackImageElement = document.getElementById("anger-feedbackImage");
  const progressElement = document.getElementById("anger-progress");
  const nextButton = document.getElementById("anger-nextButton");
  progressElement.style.display = "block";
  progressElement.textContent = `${currentQuestionIndex + 1}/${questions.length}`;


  // Hide feedback and next button until an answer is selected
  feedbackContainer.style.display = "none";
  nextButton.style.display = "none";

  // Clear previous feedback
  feedbackElement.innerHTML = "";
  feedbackImageElement.innerHTML = "";

   // Display the title if it exists
   if (question.title) {
    titleElement.textContent = question.title;
    titleElement.style.display = "block";
  } else {
    titleElement.style.display = "none";
  }

  // Display the situation
  situationElement.textContent = question.situation;

   // Display the answers
   answersElement.innerHTML = "";
   question.answers.forEach((answer, index) => {
     const button = document.createElement("button");
     button.textContent = answer.text;
     button.classList.add('styled-button');
     button.onclick = () => {
       // Disable all answer buttons after selecting one
       const allButtons = document.querySelectorAll('#anger-answers button');
       allButtons.forEach(btn => {
         btn.disabled = true;
         btn.style.opacity = '0.5';
       });
       // Highlight the selected button
       button.style.backgroundColor = '#0C2720';
       button.style.color = 'White';
       button.style.opacity = '1';
       selectAnswer(index);
     };
     answersElement.appendChild(button);
   });

// Display progress
  if (currentQuestionIndex < questions.length) {
    progressElement.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
  } else {
    progressElement.style.display = 'none';
  }
}



// Function to handle answer selection
function selectAnswer(answerIndex) {
  const question = questions[currentQuestionIndex];
  const selectedAnswer = question.answers[answerIndex];
  const feedbackContainer = document.getElementById("anger-feedbackContainer");
  const feedbackElement = document.getElementById("anger-feedback");
  const feedbackImageElement = document.getElementById("anger-feedbackImage");
  const nextButton = document.getElementById("anger-nextButton");

  // Add points based on the selected answer
  totalPoints += selectedAnswer.points;

  // Display feedback with points earned for the selected answer
  let feedbackMessage;
  let feedbackImage;
  if (selectedAnswer.points === 2) {
    feedbackMessage = "Hienoa! Hallitsit tunteesi erinomaisesti! Sait 2 pistettä.";
    feedbackImage = "<img src='../images/happy_cat.png' alt='Hymyilevä kissa' />";
  } else if (selectedAnswer.points === 1) {
    feedbackMessage = "Hyvin tehty! Voisit vielä parantaa tunteiden hallintaa. Sait 1 pisteen.";
    feedbackImage = "<img src='../images/smiling_cat.png' alt='Hymyilevä kissa' />";
  } else {
    feedbackMessage = "Tunteiden hallinta vaatii vielä harjoittelua. Älä luovuta! Sait 0 pistettä.";
    feedbackImage = "<img src='../images/neutral_cat.png' alt='Neutraali kissa' />";
  }

  feedbackElement.innerHTML = `<p>${feedbackMessage}</p>`;
  feedbackImageElement.innerHTML = feedbackImage;
  feedbackContainer.style.display = "flex";

  // Show next button
  nextButton.style.display = "block";
}

// Function to move to the next question
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    // Game over, display final feedback with cat image
    const titleElement = document.getElementById("anger-title");
    const situationElement = document.getElementById("anger-situation");
    const answersElement = document.getElementById("anger-answers");
    const feedbackContainer = document.getElementById("anger-feedbackContainer");
    const nextButton = document.getElementById("anger-nextButton");
    const finalFeedbackElement = document.getElementById("anger-finalFeedback");
    
    // Piilotetaan ja tyhjennetään otsikko
    titleElement.style.display = "none";
    titleElement.textContent = ""; // Tämä varmistaa, että otsikko ei jää näkyviin

    situationElement.textContent = "Peli on ohi! Kiitos, että pelasit ja harjoittelit vihan hallintaa.";
    answersElement.innerHTML = "";
    feedbackContainer.style.display = "none";
    nextButton.style.display = "none";


    // Display final feedback with cat image and total points
    finalFeedbackElement.innerHTML = `<a href='../token.html'><img src='../images/angry_cat.png' id='angryCat'/></a>
                                      <p>Sait yhteensä ${totalPoints}/10 pistettä!</p>
                                      <p>Muista, että jokainen voi oppia hallitsemaan vihaa ja muita tunteita. Jatka harjoittelua ja ole tunteiden sankari!</p>
                                      <p>Klikkaa kissasta jatkaaksesi uusien tunteiden maailmaan!</p>`;
    finalFeedbackElement.style.display = "block";

    // Store points in localStorage for the token page
    localStorage.setItem('AngerPoints', totalPoints);
  }
}

// Set up the start button
document.getElementById("anger-startButton").onclick = startGame;

// Set up the next button
document.getElementById("anger-nextButton").onclick = nextQuestion;