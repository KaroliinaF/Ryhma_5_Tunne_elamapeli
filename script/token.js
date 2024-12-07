function navigate(page) {
  if (page === 'index') {
    window.location.href = 'index.html';
  } else if (page === 'token') {  
    window.location.href = 'token.html';
  } else if (page === 'info') {
    window.location.href = 'info.html';
  }
}

const AngerPoints = localStorage.getItem('AngerPoints');
document.getElementById("points-anger").textContent = `${AngerPoints}/10`;
