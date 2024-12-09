const balls = document.querySelectorAll(".ball");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");
const startButton = document.getElementById("start-game");
const modal = document.getElementById("confused-modal");
const continueButton = document.getElementById("confused-continue-button");
const modalMessage = document.getElementById("confused-modal-message");

const modalMessages = [
  `Odottamattomat muutokset rutiineissa: Jos päivittäiset rutiinit yhtäkkiä muuttuvat, kuten koulupäivän rakenne tai perheen ruokailuajat, se voi olla hämmentävää, koska olet tottunut tiettyyn ennakoitavuuteen.`,
  `Monimutkaiset sosiaaliset tilanteet: Erityisesti silloin, kun kyseessä on ryhmätilanne, voi hämmentyä esimerkiksi siitä, miksi jotkut lapset leikkivät yhdessä, mutta eivät halua ottaa muita mukaan.`,
  `Käyttäytymissäännöt eri tilanteissa: Kun kohtaat erilaisia odotuksia eri ympäristöissä (Esimerkiksi kotona, koulussa ja päiväkodissa), voi olla hämmentynyt siitä, milloin mikäkin käytös on hyväksyttävää missäkin tilanteessa. Kotona esimerkiksi saatat saada istua hassusti tuolilla syödesäsi, mutta koulussa et.`,
  `Aikuisten ristiriitaiset viestit ja tunteet: Jos aikuinen sanoo jotain, mutta hänen ilmeensä tai käytöksensä kertoo toista, voi kokea hämmennystä. Esimerkiksi, jos joku sanoo olevansa iloinen, mutta näyttää surulliselta.`,
  `Fantasia ja todellisuus: Sadut, fantasiatarinat ja mielikuvitushahmot voivat aiheuttaa hämmennystä, kun yrität ymmärtää, mikä on totta ja mikä ei. Joskus saatat kysyä, onko joku hahmo oikeasti olemassa tai voivatko sadut tapahtua oikeasti. Se on täysin normaalia.`,
  `Erilaiset kommunikaatiotavat ja sanonnat: Jos aikuinen käyttää sanontoja tai kielellisiä ilmaisuja, joita et täysin ymmärrä, kuten "pitää jalat maassa" tai "ollaan kuin kaksi marjaa," saatat hämmentyä sanojen merkityksestä. Hämmennys monesti auttaa sinua kysymään mitä tarkoitetaan ja opit uutta!`,
  `Oman kehon reaktiot ja tunteet: Kun koet voimakkaita tunteita, kuten pelkoa tai innostusta, tai fyysisiä reaktioita kuten väsymystä tai kiukkua, et välttämättä täysin ymmärrä, miksi nämä tunteet syntyvät, mikä voi aiheuttaa hämmennystä.`,
  `Kulttuurierot ja erilaiset tavat: Kun näet muiden ihmisten toimivan tavoilla, jotka poikkeavat omasta ympäristöstäsi, se voi aiheuttaa hämmennystä. Esimerkiksi vieraat ruokailutavat, kieli tai tavat voivat tuntua oudolta ja vaikealta ymmärtää.`,
  `Uuden oppiminen, joka haastaa aiemman tiedon: Jos opit jotain, mikä on ristiriidassa aiemman ymmärryksesi kanssa (kuten se, että taivas ei ole oikeasti "sininen" vaan valo taittuu eri tavalla), se voi olla hämmentävää.`,
];

let score = 0; // Pelissä ansaitut pisteet
let tokenPoints = parseInt(localStorage.getItem("points-surprise")) || 0; // Token-pisteet
let activeBall = null;
let speed = 1000;
let gameInterval;

function startGame() {
  resetGame();
  activateRandomBall();
  gameInterval = setInterval(() => {
    activateRandomBall();
    if (speed > 200) speed -= 50; // Nopeutetaan pallojen vaihtumista
  }, speed);
}

function activateRandomBall() {
  if (activeBall) {
    activeBall.classList.remove("active");
  }

  const randomIndex = Math.floor(Math.random() * balls.length);
  activeBall = balls[randomIndex];
  activeBall.classList.add("active");
}

function handleBallClick(event) {
  if (event.target.closest(".ball") === activeBall) {
    score++;
    scoreElement.textContent = `Pisteet pelissä: ${score}`;
    feedbackElement.textContent = `Hyvä! Jatka näin!`;

    if (score % 5 === 0) {
      addTokenPoint();
    }
  } else {
    endGame("Väärä pallo! Yritä uudelleen.");
  }
}

function addTokenPoint() {
  tokenPoints++;
  localStorage.setItem("points-surprise", tokenPoints);

  // Valitse viesti token-pisteen perusteella
  const messageIndex = (tokenPoints - 1) % modalMessages.length; // Kiertää viestit
  modalMessage.textContent = modalMessages[messageIndex]; // Päivitä modalin viesti

  // Näytä modal-ikkuna
  showModal();

  const tokenDisplay = document.getElementById("points-surprise");
  if (tokenDisplay) {
    tokenDisplay.textContent = `${tokenPoints}/10`; // Päivitetään token-sivun pisteet
  }
}

function showModal() {
  modal.classList.add("visible");
  clearInterval(gameInterval); // Pysäytä peli modalin aikana
}

function hideModal() {
  modal.classList.remove("visible");
  gameInterval = setInterval(() => {
    activateRandomBall();
    if (speed > 200) speed -= 50;
  }, speed); // Jatka peliä modalin jälkeen
}

function endGame(message) {
  clearInterval(gameInterval);
  feedbackElement.textContent = `${message} Lopputulos: ${score} pistettä.`;
  if (activeBall) activeBall.classList.remove("active");
  activeBall = null;
}

function resetGame() {
  score = 0;
  speed = 1000;
  scoreElement.textContent = "Pisteet pelissä: 0";
  feedbackElement.textContent = "";
}

// Modalin sulkeminen "Jatka"-napista
continueButton.addEventListener("click", hideModal);

// Event-kuuntelijat
balls.forEach(ball => ball.addEventListener("click", handleBallClick));
startButton.addEventListener("click", startGame);
