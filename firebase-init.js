// Firebase browser SDK setup for the Constarration web app.
// The web config identifies the project; database access is controlled by Firestore Rules.
const firebaseConfig = {
  apiKey: "AIzaSyAzZusst92CmscK7Rd6lOFgFAv-ec1YZfI",
  authDomain: "constarration.firebaseapp.com",
  projectId: "constarration",
  storageBucket: "constarration.firebasestorage.app",
  messagingSenderId: "61324780155",
  appId: "1:61324780155:web:f80f1b205508d8fc1c78de",
  measurementId: "G-BMNEPFXM68"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
window.firebaseAuth = firebase.auth();
window.firestoreDb = firebase.firestore();
