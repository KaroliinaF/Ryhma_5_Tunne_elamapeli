function navigate(page) {
  if (page === 'index') {
    window.location.href = 'index.html';
  } else if (page === 'token') {
    window.location.href = 'token.html';
  } else if (page === 'info') {
    window.location.href = 'info.html';
  }
}

// Päivitä pisteet token-sivulla
function updatePointsOnTokenPage() {
  // Hae pisteet localStorage:sta
  const pointsJoy = parseInt(localStorage.getItem("points-joy")) || 0;
  const pointsSadness = parseInt(localStorage.getItem("points-sadness")) || 0;
  const pointsFear = parseInt(localStorage.getItem("points-fear")) || 0;
  const pointsSurprise = parseInt(localStorage.getItem("points-surprise")) || 0;
  const pointsDisgust = parseInt(localStorage.getItem("points-disgust")) || 0;
  const pointsAnger = parseInt(localStorage.getItem("points-anger")) || 0;

  // Laske yhteispisteet
  const totalPoints = pointsJoy + pointsSadness + pointsFear + pointsSurprise + pointsDisgust + pointsAnger;

  // Päivitä yksittäiset pisteet DOM-elementteihin
  document.getElementById("points-joy").textContent = `${pointsJoy}/10`;
  document.getElementById("points-sadness").textContent = `${pointsSadness}/10`;
  document.getElementById("points-fear").textContent = `${pointsFear}/10`;
  document.getElementById("points-surprise").textContent = `${pointsSurprise}/10`;
  document.getElementById("points-disgust").textContent = `${pointsDisgust}/10`;
  document.getElementById("points-anger").textContent = `${pointsAnger}/10`;

  // Päivitä yhteispisteet DOM-elementtiin
  document.getElementById("total-points").textContent = `${totalPoints}/60`;

  // Päivitä kuvan tila pisteiden perusteella
  updateBadgeStatus("image-joy", pointsJoy);
  updateBadgeStatus("image-sadness", pointsSadness);
  updateBadgeStatus("image-fear", pointsFear);
  updateBadgeStatus("image-surprise", pointsSurprise);
  updateBadgeStatus("image-disgust", pointsDisgust);
  updateBadgeStatus("image-anger", pointsAnger);

  // Lokita konsoliin pisteet debuggausta varten
  console.log("Pisteet päivitetty:", { pointsJoy, pointsSadness, pointsFear, pointsSurprise, pointsDisgust, pointsAnger, totalPoints });
}

// Päivitä kuvan tila (värillinen/harmaa)
function updateBadgeStatus(imageId, points) {
  const imageElement = document.getElementById(imageId);
  if (points === 10) {
    imageElement.classList.add("active"); // Lisää värillinen tila
  } else {
    imageElement.classList.remove("active"); // Poista värillinen tila
  }
}

// Nollaa kaikki pisteet
document.getElementById("reset-points-button").addEventListener("click", function () {
  // Aseta kaikki pisteet localStorage:en nollaksi
  localStorage.setItem("points-joy", 0);
  localStorage.setItem("points-sadness", 0);
  localStorage.setItem("points-fear", 0);
  localStorage.setItem("points-surprise", 0);
  localStorage.setItem("points-disgust", 0);
  localStorage.setItem("points-anger", 0);

  // Päivitä näkymä
  updatePointsOnTokenPage();

  // Ilmoita käyttäjälle
  alert("Kaikki pisteet on nollattu!");
});

// Päivitä pisteet sivun latauksessa
window.onload = updatePointsOnTokenPage;
