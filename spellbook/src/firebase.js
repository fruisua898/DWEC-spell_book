import app from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyA0OKJGLxTqsi9tDJ2bVM7BYL3E2ldfWxM",

  authDomain: "spellbook-79e9c.firebaseapp.com",

  projectId: "spellbook-79e9c",

  storageBucket: "spellbook-79e9c.appspot.com",

  messagingSenderId: "566294880235",

  appId: "1:566294880235:web:51e5798300edeb132703ae"

};



// Initialize Firebase

app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {db, auth};