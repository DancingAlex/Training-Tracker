import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_syns9kmQvF5_DqiTWYRgHwXBWqKxRn4",
    authDomain: "training-tracker-b97b1.firebaseapp.com",
    projectId: "training-tracker-b97b1",
    storageBucket: "training-tracker-b97b1.appspot.com",
    messagingSenderId: "578482185576",
    appId: "1:578482185576:web:1056823ae419e815fea2dd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funktion: Trainings aus Firebase abrufen & anzeigen
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

document.addEventListener("DOMContentLoaded", loadTrainings);
