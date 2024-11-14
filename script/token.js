function navigate(page) {
  if (page === 'index') {
    window.location.href = 'index.html';
  } else if (page === 'token') {  
    window.location.href = 'token.html';
  } else if (page === 'info') {
    window.location.href = 'info.html';
  }
}

// Funktio päivittää kuvan värin, kun pisteet saavuttavat 10
function updateImageColor(pointsId, imageId) {
  const pointsElement = document.getElementById(pointsId);
  const imageElement = document.getElementById(imageId);

  // Tarkista pisteiden määrä ja päivitä kuva värilliseksi, jos pisteet ovat 10
  if (parseInt(pointsElement.textContent) >= 10) {
    imageElement.classList.add("active");
  }
}

// Tarkista jokaisen kuvan pisteet sivun latautuessa
window.onload = function() {
  updateImageColor("points-joy", "image-joy");
  updateImageColor("points-sadness", "image-sadness");
  updateImageColor("points-fear", "image-fear");
  updateImageColor("points-surprise", "image-surprise");
  updateImageColor("points-disgust", "image-disgust");
  updateImageColor("points-anger", "image-anger");
};
