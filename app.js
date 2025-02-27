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

// Debug-Hilfe: Status auf der Seite anzeigen
function debugMessage(msg) {
    const debugBox = document.getElementById("debug-box");
    if (debugBox) {
        debugBox.innerHTML += `<p>${msg}</p>`;
    }
}

// Funktion: Trainings aus Firebase abrufen & anzeigen
async function loadTrainings() {
    debugMessage("Starte Datenabruf...");
    
    try {
        const querySnapshot = await getDocs(collection(db, "trainings"));
        const trainingList = document.getElementById("training-list");

        if (!trainingList) {
            debugMessage("Fehler: Element 'training-list' nicht gefunden.");
            return;
        }

        trainingList.innerHTML = "";
        
        if (querySnapshot.empty) {
            debugMessage("Keine Trainingsdaten in der Datenbank gefunden.");
            return;
        }

        querySnapshot.forEach((doc) => {
            const training = doc.data();
            const li = document.createElement("li");
            li.innerHTML = `<strong>${training.Datum}:</strong> ${training.Art} - Dauer: ${training.Dauer} min | Intensität: ${training.Intensität} | Notizen: ${training.Notizen}`;
            li.style.padding = "10px";
            li.style.background = "#333";
            li.style.margin = "5px 0";
            li.style.borderRadius = "5px";
            trainingList.appendChild(li);
        });

        debugMessage("Trainings erfolgreich geladen!");
    } catch (error) {
        debugMessage(`Fehler beim Abrufen der Daten: ${error.message}`);
    }
}

// Starte das Laden der Trainings, wenn die Seite geladen ist
document.addEventListener("DOMContentLoaded", loadTrainings);
