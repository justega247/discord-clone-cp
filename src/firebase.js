import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCtt4_hw-u3GOzE_DmfkYy3LuF6M3Q0AI",
  authDomain: "discord-clone-cp.firebaseapp.com",
  databaseURL: "https://discord-clone-cp.firebaseio.com",
  projectId: "discord-clone-cp",
  storageBucket: "discord-clone-cp.appspot.com",
  messagingSenderId: "1086487438453",
  appId: "1:1086487438453:web:d94dcb7a482012984f043c",
  measurementId: "G-HVL5HTRDWQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
