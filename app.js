import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_syns9kmQvF5_DqiTWYRgHwXBWqKxRn4",
  authDomain: "training-tracker-b97b1.firebaseapp.com",
  projectId: "training-tracker-b97b1",
  storageBucket: "training-tracker-b97b1.firebasestorage.app",
  messagingSenderId: "578482185576",
  appId: "1:578482185576:web:1056823ae419e815fea2dd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Firebase SDK importieren
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 

// Deine Firebase Konfiguration
const firebaseConfig = {
    apiKey: "AIzaSyB_syns9kmQvF5_DqiTWYRgHwXB...",
    authDomain: "training-tracker-b97b1.firebaseapp.com",
    projectId: "training-tracker-b97b1",
    storageBucket: "training-tracker-b97b1.appspot.com",
    messagingSenderId: "578482185576",
    appId: "1:578482185576:web:1056823ae419e8..."
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
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
// Funktion: Trainings aus Firebase abrufen & anzeigen
async function loadTrainings() {
  const querySnapshot = await getDocs(collection(db, "trainings"));
  let trainings = [];
  querySnapshot.forEach((doc) => {
    trainings.push(doc.data());
  });

  // Hier fügst du den Code ein, um die Trainings auf der Seite anzuzeigen
  console.log("Trainings geladen:", trainings);
}

// Starte das Laden der Trainings, wenn die Seite geladen ist
document.addEventListener("DOMContentLoaded", loadTrainings);
async function loadTrainings() {
    const querySnapshot = await getDocs(collection(db, "trainings"));
    const trainingList = document.getElementById("training-list");

    trainingList.innerHTML = ""; // Leert die Liste vorher

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
}

loadTrainings();
