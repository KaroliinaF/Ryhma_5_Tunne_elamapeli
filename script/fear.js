// Question-luokka
class Question {
  constructor(title, story, image, question, correctChoice, correctFeedback, wrongFeedback) {
    this.title = title;
    this.story = story;
    this.image = image;
    this.question = question;
    this.correctChoice = correctChoice;
    this.correctFeedback = correctFeedback;
    this.wrongFeedback = wrongFeedback;
  }

  // Metodi vastauksen tarkistamiseen
  checkAnswer(userChoice) {
    return userChoice === this.correctChoice;
  }
}


const questions = [
  new Question(
    "Outoja ääniä",
    "Olen yksin kotona ensimmäistä kertaa ja kuulen erikoisia ääniä. Ihan kuin jokin koputtaisi ikkunaan. Jokin surisee...",
    "../images/frightened_squirrel_phone.png",
    "Voinko soittaa vanhemmilleni?",
    true,
    "Juuri näin! Yksin ollessa mielikuvitus voi olla vilkkaana. Pelko on normaalia, ja on hyvä soittaa vanhemmille, kun pelottaa.",
    "Ei aivan. On täysin hyväksyttävää pyytää vanhemmilta apua, kun pelottaa. Ehkä sinä oletkin super rohkea!"
  ),
  new Question(
    "Ovikello soi",
    "Olen yksin kotona, ja ovikello soi. En odota ketään vieraita.",
    "../images/frightened_squirrel_paw_on_face.png",
    "Pitäisikö minun avata ovi?",
    false,
    "Mahtavaa! Älä avaa ovea, jos et tiedä, kuka siellä on. Odota aikuisen paluuta ja soita vaikka vanhemmillesi.",
    "Mietitään uudestaan. Ovi kannattaa pitää kiinni, kun olet yksin."
  ),

  new Question(
    "Sähköt menevät poikki",
    "Kaikki valot sammuvat yhtäkkiä, ja olen yksin kotona. Ulkona on jo pimeää.",
    "../images/frightened_squirrel_dark.png",
    "Pitäisikö minun tarkistaa sulaketaulu?",
    false,
    "Juuri näin! Soita vanhemmille tai odota heidän palaamistaan. Vanhemmilta kannattaa myös kysyä etukäteen missä on taskulamppu.",
    "Ei aivan. Sulaketaulun tarkistaminen voi olla vaarallista, jos et tiedä, mitä tehdä. Aikuiset voivat auttaa."
  ),
  new Question(
    "Outo viesti",
    "Saan puhelimeeni viestin, jossa joku pyytää minua kertomaan osoitteeni. En tunne viestin lähettäjää.",
    "../images/frightened_squirrel_sms.png",
    "Pitäisikö minun vastata viestiin?",
    false,
    "Hyvä päätös! Älä koskaan jaa tietoja tuntemattomille tai klikkaa linkkejä.",
    "Ei aivan. On tärkeää olla jakamatta henkilökohtaisia tietoja, varsinkin tuntemattomille."
  ),
  new Question(
    "Suurikokoinen koira",
    "Olen kävelemässä kotiin, kun iso koira tulee lähelle. Se haukkuu kovaa ja näyttää vihaiselta.",
    "../images/frightened_squirrel_dog.png",
    "Pitäisikö minun juosta pois?",
    false,
    "Hyvä valinta! Pysy rauhallisena, älä juokse. Koiran ohi kannattaa kävellä kauempaa rauhallisesti tai odottaa, että se menee pois. Älä katso koiraa silmiin.",
    "Ei aivan. Juokseminen voi pelästyttää koiran. Pysy rauhallisena ja vältä äkkinäisiä liikkeitä."
  ),
  new Question(
    "Pimeä metsä",
    "Olen kävelyllä ystävieni kanssa, mutta yhtäkkiä eksymme pimeään metsään. En tiedä, missä olemme.",
    "../images/frightened_squirrel_forest.png",
    "Pitäisikö minun jatkaa kävelemistä ja etsiä tie ulos?",
    false,
    "Juuri oikein! Pysy paikallasi ja odota apua. Soita vanhemmille tai hätänumeroon, jos mahdollista.",
    "Ei aivan. Eksyessä on tärkeää pysyä paikallaan, jotta sinut löydetään helpommin."
  ),
  new Question(
    "Kova ukkonen",
    "Ukkonen jyrisee ja salamat välkkyvät ikkunan ulkopuolella. Tunnen oloni hyvin pelokkaaksi.",
    "../images/frightened_squirrel_thunder.png",
    "Pitäisikö minun piiloutua peiton alle ja itkeä?",
    true,
    "Hyvä idea! Peiton alle meneminen voi auttaa rauhoittumaan. Voit myös kertoa vanhemmillesi, että pelkäät.",
    "Ei aivan. On täysin normaalia pelätä ukkosta. Voit hakea turvaa peiton alta tai olla aikuisen lähellä."
  ),
  new Question(
    "Pelottava elokuva",
    "Katson elokuvaa, ja siinä alkaa tapahtua pelottavia asioita. Sydämeni hakkaa, ja haluaisin sulkea television.",
    "../images/frightened_squirrel_under_planket.png",
    "Pitäisikö minun sulkea televisio?",
    true,
    "Juuri näin! Jos elokuva pelottaa, voit aina lopettaa sen katsomisen. Kerro myös vanhemmille, miltä sinusta tuntuu.",
    "Ei aivan. Pelottavien elokuvien katsominen ei ole pakollista. On parempi lopettaa, jos se tuntuu pahalta."
  ),
  new Question(
    "Kadonnut kaveri",
    "Leikin puistossa kaverini kanssa, mutta yhtäkkiä hän katoaa eikä vastaa kutsuihini.",
    "../images/frightened_squirrel_lost_friend.png",
    "Pitäisikö minun etsiä häntä ympäriinsä yksin?",
    false,
    "Hyvä päätös! Kerro aikuiselle, että kaverisi on kadonnut. Yhdessä voitte etsiä häntä turvallisesti.",
    "Ei aivan. Yksin etsiminen voi olla vaarallista. Kerro asiasta aikuiselle."
  ),
  new Question(
    "Yöllinen painajainen",
    "Herään keskellä yötä painajaisesta. Sydämeni hakkaa, ja huone tuntuu oudon pelottavalta.",
    "../images/frightened_squirrel_under_planket.png",
    "Pitäisikö minun mennä vanhemmieni huoneeseen?",
    true,
    "Hyvä päätös! Jos painajainen pelottaa, voit aina mennä vanhempiesi luo hakemaan turvaa.",
    "Ei aivan. Painajaiset voivat tuntua hyvin pelottavilta, ja silloin on hyvä hakea lohtua aikuisilta."
  )
];


