// Kaikkien kuvien polut
const images = [
    "images/koira1.jpg",
    "images/koira2.jpg",
    "images/koira3.jpg",
    "images/koira4.jpg",
    "images/koira5.jpg",
    "images/koira6.jpg",
    "images/koira7.jpg",
    "images/koira8.jpg",
    "images/koira9.jpg",
    "images/koira10.jpg"
  ];
  
  // Indeksi pitää kirjaa mitkä kuvat näytetään
  let currentIndex = 0;
  
  // Funktio, joka päivittää näkyvät kuvat
  function updateImages() {
    const card1 = document.querySelector("#card1 img");
    const card2 = document.querySelector("#card2 img");
  
    // Asetetaan kuvat, jos niitä on jäljellä
    if (currentIndex < images.length - 1) {
      card1.src = images[currentIndex];
      card2.src = images[currentIndex + 1];
    } else {
      // Peli päättyy, kun kuvat loppuvat
      showEndScreen();
    }
  }
  
  // Näytä pelin lopetusviesti tai tulossivu
  function showEndScreen() {
    const gameArea = document.querySelector("#cardsGame");
  
    // Poistetaan kortit ja nappi
    gameArea.innerHTML = `
      <h2>Peli päättyi!</h2>
      <p>Kiitos pelaamisesta! Voit aloittaa pelin uudestaan painamalla nappia.</p>
      <button id="restartButton" class="gameButton">Aloita alusta</button>
    `;
  
    // Aloita alusta -napin toiminta
    document.querySelector("#restartButton").addEventListener("click", restartGame);
  }
  
  // Käynnistä peli alusta
  function restartGame() {
    currentIndex = 0;
    const gameArea = document.querySelector("#cardsGame");
    gameArea.innerHTML = `
      <h2>Tunnistetaan kuvista ilo!</h2>
      <p>Valitse kahdesta kuvasta: jokaisesta kuvaparista on oma kysymyksensä,
        jonka perusteella valitaan väittämää vastaava kuva. Nyt pelaamaan!</p><br>
      <div id="cards">
        <div id="card1"><img src="" alt="Kuva 1"></div>
        <div id="card2"><img src="" alt="Kuva 2"></div>
      </div>
      <button id="nextButton" class="gameButton">Seuraava</button>
    `;
    document.querySelector("#nextButton").addEventListener("click", nextPair);
    updateImages();
  }
  
  // Siirry seuraavaan kuvapariin
  function nextPair() {
    currentIndex += 2;
    updateImages();
  }
  
  // Ladataan ensimmäiset kuvat alussa
  updateImages();
  
  // Lisää nappi seuraavan parin vaihtamiseen
  document.querySelector("#cardsGame").insertAdjacentHTML(
    "beforeend",
    `<button id="nextButton" class="gameButton">Seuraava</button>`
  );
  
  // Nappiin tapahtumankuuntelija
  document.querySelector("#nextButton").addEventListener("click", nextPair);
  