function handleChoice(isCorrect) {
    const feedbackSection = document.getElementById("feedback-section");
    const feedbackText = document.getElementById("feedback-text");
  
    if (isCorrect) {
      feedbackText.textContent = "Oikein! Yksin ollessa mielikuvitus voi olla vilkkaana. Koputus saattaa olla puun oksat jotka osuvat ikkunaan, hurina voi olla äänekäs jääkaappi. Pelko on täysin normaalia, ja vanhemmille on hyvä soittaa, kun pelottaa.";
    } else {
      feedbackText.textContent = "Väärin. Jos olet yksin ja pelkäät, on täysin hyväksyttävää soittaa vanhemmille ja pyytää tukea.";
    }
  
    feedbackSection.style.display = "block";
  }