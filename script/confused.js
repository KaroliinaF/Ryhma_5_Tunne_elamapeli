let points = parseInt(localStorage.getItem("points-surprise")) || 0;
document.getElementById("points").innerText = points;

// Lataa tallennetut kohdat ja niiden tilat
function loadTasks() {
    for (let i = 1; i <= 10; i++) {
        const taskId = `task${i}`;
        const taskChecked = localStorage.getItem(taskId) === "true";
        document.getElementById(taskId).checked = taskChecked;
        if (taskChecked) points++;
    }
    document.getElementById("points").innerText = points;
}

// Päivitä pisteet ja tallenna tilat LocalStorageen
function updatePoints(checkbox, taskId) {
    if (checkbox.checked) {
        points++;
    } else {
        points--;
    }
    document.getElementById("points").innerText = points;
    localStorage.setItem("points-surprise", points);
    localStorage.setItem(taskId, checkbox.checked);

    if (points === 10) {
        alert("Hienoa! Ymmärrät nyt kaikki hämmennyksen aiheet!");
    }
}

// Lataa kohdat sivun latauksen yhteydessä
window.onload = loadTasks;