let currentQuestionIndex = 0;

// Kysymyksen lataaminen
function loadNextQuestion() {
  const storyElement = document.getElementById("fear-story");
  const titleElement = document.getElementById("fear-title");
  const questionElement = document.getElementById("fear-question");
  const imageElement = document.getElementById("fear-story-image");

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];

    // Päivitä kysymyksen tiedot
    titleElement.textContent = currentQuestion.title;
    storyElement.textContent = currentQuestion.story;
    questionElement.textContent = currentQuestion.question;

    if (currentQuestion.image) {
      imageElement.src = currentQuestion.image;
      imageElement.alt = currentQuestion.title;
      imageElement.style.display = "block";
    } else {
      imageElement.style.display = "none";
    }
  } else {
    alert("Olet suorittanut kaikki kysymykset!");
    window.location.href = "../token.html";
  }
}

// Vastauksen tarkistaminen
function handleChoice(userChoice) {
  const feedbackText = document.getElementById("fear-feedback-text");
  const feedbackImage = document.getElementById("fear-feedback-image");
  const nextButton = document.getElementById("fear-next-button");
  const modal = document.getElementById("fear-modal");

  const currentQuestion = questions[currentQuestionIndex];

  // Tarkista vastaus
  if (currentQuestion.checkAnswer(userChoice)) {
    feedbackText.textContent = currentQuestion.correctFeedback;
    feedbackImage.src = "../images/thumbs_up_squirrel.png";
    feedbackImage.alt = "Thumbs up squirrel";
    feedbackImage.style.display = "block";
    addPoints("points-fear", 1);
  } else {
    feedbackText.textContent = currentQuestion.wrongFeedback;
    feedbackImage.src = "../images/thumbs_down_squirrel.png";
    feedbackImage.alt = "Thumbs down squirrel";
    feedbackImage.style.display = "block";
  }

  // Valmistellaan seuraava kysymys tai siirto token-sivulle
  if (currentQuestionIndex >= questions.length - 1) {
    nextButton.textContent = "Siirry merkit-sivulle";
    nextButton.onclick = () => window.location.href = "../token.html";
  } else {
    nextButton.textContent = "Seuraava kysymys";
    nextButton.onclick = () => {
      currentQuestionIndex++;
      modal.style.display = "none";
      loadNextQuestion();
    };
  }

  nextButton.style.display = "inline-block";
  modal.style.display = "flex";
}

// Modalin sulkeminen
function closeModal() {
  const modal = document.getElementById("fear-modal");
  modal.style.display = "none";
}

// Pisteiden lisääminen LocalStorageen
function addPoints(pointKey, points) {
  let currentPoints = parseInt(localStorage.getItem(pointKey)) || 0;
  currentPoints += points;
  if (currentPoints > 10) currentPoints = 10; // Maksimipisteet 10
  localStorage.setItem(pointKey, currentPoints);
}

// Sivun lataamisen jälkeen
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("fear-modal");
  modal.style.display = "none"; // Piilotetaan modal heti kun sivu ladataan
  loadNextQuestion(); 
});
