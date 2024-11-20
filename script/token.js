function navigate(page) {
  if (page === 'index') {
    window.location.href = 'index.html';
  } else if (page === 'token') {  
    window.location.href = 'token.html';
  } else if (page === 'info') {
    window.location.href = 'info.html';
  }
}

// Hakee ja näyttää pisteet token-sivulla
function updatePointsOnTokenPage() {
  const pointsJoy = parseInt(localStorage.getItem("points-joy")) || 0;
  const pointsSadness = parseInt(localStorage.getItem("points-sadness")) || 0;
  const pointsFear = parseInt(localStorage.getItem("points-fear")) || 0;
  const pointsSurprise = parseInt(localStorage.getItem("points-surprise")) || 0;
  const pointsDisgust = parseInt(localStorage.getItem("points-disgust")) || 0;
  const pointsAnger = parseInt(localStorage.getItem("points-anger")) || 0;

  // Päivitetään pisteet HTML-sivulla
  document.getElementById("points-joy").textContent = `${pointsJoy}/10`;
  document.getElementById("points-sadness").textContent = `${pointsSadness}/10`;
  document.getElementById("points-fear").textContent = `${pointsFear}/10`;
  document.getElementById("points-surprise").textContent = `${pointsSurprise}/10`;
  document.getElementById("points-disgust").textContent = `${pointsDisgust}/10`;
  document.getElementById("points-anger").textContent = `${pointsAnger}/10`;

  // Tarkistetaan, pitäisikö jokin kuva näyttää värillisenä
  if (pointsJoy >= 10) document.getElementById("image-joy").classList.add("active");
  if (pointsSadness >= 10) document.getElementById("image-sadness").classList.add("active");
  if (pointsFear >= 10) document.getElementById("image-fear").classList.add("active");
  if (pointsSurprise >= 10) document.getElementById("image-surprise").classList.add("active");
  if (pointsDisgust >= 10) document.getElementById("image-disgust").classList.add("active");
  if (pointsAnger >= 10) document.getElementById("image-anger").classList.add("active");
}

// Kutsutaan funktiota, kun sivu ladataan
window.onload = updatePointsOnTokenPage;
