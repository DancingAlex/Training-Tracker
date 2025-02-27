// Firebase SDK importieren
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Konfiguration
const firebaseConfig = {
    apiKey: "AIzaSyB_syns9kmQvF5_DqiTWYRgHwXBWqKxRn4",
    authDomain: "training-tracker-b97b1.firebaseapp.com",
    projectId: "training-tracker-b97b1",
    storageBucket: "training-tracker-b97b1.appspot.com",
    messagingSenderId: "578482185576",
    appId: "1:578482185576:web:1056823ae419e815fea2dd"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funktion: Trainings aus Firebase abrufen & anzeigen
async function loadTrainings() {
    console.log("🔥 Starte Abruf der Trainingsdaten...");
    try {
        const querySnapshot = await getDocs(collection(db, "Trainings"));
        const trainingList = document.getElementById("training-list");

        if (!trainingList) {
            console.error("❌ Fehler: Element mit ID 'training-list' nicht gefunden.");
            return;
        }

        trainingList.innerHTML = "";
        if (querySnapshot.empty) {
            console.warn("⚠️ Keine Trainings gefunden.");
            trainingList.innerHTML = "<li>Keine Trainings gefunden.</li>";
            return;
        }

        querySnapshot.forEach((doc) => {
            const training = doc.data();
            const li = document.createElement("li");
            li.innerHTML = `<strong>${training.Datum}:</strong> ${training.Art} - Dauer: ${training.Dauer} min | Intensität: ${training.Intensität} | Notizen: ${training.Notizen}`;
            li.style.padding = "10px";
            li.style.background = "#333";
            li.style.color = "white";
            li.style.margin = "5px 0";
            li.style.borderRadius = "5px";
            trainingList.appendChild(li);
        });
        console.log("✅ Trainingsdaten erfolgreich geladen.");
    } catch (error) {
        console.error("❌ Fehler beim Abrufen der Trainingsdaten:", error);
    }
}

// Sobald die Seite geladen ist, lade die Trainings
window.onload = loadTrainings;
