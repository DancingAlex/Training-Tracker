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
    console.log("Lade Trainings...");

    const querySnapshot = await getDocs(collection(db, "trainings"));
    const trainingList = document.getElementById("training-list");

    // Falls die Liste existiert, leere sie
    if (trainingList) {
        trainingList.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const training = doc.data();
            const li = document.createElement("li");
            li.innerHTML = `<strong>${training.Datum}:</strong> ${training.Art} - Dauer: ${training.Dauer} min | Intensität: ${training.Intensität} | Notizen: ${training.Notizen}`;
            trainingList.appendChild(li);
        });

        if (querySnapshot.empty) {
            trainingList.innerHTML = "<li>Keine Trainings gefunden.</li>";
        }
    } else {
        console.error("Fehler: training-list Element nicht gefunden.");
    }
}

// Starte das Laden der Trainings, wenn die Seite geladen ist
document.addEventListener("DOMContentLoaded", loadTrainings);

// Reload-Button hinzufügen
document.getElementById("reload-btn").addEventListener("click", loadTrainings);
