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

// Trainings laden
async function loadTrainings() {
    console.log("Lade Trainings...");
    
    const trainingList = document.getElementById("training-list");
    if (!trainingList) {
        console.error("Element 'training-list' nicht gefunden.");
        return;
    }

    trainingList.innerHTML = `<p class="loading">Lade Trainings...</p>`;

    try {
        const querySnapshot = await getDocs(collection(db, "trainings"));

        if (querySnapshot.empty) {
            trainingList.innerHTML = `<p class="no-trainings">Keine Trainings gefunden.</p>`;
            return;
        }

        trainingList.innerHTML = ""; // Liste leeren

        querySnapshot.forEach((doc) => {
            const training = doc.data();
            const li = document.createElement("li");
            li.classList.add("training-item");
            li.innerHTML = `
                <span class="training-date">${training.Datum}:</span>
                <span class="training-type">${training.Art}</span> - 
                Dauer: <span class="training-duration">${training.Dauer}</span> min | 
                Intensität: <span class="training-intensity">${training.Intensität}</span> | 
                Notizen: <span class="training-notes">${training.Notizen}</span>
            `;
            trainingList.appendChild(li);
        });
    } catch (error) {
        console.error("Fehler beim Laden der Trainings:", error);
        trainingList.innerHTML = `<p class="error">Fehler beim Laden der Daten.</p>`;
    }
}

// Button-Eventlistener
document.addEventListener("DOMContentLoaded", () => {
    const updateButton = document.getElementById("update-button");
    if (updateButton) {
        updateButton.addEventListener("click", loadTrainings);
    }
    loadTrainings();
});
