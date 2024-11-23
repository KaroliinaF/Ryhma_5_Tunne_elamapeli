// score count
let sadGameScore = 0;
const sadGameFeedbackBox = document.getElementById('sad-feedback-box');
const sadGameTips = [
  "Hyväksy tunteesi: On okei tuntea surua ja antaa itsellesi lupa tuntea.",
  "Keskustele tunteistasi: Ystävän tai terapeutin kanssa puhuminen voi auttaa.",
  "Huolehdi itsestäsi: Lepo, liikunta ja terveellinen ruokavalio tukevat toipumista.",
  "Anna aikaa: Suru voi viedä aikaa, eikä toipumiseen ole kiirettä."
];

// game logic
document.querySelectorAll('.symbol').forEach((symbol) => {
  symbol.addEventListener('click', () => {
    const isCorrectSymbol = symbol.getAttribute('data-correct') === 'true';

    if (isCorrectSymbol && !symbol.classList.contains('disabled')) {
      sadGameScore += 2.5;
      sadGameFeedbackBox.querySelector("h2").textContent = "Oikein valittu!";
      sadGameFeedbackBox.querySelector("p").textContent = sadGameTips[sadGameScore / 2.5 - 1]; 
      sadGameFeedbackBox.classList.remove('hidden');
      symbol.classList.add('disabled');
     
      document.getElementById("sad-game-score").textContent = sadGameScore.toFixed(1);

      // localstorage
      localStorage.setItem('points-sadness', sadGameScore); 

      // max score
      if (sadGameScore === 10) {
        sadGameFeedbackBox.querySelector("h2").textContent = "Onnittelut!";
        sadGameFeedbackBox.querySelector("p").textContent = "Voitit pelin ja ansaitsit merkin!";
        
        // save max score
        localStorage.setItem('points-sadness', 10); 

        // to token page
        setTimeout(() => {
          window.location.href = 'token.html';
        }, 2000); 
      }
    } else if (!isCorrectSymbol) {
      sadGameFeedbackBox.querySelector("h2").textContent = "Väärä symboli!";
      sadGameFeedbackBox.querySelector("p").textContent = "Yritä uudelleen!";
      sadGameFeedbackBox.classList.remove('hidden');
    }
  });
});
