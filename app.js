document.addEventListener("DOMContentLoaded", function() {
    const trainingData = [
        { date: "22.02.2025", title: "Chill-Vibe-Session", type: "Breaking", duration: "60 min", intensity: "Leicht", notes: "Fokus auf Flow und Entspannung" },
        { date: "23.02.2025", title: "High-Power-Breaking-Workout", type: "Breaking", duration: "90 min", intensity: "Hoch", notes: "Viel Powermoves & Explosivität" },
        { date: "24.02.2025", title: "Moderates Breaking-Workout", type: "Breaking", duration: "75 min", intensity: "Mittel", notes: "Technikfokus & Footwork" },
        { date: "25.02.2025", title: "Tricking Basics + Shoulder Recovery", type: "Tricking", duration: "80 min", intensity: "Mittel", notes: "Leichte Basics & Beweglichkeitstraining" },
        { date: "26.02.2025", title: "Waving Drill + Flow Experiment", type: "Waving", duration: "60 min", intensity: "Leicht", notes: "Flüssigkeit & Präzision verbessern" },
        { date: "27.02.2025", title: "Soft Acrobatics & Handstand Training", type: "Soft Acrobatics", duration: "70 min", intensity: "Mittel", notes: "Balance & Kontrolle" }
    ];

    const trainingList = document.getElementById("training-list");

    trainingData.forEach(session => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${session.date}:</strong> ${session.title} (${session.type}) - Dauer: ${session.duration} | Intensität: ${session.intensity} | Notizen: ${session.notes}`;
        trainingList.appendChild(listItem);
    });
});
